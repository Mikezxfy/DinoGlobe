// Offline režim: při instalaci uloží celou aplikaci, pak odpovídá z mezipaměti.
// Po každé změně souborů zvyš číslo verze, jinak telefony zůstanou u staré kopie.
const VERSION = "dinoglobus-v1";
const FILES = ["./", "index.html", "manifest.webmanifest", "lib/three.min.js", "lib/OrbitControls.js", "lib/earcut.min.js", "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-512.png", "icons/apple-touch-icon.png"];
self.addEventListener("install", e => e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting())));
self.addEventListener("activate", e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(hit => hit || fetch(e.request).then(res => {
    // písma z Google Fonts a další soubory se doplní do mezipaměti při prvním načtení
    if (res.ok || res.type === "opaque") { const copy = res.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); }
    return res;
  }).catch(() => e.request.mode === "navigate" ? caches.match("index.html") : Response.error())));
});
