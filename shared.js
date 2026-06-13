// ── Shared JS for szigorlati tételek oldalak ──

// Note toggle (used by pages that include a .note-toggle-btn)
function toggleNotes() {
    var hidden = document.body.classList.toggle('notes-hidden');
    var btn = document.querySelector('.note-toggle-btn');
    if (btn) btn.textContent = hidden ? 'Kommentek OFF' : 'Kommentek ON';
    localStorage.setItem('notes-hidden', hidden ? '1' : '0');
}

document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('notes-hidden') === '1') {
        document.body.classList.add('notes-hidden');
        var btn = document.querySelector('.note-toggle-btn');
        if (btn) btn.textContent = 'Kommentek OFF';
    }
});

// 1. Bold-kék szín a Tétel/Definíció/stb. labelekre (csak a prefix, kettőspontig)
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('strong').forEach(function(el) {
        var text = el.textContent;
        if (!/^(Tétel|Definíció|Kérdés|Megj)/.test(text)) return;

        var colonIdx = text.indexOf(':');
        var prefix = colonIdx >= 0 ? text.slice(0, colonIdx + 1) : text;
        var rest = text.slice(prefix.length);

        if (!rest.trim()) {
            el.style.color = '#1a6bbf';
            return;
        }

        var span = document.createElement('span');
        span.style.color = '#1a6bbf';
        span.textContent = prefix;
        el.textContent = '';
        el.appendChild(span);
        el.appendChild(document.createTextNode(rest));
    });
});

// 2. Kulcsszó-kiemelő segédfüggvény (hívd meg DOMContentLoaded után!)
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

// 3. Becsúkható h4 szekciók (alapból becsukva)
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('h4').forEach(function(h4) {
        var siblings = [];
        var next = h4.nextElementSibling;
        while (next && !['H2', 'H3', 'H4'].includes(next.tagName)) {
            siblings.push(next);
            next = next.nextElementSibling;
        }
        if (siblings.length === 0) return;

        var wrapper = document.createElement('div');
        wrapper.className = 'h4-content';
        wrapper.style.display = 'none';
        h4.parentNode.insertBefore(wrapper, siblings[0]);
        siblings.forEach(function(s) { wrapper.appendChild(s); });

        h4.classList.add('collapsible');
        h4.addEventListener('click', function() {
            var open = wrapper.style.display !== 'none';
            wrapper.style.display = open ? 'none' : '';
            h4.classList.toggle('open', !open);
        });
    });
});
