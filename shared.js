// ── Shared JS for szigorlati tételek oldalak ──

// 1. Bold-kék szín a Tétel/Definíció/stb. labelekre
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('strong').forEach(function(el) {
        var text = el.textContent.trim();
        if (text.startsWith('Tétel') || text.startsWith('Definíció') ||
            text.startsWith('Kérdés') || text.startsWith('Megj')) {
            el.style.color = '#1a6bbf';
        }
    });
});

// 2. Zárójeles magyarázatok szürkítése (inline user notes)
(function() {
    var noteRegex = /(\s*\([^)]{15,}\)\s*)/g;
    var mathPrefixRegex = /[a-zA-Z\u03b1-\u03c9\u0391-\u03a9\u2080-\u2089\u2070-\u2079\d]$/;

    function wrapNotes(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            var text = node.textContent;
            noteRegex.lastIndex = 0;
            if (!noteRegex.test(text)) return;
            noteRegex.lastIndex = 0;
            var frag = document.createDocumentFragment();
            var lastIndex = 0, match;
            while ((match = noteRegex.exec(text)) !== null) {
                var before = text.slice(lastIndex, match.index);
                if (before.length > 0 && mathPrefixRegex.test(before)) {
                    frag.appendChild(document.createTextNode(before + match[0]));
                    lastIndex = match.index + match[0].length;
                    continue;
                }
                if (before) frag.appendChild(document.createTextNode(before));
                var span = document.createElement('span');
                span.className = 'note';
                span.textContent = match[0];
                frag.appendChild(span);
                lastIndex = match.index + match[0].length;
            }
            if (lastIndex < text.length)
                frag.appendChild(document.createTextNode(text.slice(lastIndex)));
            if (frag.childNodes.length > 1)
                node.parentNode.replaceChild(frag, node);
        } else if (
            node.nodeType === Node.ELEMENT_NODE &&
            !['SCRIPT','STYLE','CODE','PRE','SVG'].includes(node.tagName)
        ) {
            Array.from(node.childNodes).forEach(wrapNotes);
        }
    }
    document.addEventListener('DOMContentLoaded', function() {
        wrapNotes(document.body);
    });
})();

// 3. Kulcsszó-kiemelő segédfüggvény (hívd meg DOMContentLoaded után!)
function highlightTerms(root, regex, color) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode: function(n) {
            var p = n.parentNode;
            if (p.nodeName === 'SCRIPT' || p.nodeName === 'STYLE') return NodeFilter.FILTER_REJECT;
            var anc = p;
            while (anc) { if (anc.nodeName === 'H3') return NodeFilter.FILTER_REJECT; anc = anc.parentNode; }
            return NodeFilter.FILTER_ACCEPT;
        }
    }, false);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function(node) {
        regex.lastIndex = 0;
        if (!regex.test(node.nodeValue)) return;
        regex.lastIndex = 0;
        var frag = document.createDocumentFragment();
        var last = 0, m;
        while ((m = regex.exec(node.nodeValue)) !== null) {
            if (m.index > last) frag.appendChild(document.createTextNode(node.nodeValue.slice(last, m.index)));
            var sp = document.createElement('span');
            sp.style.color = color;
            sp.style.fontWeight = 'bold';
            sp.textContent = m[0];
            frag.appendChild(sp);
            last = m.index + m[0].length;
        }
        if (last < node.nodeValue.length) frag.appendChild(document.createTextNode(node.nodeValue.slice(last)));
        node.parentNode.replaceChild(frag, node);
    });
}
