'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "59823a2e7da0dfbb7b9b3d1426a285e4",
"assets/assets/images/banner.jpg": "9de4b1c86bbf66c3421792d5b6fb0a75",
"assets/assets/images/projects/1.png": "2d42ab33f22a82e4f4eb25bbcabbd473",
"assets/assets/images/projects/2.png": "3d03d997695caa086534d03036ed704a",
"assets/assets/images/projects/3.png": "b97b51c306ab538a09790caf9fa59b08",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "b22e89510d6afd4e8dc00aadd7d201ea",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"index.html": "570ebc2c558a7673b111897f5e4a5ddc",
"/": "570ebc2c558a7673b111897f5e4a5ddc",
"main.dart.js": "edc09741bfe1575be7716ea4b052f073"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
