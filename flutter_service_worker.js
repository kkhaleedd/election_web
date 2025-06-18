'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "dbc446172a5103dfd411ff1d9673239d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4297080ef94889eae06ac8d31b93095a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "57066652bf5d6d88364eb51c5ff8c293",
".git/logs/refs/heads/main": "f83201a594163ace3bb193fc602a9481",
".git/logs/refs/remotes/origin/main": "467ea54b7c743d8757fd78be870b364e",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/9b462ae2c36c73696c0887f7e8e32cb69c2cad": "95e664fbbae728e320c60b272c34b8fb",
".git/objects/0c/f517ee93dca8996a8acd69fa08c6b614297479": "28ed5260c791818a773c672f69913cde",
".git/objects/10/3a308aff595a53ede85d8030f643716e56cbe6": "752b0abc8cf28cf78f53e4849eb47e82",
".git/objects/13/719c3701dfde5488a212d4b21c890c46c2ae5a": "81267bb8951f4bf8cff91c5722ca8f95",
".git/objects/18/a13a0dba3e0c4a5d63a8101f11bf840fab961b": "c2ead52e233d9909c4d1c1919cbf5435",
".git/objects/22/92ebaccb51ef41b4d9d95618107229d5232352": "21eedc2408185b915d7f0f67908fda35",
".git/objects/22/dbda206851973a696c6fd7237d829bc4cc8d9a": "181730e886406c473e40a317b6790f9f",
".git/objects/23/06e669f2d59fcce9bf34245741dcf081a5537f": "63fb04a0956ac855c8c8339626c6ccbf",
".git/objects/26/a6273ef839231725c3b1905181ab40fb466fad": "8d09d21a3941ce99bd94f0d8b73a91c7",
".git/objects/2b/9ef40880d845fe265005a3b1f76fa16606f877": "1dcf24ae9b9349b9e1383910595d6a53",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/35/68205bc2dcc08a3f8762dd83a6d6d5d4b8a8c1": "cc6fd5ea9a57f35f9915ef01d337ab7c",
".git/objects/3b/33e882f3a3221414b401c78eca14c91a3e7810": "df100d15b5a01f8b1d14ec4ec923665b",
".git/objects/3b/a19b3ce9d842780207d42710d499ef98e8ef35": "870cf4bdd90c5ed3d4f35e558306162e",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/44/0afb0a89405e1f91a7c8544b7efa211880dcfe": "05ffd75e6d2f5da18dfb3cd28fb33601",
".git/objects/44/d617924afb372bd241a99da92ed7c2c67793cd": "a44c67ac82e75bd8dff19314b2f4996c",
".git/objects/49/0dd94b218d38cc48e37f008b7a127cb9150f65": "2138c1696353fc1a990a13ca366a801a",
".git/objects/4a/7c8635d49747fd639eb05f23e102a63211b399": "d7aec012d52b9af7d5dab8514b8aeceb",
".git/objects/53/fef4b0199663a7e9f149a9eb10d46543d7a972": "2fbb1389c1b4f2f35c0ce5c2dee090a0",
".git/objects/5e/684372c86c207f132dfd722e7c19ffaa8c291d": "94c8e8773f009b7a17bda4e9786ac98e",
".git/objects/67/f07a62c9c8ba38cead8a98fad94c3d154b3717": "b41a7b090b545132e45e5ae4da0607bd",
".git/objects/6b/2e2227b95744239f63ae8877bd9a00c1cfc4cf": "e573ecfab89b3ab07a2c5f5b26fd6768",
".git/objects/6b/6a2a8cc811512187255720c9812d4e2b095e71": "68a6ce7a13792dd62ebe3a1c2fc2a6b5",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/c1e9ca7c397e09b66cc04f06ac348c26b90aec": "dbd4c860790a170ca73453ce5307c535",
".git/objects/74/d67e7dbc6b995768095df2acf7af3abcece08c": "b3e3eb3cf431265442e79caa3ba13cb2",
".git/objects/75/c042210646b32f0163b5d9f004535af3898b8e": "bb3487107d46dbaf89f63622c898033e",
".git/objects/76/9eeefb49449ae5cc814c722360bbb3099fc4f1": "0eb5e7c69984fdf9f36d7e8460b0ff7a",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7d/d33dc04c5ec37753993823d77834a5bc014e85": "52a008598587b703c435c80a00e312dc",
".git/objects/7e/aee506950651e112d037086b55dcbaf9da1876": "d643e2258bbd1b5b953573f9478a0d9d",
".git/objects/7f/be4eafe42d28ba49825d0190aca4eb993ffc65": "a5e8f24c98df65826f0b35a3512dd2a3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/9fcfb0bf5f47e1a713c902780b5e4014419072": "a21497dd01c7cf54977152a6e6d5e3f5",
".git/objects/8a/3309f448809e4b6968f72d0435f2f027c36048": "9ec092748a0620ca38de2a255e9097b8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/36a9eddd066cbde018d33b22c930fc5cba449d": "8a5bfa681718e4a0609e55bec979090b",
".git/objects/8c/8604537312686d594e4696dc9321080f6badb0": "b9008e911deef26e0fa8f8f52fd49dc7",
".git/objects/93/0720d268c2b2290024bf6c7a3003de0f030cd4": "169dfd52b07eb44a40c9ae2614ae99bb",
".git/objects/95/23029553fc30cbf08ce082b7d6aa13eb1d3970": "97029745062ca9e0786ba3a9b580c8d3",
".git/objects/95/2621fa1c01f28e18ad042e026392a5519a8688": "e3bba0a568985fa5a7865afd63d2b5e4",
".git/objects/9f/7ba6f68aac12b093c283a770d58c8a7da5261b": "6a350cac5c7f26290f97a6da8560c60c",
".git/objects/a4/00098601ad132734cba44a7e1e24dcc30e9913": "5c8a0e87e9c69b5576ce4386c3bc90c3",
".git/objects/a8/8e990c2d9d875a2ad99f1416f5c044c168039c": "da5671615256cb760e8a57fb863164a4",
".git/objects/aa/0b5cd3161317c5a401be0da55c183bde977c47": "5b0c0ab123e77a99504855f0cfe6828f",
".git/objects/ae/b321a981c611619ff354ba281923c0cb7899c1": "ba947320645a6d383cd8127c1e40e7dd",
".git/objects/af/9c31b1cf2139af25d530f3c6ac5894e727f2a8": "9e61f5c25ac2e09a0ccb979dd1f33b16",
".git/objects/b0/cea4431e998c329d2986adc039daa4d1482505": "508842db9ff3ea604ce0106f222b35c4",
".git/objects/b1/301a5699eb72811d71b9b002dce5d73125986b": "4b9c4f4df6e425a4932864bb871dc58a",
".git/objects/b2/55c66e46ac42b3d7f6f1ff6c32879c70b6a0d9": "e657159fd957fb90a596fc13e5a6d5d6",
".git/objects/b4/00fa425f7d2a27aa2b42fd5f48c2a5928870a8": "501c7829e5813520cf7dcfc879d94ba7",
".git/objects/b5/379d6e77fbfad10cad0ae3184363f6d1561036": "3080af10963ea38c151b75e2d931108c",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3827ee36dd79fa943e6e3395d299aee63bef29": "8c701a1fe091ae4e931b103f2a3b3b9a",
".git/objects/bc/6310cbe784c6c51e9c4bfc1fd9d388e2c9fa89": "485d43c7b9cd80a9210122c055067b11",
".git/objects/bc/c4d3c27588a0e1e73345f7b1ae009e1fc3e7b4": "c565b2a2c5a664803c3087b32e8943a3",
".git/objects/bd/d467fcc35859e6fd86f02a3396fb0e6bc1e2b1": "3304896a706fa152a21981c91c8c2812",
".git/objects/bf/0c4fba62ea80731c553fbdba04b843d4708797": "cdf63f78fa085092a64d8f1f0229e2ae",
".git/objects/c6/c42275ccba2d3bc5eb1c38f9ca49f8397cc5b2": "92d259cc2c503788a62198f0a57e6afb",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c8/3a0379539829db05e54d43fa99136678fa4a05": "e54551a2f55bc8d650636cedbae7198d",
".git/objects/ca/60a29503ce8bd29bc4b76bdd715199dbe2dc04": "f246838abf8254d891c69aac5d5da075",
".git/objects/cf/fb0fce672e154ba667f5060409328e294f59d1": "c1edf0fa768c67b34548d05e21502b41",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/0cae5b9ab141227b94f7c6ec07af26b07be3e5": "b1669a6f8d9b83eea7ec8135d4af4b32",
".git/objects/d5/d986b0ef2d92cb53d4094fa5ce10dac133ebcc": "e5dca71db6987ec88c0490f95df8f75d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/28cf12596c0f4933dedbfdbdaba24b4079fdf0": "804f938b7d65ecb4f80e9c6168eb7bca",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/99f8990de53d7085fb9fc704ad2b2728a7c700": "c1065f1df5759d7094e0bf053a6a9351",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/refs/heads/main": "2068b5e649186d660510412a21da8522",
".git/refs/remotes/origin/main": "2068b5e649186d660510412a21da8522",
"assets/AssetManifest.bin": "c5cdc9df2edd9c8ae433bd301b0321ee",
"assets/AssetManifest.bin.json": "be20a89d61a3f255818e63d9c727bb80",
"assets/AssetManifest.json": "ca58c98f72f28ebe16b956136d81fdc7",
"assets/assets/fonts/Cairo-Bold.ttf": "b4db1516228507b14e63c72cc1b5fbe4",
"assets/assets/fonts/MyIcons.ttf": "6c78d0fa76a0af0619393a3a78c0f448",
"assets/assets/images/elections.png": "02c6e0f553019cf0fc40cc15de35b897",
"assets/assets/images/profile.png": "b17f563afb5568957649148a813841c1",
"assets/assets/images/voting.png": "9aab224cf904ff67f9b2bb87ff6ec367",
"assets/assets/json/error.json": "96c55de1ad61a2c1ddb8db8692959cea",
"assets/assets/json/no_data.json": "db2c399ec770ea6069001915c923274f",
"assets/assets/json/no_wifi.json": "babf657fa4cdeb013eb7aaaf7f4d36a1",
"assets/assets/json/splash.json": "727becff89e015eb9c9cb8f3bcf3f3f3",
"assets/assets/translations/ar-SA.json": "5134957ad69fe136d73defb39f613a54",
"assets/assets/translations/en-US.json": "faea1fab58a470b94f13820f6560bd35",
"assets/FontManifest.json": "f1f1489aa3e2b643104ded5073ea7c0a",
"assets/fonts/MaterialIcons-Regular.otf": "46d256e2beb1e3d777d2ac167d6e2a3c",
"assets/NOTICES": "bf19e5df544e7d86e866cc4bb023a4c0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Filled.ttf": "96fc0d384dd4ffa2b4f31de1b03bc1dc",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Regular.ttf": "3fb49fcc0fd2e66ca5f04aa148dcd125",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "4579c3a2644fe20c7f8495644ad35c38",
"canvaskit/canvaskit.wasm": "cec53dd1ee2102fa245ad250f918cd98",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "d29271f8faa7fc4b0355218fb427a92a",
"canvaskit/chromium/canvaskit.wasm": "88dc0786b13b9f657a1cbfaced6cb323",
"canvaskit/skwasm.js": "37fdb662bbaa915adeee8461576d69d7",
"canvaskit/skwasm.js.symbols": "904aa9cd0e3718f06981fad267fea5ab",
"canvaskit/skwasm.wasm": "ec06ad7fa98846beff7a925010fa323e",
"canvaskit/skwasm_heavy.js": "f5c1413d222bc68856296fc97ac9fec0",
"canvaskit/skwasm_heavy.js.symbols": "10f2e2916283498fd095622d70e02304",
"canvaskit/skwasm_heavy.wasm": "d1241e4b140f4d536ccb2ede46b182f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "baab3b6ad5e74e3f0d43d96274f5fba9",
"flutter_bootstrap.js": "aeca4f50b16b17d3b4aaa1430ffee2ca",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d40df91f5d5d749b30bcfbc82d7f631a",
"/": "d40df91f5d5d749b30bcfbc82d7f631a",
"main.dart.js": "7a65fa1e8111e4c80c03911bb9358d3b",
"manifest.json": "795c0410f2c32bbcf9a6178b3ae053a1",
"run_web.bat": "201b2382f1c8e5f5db4fdb68703f31ce",
"version.json": "d60dcf54b9eaa63bfbf699c4a04ec372"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
