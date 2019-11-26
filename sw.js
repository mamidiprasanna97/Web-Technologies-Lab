importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

// Check that service workers are supported

workbox.precaching.precacheAndRoute([
    '/index.html',
    '/index.js',
    '/img/add.svg',
    '/img/emoji.png',
    '/img/plus.png',
    '/css/emoji.png'
]);
workbox.routing.registerRoute(
    /\.htm(l?)$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'html-cache',
    })
);
workbox.routing.registerRoute(
    /\.js$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'javascript-cache',
    })
);
workbox.routing.registerRoute(
    /\.css$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'javascript-cache',
    })
);
workbox.routing.registerRoute(
    /img\.(?:png|jpg|jpeg|svg|gif)$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'image-cache',
    })
);
