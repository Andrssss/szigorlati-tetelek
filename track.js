// Látogatás-naplózás: oldalmegnyitáskor egy anonim eseményt küld a Netlify function-nek.
(function () {
    var ID_KEY = 'visitor-id';
    var vid = null;
    try {
        vid = localStorage.getItem(ID_KEY);
        if (!vid) {
            vid = (window.crypto && crypto.randomUUID) ? crypto.randomUUID()
                : Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
            localStorage.setItem(ID_KEY, vid);
        }
    } catch (e) {}

    var payload = JSON.stringify({
        visitor: vid,
        page: location.pathname,
        referrer: document.referrer || '',
        screen: screen.width + 'x' + screen.height,
        lang: navigator.language || ''
    });

    try {
        fetch('/.netlify/functions/visit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: payload,
            keepalive: true
        }).catch(function () {});
    } catch (e) {}
})();
