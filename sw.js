importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

// Check that service workers are supported
if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
  }
workbox.precaching.precacheAndRoute([
    '/index.html',
    '/index.js',
    '/img/(?:add.svg|emoji.png|plus.png)',
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
workbox.routing.registerRoute(
    /\.(?)$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'default-cache',
    })
);
workbox.setConfig({
    debug: true
  });