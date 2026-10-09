const V="vw-pilotpad-v1.2.0-c";
const CORE=["./","index.html","manifest.json","icon-192.png","icon-512.png","jspdf.umd.min.js"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  const r=e.request;
  if(r.method!=="GET"||/simbrief\.com/.test(r.url))return;
  const isPage=r.mode==="navigate"||/\.(html|json)$/.test(new URL(r.url).pathname)||new URL(r.url).pathname.endsWith("/");
  if(isPage){
    // pages: network first, so updates show up immediately; cache is only the offline fallback
    e.respondWith(fetch(r).then(res=>{if(res&&res.ok){const cp=res.clone();caches.open(V).then(c=>c.put(r,cp))}return res}).catch(()=>caches.match(r).then(h=>h||caches.match("index.html"))));
    return;
  }
  e.respondWith(caches.match(r).then(hit=>{
    const net=fetch(r).then(res=>{if(res&&(res.ok||res.type==="opaque")){const cp=res.clone();caches.open(V).then(c=>c.put(r,cp))}return res}).catch(()=>hit);
    return hit||net;
  }));
});
