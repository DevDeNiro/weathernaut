self.addEventListener('install', (e) => {
	console.log('test from install')
	e.waitUntil(
		caches
			.open('weathernaut')
			.then((cache) =>
				cache.addAll([
					'./index.html',
					'./vite.svg',
					'./icon.png',
					'./src/main.jsx'
					// './assets/cloudy-494ff9c3.svg',
					// './assets/index-639b1264.js',
					// './assets/index-c07e98c7.css',
					// './assets/sunny-outline-0c3050f2.svg',
					// './assets/thermometer-outline-ed37f008.svg',
					// './assets/vite-4a748afd.svg',
				])
			)
	)
})

self.addEventListener('fetch', (e) => {
	console.log(e.request.url)
	e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)))
})
