self.addEventListener('install', function(event) {
console.log('Service worker installing...');
// TODO 3.4: Skip waiting
self.skipWaiting();
/*dapat dipanggil kapan saja selama eksekusi pekerja layanan, 
itu hanya akan berpengaruh jika ada pekerja layanan yang baru diinstal yang mungkin tetap dalam kondisi menunggu.*/

});
self.addEventListener('activate', function(event) {
console.log('Service worker activating...');
});

// I'm a new service worker
self.addEventListener('fetch', function(event) {
console.log('Fetching:', event.request.url);
});
//fetch berguna untuk mengambil data dari server