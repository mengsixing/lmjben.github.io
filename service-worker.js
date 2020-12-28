/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/css/0.styles.7ffd56ab.css",
    "revision": "3b7635cd684830907a54b46e01314c7d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.505689c0.js",
    "revision": "0406de5426c58aee818817d255191c27"
  },
  {
    "url": "assets/js/100.f8328832.js",
    "revision": "bb0827c0013758eadd5634c965088c8a"
  },
  {
    "url": "assets/js/101.dfc5ea6f.js",
    "revision": "f15ba8d4b8aaf72ddf0fcb45d7a453a8"
  },
  {
    "url": "assets/js/102.fcbe44ae.js",
    "revision": "87abc732e72c6064d25067dd8e574ee2"
  },
  {
    "url": "assets/js/103.385df0b8.js",
    "revision": "2df86a2ae161a0307e5d18d0f13a00e9"
  },
  {
    "url": "assets/js/104.7b0a01fc.js",
    "revision": "b1b686ddd661ee32ff22db376cc0a691"
  },
  {
    "url": "assets/js/105.526a0767.js",
    "revision": "c090ba992e08f716a6e4d872a9a55ad5"
  },
  {
    "url": "assets/js/106.5d05e24e.js",
    "revision": "0249f78fb6f7001abbb1d74e13bd0f4a"
  },
  {
    "url": "assets/js/107.cb40c7fe.js",
    "revision": "7d9498653ec17be130826dd5135d7101"
  },
  {
    "url": "assets/js/108.1c1f1618.js",
    "revision": "5864d76e0c5b0763f2d0d896860dd6b8"
  },
  {
    "url": "assets/js/109.e1dc03c6.js",
    "revision": "35fa7b990f72cef040096d37a55f39c3"
  },
  {
    "url": "assets/js/11.c9f038f7.js",
    "revision": "488999ac03fc2deefedd9950a8a41721"
  },
  {
    "url": "assets/js/110.41fd1a5d.js",
    "revision": "a0f4f4d8259ad38cc58c6c7d6a8064f3"
  },
  {
    "url": "assets/js/111.3f9032f2.js",
    "revision": "2262d0aaa1d7d5764e329b9fa3f527a3"
  },
  {
    "url": "assets/js/112.7affee06.js",
    "revision": "2455bf41749d9343a373b62345bf757f"
  },
  {
    "url": "assets/js/113.11919df4.js",
    "revision": "02213d3e06b82970b5b71bb87676f804"
  },
  {
    "url": "assets/js/114.0d9440b9.js",
    "revision": "4c5a7824c0cb0ebc8bf3a23b81fa822d"
  },
  {
    "url": "assets/js/115.55dea726.js",
    "revision": "31f10fade2637da93a0d0b5cdc68082f"
  },
  {
    "url": "assets/js/116.cef2e74b.js",
    "revision": "9d29b61acbacfeb0ed59e3ab54773103"
  },
  {
    "url": "assets/js/117.13212d2c.js",
    "revision": "518f971a80adc8fc18cf64892411b5e2"
  },
  {
    "url": "assets/js/118.a4a3d1fe.js",
    "revision": "e89d6e4e2de10f49a21dbc1ff3797b22"
  },
  {
    "url": "assets/js/119.afcb2d7e.js",
    "revision": "9ff1f32cbe6121497f52b0d09a462412"
  },
  {
    "url": "assets/js/12.afb00e2e.js",
    "revision": "c169d8105858d9d1ddd16a6e43325414"
  },
  {
    "url": "assets/js/120.f6d85f77.js",
    "revision": "61d5737143437674ef819f864100fbde"
  },
  {
    "url": "assets/js/121.5dc63cd9.js",
    "revision": "99d41fdf40af20c4021f535aaf61a0a1"
  },
  {
    "url": "assets/js/122.238dea33.js",
    "revision": "975ec7479a58a34b48f3f1040ca102fc"
  },
  {
    "url": "assets/js/123.10b87347.js",
    "revision": "4d0170314cfd3381619e9c5bbf566c99"
  },
  {
    "url": "assets/js/124.d450370f.js",
    "revision": "daddae10235478bcbf12a6538b1d4cfd"
  },
  {
    "url": "assets/js/125.71fbea97.js",
    "revision": "1e05742e5d6a068387ab72255a276b2f"
  },
  {
    "url": "assets/js/126.a6962f41.js",
    "revision": "15ce845a6b848cce09810d3d6223d0f5"
  },
  {
    "url": "assets/js/127.7445f43b.js",
    "revision": "a71bbaf9f761701fd562dd78b367f947"
  },
  {
    "url": "assets/js/128.3028bc3d.js",
    "revision": "7027c53e35c78bd5f539c72fedd49943"
  },
  {
    "url": "assets/js/129.907a98fb.js",
    "revision": "3b24336311b0b29dc74d7436fd135fa8"
  },
  {
    "url": "assets/js/13.851aa3b0.js",
    "revision": "a363ea530a1958086cfd767983516d79"
  },
  {
    "url": "assets/js/130.a40aa055.js",
    "revision": "7c1d34e2ab51cb313fbf178d99512b2f"
  },
  {
    "url": "assets/js/14.1e565eeb.js",
    "revision": "ac13f5156c215fbfeabdedea075dd126"
  },
  {
    "url": "assets/js/15.c1260bd3.js",
    "revision": "d142dbecb29f367a1cb7f62573cc4169"
  },
  {
    "url": "assets/js/16.11876a87.js",
    "revision": "c8a4d4f2777c3c982678ae3940c3ea5f"
  },
  {
    "url": "assets/js/17.41388430.js",
    "revision": "1935eacb1eaf8de227069685d32370d6"
  },
  {
    "url": "assets/js/18.8f59bed3.js",
    "revision": "e4e8b09766c1de481490ef815809ee44"
  },
  {
    "url": "assets/js/19.f82fd3e7.js",
    "revision": "699051cc1e9115c577909c52b4f5cabd"
  },
  {
    "url": "assets/js/2.735dd80d.js",
    "revision": "50df686de073f853e1459466375ea4a9"
  },
  {
    "url": "assets/js/20.01bc29a5.js",
    "revision": "be41a7ac7370dcb7610b02535a2b92e1"
  },
  {
    "url": "assets/js/21.a6c9f65c.js",
    "revision": "ce3854df806720cfd56ae756598c2d96"
  },
  {
    "url": "assets/js/22.96b40d55.js",
    "revision": "79341839dc4bc5b7a51749a792622004"
  },
  {
    "url": "assets/js/23.cb5eadb2.js",
    "revision": "e2b0c0d09f459d15f1ed7a1ac5d1b34e"
  },
  {
    "url": "assets/js/24.c3da8d07.js",
    "revision": "bb37f99c8bf27db0e99cac778ddee5f8"
  },
  {
    "url": "assets/js/25.58de6fc7.js",
    "revision": "a0d74561c29ff95d24ac9a21eaa94f9c"
  },
  {
    "url": "assets/js/26.3d7b3b4c.js",
    "revision": "2a5feae638ccb2516440b865a9e6fcfe"
  },
  {
    "url": "assets/js/27.47caaeb2.js",
    "revision": "7d64a1c393f970b26692dacae395634b"
  },
  {
    "url": "assets/js/28.10cb7709.js",
    "revision": "fcfe8c25e8011893dfb29e82664966e5"
  },
  {
    "url": "assets/js/29.203f511c.js",
    "revision": "61e0666f4613a083d7ecefa26dc17028"
  },
  {
    "url": "assets/js/3.782c6b4d.js",
    "revision": "f855cbd8d0ebf93f6a477c2f3389fd8e"
  },
  {
    "url": "assets/js/30.1a107e29.js",
    "revision": "8a93758a93d3a6b74a74167e6d78862e"
  },
  {
    "url": "assets/js/31.2a927868.js",
    "revision": "e74d62d647c0149a09256d7b2ace25fc"
  },
  {
    "url": "assets/js/32.907cbc8a.js",
    "revision": "ba7f742f1ad5bbf2eadd58cc9089de9a"
  },
  {
    "url": "assets/js/33.a44dd8e8.js",
    "revision": "4a38bbcd7d3e4783b835436a82bf12e1"
  },
  {
    "url": "assets/js/34.c402c77c.js",
    "revision": "d61c631f148e15288d6bd682534fda8e"
  },
  {
    "url": "assets/js/35.843ae30a.js",
    "revision": "cf7a1b254bab6a7c4d69065c0bfb0f3b"
  },
  {
    "url": "assets/js/36.669e6098.js",
    "revision": "e2bf81c3eeefc8f25aeff58d89a3165a"
  },
  {
    "url": "assets/js/37.868a704e.js",
    "revision": "4a301d64a00e08395b205b2a3f9e0ac6"
  },
  {
    "url": "assets/js/38.2e62add7.js",
    "revision": "9e85223028efce186bd4d65b0969bc49"
  },
  {
    "url": "assets/js/39.f115c652.js",
    "revision": "99057be525e8149b9d45257ebdbf1c81"
  },
  {
    "url": "assets/js/4.e842843a.js",
    "revision": "e71a9ff29b2571de1371fb7575412dfb"
  },
  {
    "url": "assets/js/40.3e7a9001.js",
    "revision": "7c4543ad400f827e994c5b43caef3697"
  },
  {
    "url": "assets/js/41.ff80c0b6.js",
    "revision": "394dbb5d24a8762ec2227d4789c3565b"
  },
  {
    "url": "assets/js/42.571d1c78.js",
    "revision": "a23784365ff2da10d615106d9f1cd104"
  },
  {
    "url": "assets/js/43.612ac1d0.js",
    "revision": "4aa1d499d188f06385ea431b706aa26e"
  },
  {
    "url": "assets/js/44.df33b26c.js",
    "revision": "0726e92896bfaa815861c4bc8c6da82f"
  },
  {
    "url": "assets/js/45.446d1b4a.js",
    "revision": "55b1fc14e932962d8225ba2add75d308"
  },
  {
    "url": "assets/js/46.a27e67e9.js",
    "revision": "c8ef0238035acd278ccbb06c78ffb27c"
  },
  {
    "url": "assets/js/47.50ddf426.js",
    "revision": "46468b73ecba968c04b162748f0986f7"
  },
  {
    "url": "assets/js/48.c1e05fc6.js",
    "revision": "27a85d23c349f7a8b586e9d00199295b"
  },
  {
    "url": "assets/js/49.4e215a10.js",
    "revision": "37c63fb2e26c8b22c5add01a791bf5bc"
  },
  {
    "url": "assets/js/5.faf24bb6.js",
    "revision": "6fd911b0f45e648a28d35f0e5cdea6d5"
  },
  {
    "url": "assets/js/50.5750d197.js",
    "revision": "54a76607522e5ac26c497ebed18a6e5c"
  },
  {
    "url": "assets/js/51.9fd6a006.js",
    "revision": "87582c5ab286e37f8bc46d42c8ef1bb0"
  },
  {
    "url": "assets/js/52.38e7a87f.js",
    "revision": "8b29b542a0dc082b814f9cd3b5d180f9"
  },
  {
    "url": "assets/js/53.53de055a.js",
    "revision": "7b0401f800130f75342dcecbf691c434"
  },
  {
    "url": "assets/js/54.2bc1fbb8.js",
    "revision": "15b2c18a4b9948c98984549032e91e83"
  },
  {
    "url": "assets/js/55.338ff65f.js",
    "revision": "74363817a49064253fbaf21656854872"
  },
  {
    "url": "assets/js/56.e8b50575.js",
    "revision": "15f606b9d311a1d4de40be22907ac536"
  },
  {
    "url": "assets/js/57.9345fd28.js",
    "revision": "0623353f6da1206e543017aca9a81bba"
  },
  {
    "url": "assets/js/58.87070755.js",
    "revision": "1530ca7034a4bf6299a04edb0450c625"
  },
  {
    "url": "assets/js/59.ac8f294c.js",
    "revision": "3f471c3221d69b0d3215cb895f1ded74"
  },
  {
    "url": "assets/js/6.a78c385c.js",
    "revision": "388e566ebb2e2f657a157b6aa3a0b32c"
  },
  {
    "url": "assets/js/60.68018617.js",
    "revision": "06d10d7481fd666b34011704e8ecf6f1"
  },
  {
    "url": "assets/js/61.3282694f.js",
    "revision": "9ab85d1f41cafdaeb6484eff4e6745a5"
  },
  {
    "url": "assets/js/62.dafafb46.js",
    "revision": "e7f8ca236d41250a996ff2c00b1bd6af"
  },
  {
    "url": "assets/js/63.3f3b92e2.js",
    "revision": "f5c5faa57a5864fc60afa82703ecda73"
  },
  {
    "url": "assets/js/64.4b8948a8.js",
    "revision": "fc23a35c9fe4cb78d20f0476c9dc2b56"
  },
  {
    "url": "assets/js/65.5c27ee30.js",
    "revision": "74f41e7e8fccc47d3e0f4cc9c0e0473a"
  },
  {
    "url": "assets/js/66.8d9b8a0f.js",
    "revision": "774d288b5e42db88b2af21953cfc49ac"
  },
  {
    "url": "assets/js/67.909fb64c.js",
    "revision": "eeaa16eb392b879c7dff7f863a007a8c"
  },
  {
    "url": "assets/js/68.35ff6604.js",
    "revision": "988d7493c6d1fa25fac832b50321f606"
  },
  {
    "url": "assets/js/69.bcb625fc.js",
    "revision": "8a68e553a9bc83d1a6aee8ef42c02e3a"
  },
  {
    "url": "assets/js/7.428acef7.js",
    "revision": "78328494d30239df460935c417fd8466"
  },
  {
    "url": "assets/js/70.6b893791.js",
    "revision": "f2d394549e52b68cac5225de7de31a30"
  },
  {
    "url": "assets/js/71.0e10db4d.js",
    "revision": "77a7fb7d0044b5c3dcf83eaa6a840f6c"
  },
  {
    "url": "assets/js/72.66cb408a.js",
    "revision": "f71a4765b0eedd3080fc36eb2eca3556"
  },
  {
    "url": "assets/js/73.fd34099b.js",
    "revision": "3bc24ca08531430508db0747bca14759"
  },
  {
    "url": "assets/js/74.bdc550b1.js",
    "revision": "f06dc8df31f3faf14f2529da4a12cf65"
  },
  {
    "url": "assets/js/75.f6cbf5b6.js",
    "revision": "27ec579f3094bc08116aa76546dfffab"
  },
  {
    "url": "assets/js/76.22ac78a3.js",
    "revision": "6d7ea525652581cc031ba967397eecf2"
  },
  {
    "url": "assets/js/77.0522cac7.js",
    "revision": "9bffed508d7928b70cab3db793ceeb41"
  },
  {
    "url": "assets/js/78.6548bde5.js",
    "revision": "c21fb9ddee9dc2235f39c0a19cde8173"
  },
  {
    "url": "assets/js/79.282f42ff.js",
    "revision": "fe84e19e87f65f7ce73874738b93bba4"
  },
  {
    "url": "assets/js/8.62497525.js",
    "revision": "d168318efa896b5301b81a7e89d79561"
  },
  {
    "url": "assets/js/80.ee2b8cca.js",
    "revision": "6bb222162569ed4ab50fff51dd3a9d5c"
  },
  {
    "url": "assets/js/81.64230905.js",
    "revision": "5d75fa301e4b926e4e323d87254d4302"
  },
  {
    "url": "assets/js/82.97473a3c.js",
    "revision": "5a7d79b4a21b6b118f1b9960ef533352"
  },
  {
    "url": "assets/js/83.169fee1d.js",
    "revision": "1431b1d8c813d530f7113a55bd1153ec"
  },
  {
    "url": "assets/js/84.aeac2f5f.js",
    "revision": "8f1dc31d7c7a0fbab66a9e7ad877023e"
  },
  {
    "url": "assets/js/85.a3068696.js",
    "revision": "590eb9422c4690f9517a605c222ed054"
  },
  {
    "url": "assets/js/86.a5023dc3.js",
    "revision": "bcbe317c05c1601f763cdf8b5b800b48"
  },
  {
    "url": "assets/js/87.021b8746.js",
    "revision": "0392028963cfb8362ae6c40dcf9c663f"
  },
  {
    "url": "assets/js/88.1ac6b992.js",
    "revision": "89d6d22fb0a055d110ed69f23e033242"
  },
  {
    "url": "assets/js/89.7277a168.js",
    "revision": "89b054b9b8052b300a17cb450b9688c9"
  },
  {
    "url": "assets/js/9.f32f43c5.js",
    "revision": "0000eb8608a524ccafe909e93cc0fd2b"
  },
  {
    "url": "assets/js/90.c98fb86c.js",
    "revision": "fb8f284375940e9b70fcff603db76293"
  },
  {
    "url": "assets/js/91.239c4ab7.js",
    "revision": "2d43bdfb36addc44d750cbe646814c2b"
  },
  {
    "url": "assets/js/92.65987233.js",
    "revision": "f8a22bb4d7833a969b5b53dbb2c3f158"
  },
  {
    "url": "assets/js/93.8f3890ca.js",
    "revision": "0eb247122c2e2b5fd4bcfe759254e9df"
  },
  {
    "url": "assets/js/94.93ba4984.js",
    "revision": "d1b76806d39fd5a76b765983c8c931b5"
  },
  {
    "url": "assets/js/95.d7a226ac.js",
    "revision": "74307d011a9c22266477a8713414b0e4"
  },
  {
    "url": "assets/js/96.964a7c86.js",
    "revision": "e4489cfff2d362854fbc825e638f5c79"
  },
  {
    "url": "assets/js/97.6734d2f0.js",
    "revision": "95cc5c0c93a3707fc5c97c3d86069862"
  },
  {
    "url": "assets/js/98.8c145e3f.js",
    "revision": "d8cdd9284b99d0fc3948f6e4b534b567"
  },
  {
    "url": "assets/js/99.8ce966be.js",
    "revision": "3ecb81ccd837aab8d15a963b714c6c86"
  },
  {
    "url": "assets/js/app.d9edef80.js",
    "revision": "cbf2afdd09f1dadc5753914dab0a5200"
  },
  {
    "url": "blog/2018.html",
    "revision": "d07e1f96e0e735c72e7a73ff2136e266"
  },
  {
    "url": "blog/2019-12.html",
    "revision": "f0e456c946d17fa65389102282d9ed5c"
  },
  {
    "url": "blog/2019-6.html",
    "revision": "a966dc811ac7e6e2c98faff95cf7bdd5"
  },
  {
    "url": "blog/2020-6.html",
    "revision": "ec4c933e31ec551de07f852abdc9c167"
  },
  {
    "url": "blog/base-computer-flow.png",
    "revision": "e095714298dbc676ea08e45dfb83a014"
  },
  {
    "url": "blog/base-computer-line.png",
    "revision": "8446b7225d5894993a57dddd5f67bee0"
  },
  {
    "url": "blog/base-computer.html",
    "revision": "712853bdb3aeba701b09acaaeedb2b0c"
  },
  {
    "url": "blog/base-design-pattern.html",
    "revision": "600d3f11403ccdd23815e604c2160e5b"
  },
  {
    "url": "blog/base-design-pattren-mvc.png",
    "revision": "7f500560b7f5db156f54401d4d7570d3"
  },
  {
    "url": "blog/base-design-pattren-mvp.png",
    "revision": "9eb71d6abfa0291cdfc2faf2d02071a0"
  },
  {
    "url": "blog/base-design-pattren-mvvm.png",
    "revision": "279d1579b7762f89e49fe6653c6ae40a"
  },
  {
    "url": "blog/base-function-monad.html",
    "revision": "95ac55011bcac5956f37161f1280c547"
  },
  {
    "url": "blog/base-function.html",
    "revision": "c41a8151d21d4cbda482d065d7e7eb95"
  },
  {
    "url": "blog/base-functional.html",
    "revision": "40c5f7e6fd177b0db9c3c3d5af28764c"
  },
  {
    "url": "blog/base-graphql.html",
    "revision": "46e981b507b85355203f09ce7aebccc5"
  },
  {
    "url": "blog/base-ioc.html",
    "revision": "e6c31a004dc893ea0086edddceada7ab"
  },
  {
    "url": "blog/base-ioc.jpg",
    "revision": "e71a2119796c6da6a3a4bddc364e5a5e"
  },
  {
    "url": "blog/base-structure-base-select.html",
    "revision": "4bd758c7f7123fd0ae5a672737e8d69e"
  },
  {
    "url": "blog/base-structure-base-sort.html",
    "revision": "bf703ff76c0a40f501a0c2dfec905413"
  },
  {
    "url": "blog/base-structure-high-algorithm.html",
    "revision": "f0a2351075c2c134e9ced2e7c9a84e72"
  },
  {
    "url": "blog/base-structure-senior-sort.html",
    "revision": "4fb866b0ca12fb56c9583e5375e9a1a3"
  },
  {
    "url": "blog/base-structure.html",
    "revision": "6ef26e04d2b894b6118d65dc7174a64c"
  },
  {
    "url": "blog/base-technology.html",
    "revision": "b2242084b362bcb1b25afeaeba73cc10"
  },
  {
    "url": "blog/base-typescript.html",
    "revision": "c04b598e97849c366113f61be51f0504"
  },
  {
    "url": "blog/base-webcomponents.html",
    "revision": "50922800ed43ba416114fc1ed2db1189"
  },
  {
    "url": "blog/css-devicePixelRatio.html",
    "revision": "14e5ceefaf3110b3f7edc1c71f34c316"
  },
  {
    "url": "blog/css-devicePixelRatio.png",
    "revision": "4d40c1ce6c79c1e3a762cf6181237cb1"
  },
  {
    "url": "blog/css-flex.html",
    "revision": "a524beff371ca4d6fd21040f2ca0fb40"
  },
  {
    "url": "blog/css-houdini-star-fragments.png",
    "revision": "673a05390c131213c80b371259317397"
  },
  {
    "url": "blog/css-houdini-star.gif",
    "revision": "905af6ad0da0f34c544c53fcd0b266a9"
  },
  {
    "url": "blog/css-houdini-star.html",
    "revision": "4b4738fde14f771b12f921634c9f165c"
  },
  {
    "url": "blog/css-icon.html",
    "revision": "c4eff8f263f76a1a15d1bedd1e82364e"
  },
  {
    "url": "blog/css-ifc-baseline.jpg",
    "revision": "3257df202141626bcd373c1168be21c5"
  },
  {
    "url": "blog/css-ifc-box.jpg",
    "revision": "4b9457e2e5d4992ac6522214fbf6bf8c"
  },
  {
    "url": "blog/css-ifc-img1.png",
    "revision": "43a67d486c1c28da49fe638045236ee4"
  },
  {
    "url": "blog/css-ifc-img2.png",
    "revision": "f95164b2ce631ae62b98c1ce2bf2079e"
  },
  {
    "url": "blog/css-ifc-img3.png",
    "revision": "7e1e10bdb9e9a606b49a5d961e1b9170"
  },
  {
    "url": "blog/css-ifc-img4.png",
    "revision": "49646a1fa11442858640be387dfda6fd"
  },
  {
    "url": "blog/css-ifc.html",
    "revision": "325ba3b5153790c3077d47d4657d2a0d"
  },
  {
    "url": "blog/css-modules-all.png",
    "revision": "c214d7210aca56fd2034b2494389a1da"
  },
  {
    "url": "blog/css-modules.html",
    "revision": "8f5f86a50e44d204ba89235fdf69dc08"
  },
  {
    "url": "blog/css-next.html",
    "revision": "66dd882e56bff333af7c1a97e63a4c79"
  },
  {
    "url": "blog/css-useful.html",
    "revision": "7db1120766723b1a93103206b5b78cc9"
  },
  {
    "url": "blog/css.html",
    "revision": "6a5a51a943ffb12e5f8ef00f2229f005"
  },
  {
    "url": "blog/devops-cdfang-spider.html",
    "revision": "3ee5f4d489883e9df58c568ecc664e50"
  },
  {
    "url": "blog/devops-cli-diy-demo.png",
    "revision": "fb68b8b2efe526f029212ef6e54070b6"
  },
  {
    "url": "blog/devops-cli-diy-inquirer.gif",
    "revision": "e8c2aee89570fc8916099e34576ca232"
  },
  {
    "url": "blog/devops-cli-diy.html",
    "revision": "918fe634e9d226327d0df5f0d042c07b"
  },
  {
    "url": "blog/devops-commitlint.html",
    "revision": "cc3379335a4784dae4d16ef78e9f33c8"
  },
  {
    "url": "blog/devops-dependencies.html",
    "revision": "be011fd91672eeb2af69b03387f91a20"
  },
  {
    "url": "blog/devops-docker.html",
    "revision": "0d9a7830f9709baac380f346cb75fbc0"
  },
  {
    "url": "blog/devops-docker.png",
    "revision": "68303391c402338e2841fba331dee61a"
  },
  {
    "url": "blog/devops-git-rebase.jpg",
    "revision": "abb1767186fb9fa30f5b0e5b6386d496"
  },
  {
    "url": "blog/devops-git.html",
    "revision": "05d458c44b1440590753515e0ab6d308"
  },
  {
    "url": "blog/devops-image.html",
    "revision": "ec11aa6b1be27648ebd1fec7cd753fa5"
  },
  {
    "url": "blog/devops-image.png",
    "revision": "e02bfa355435c1f45d2306cc347fe654"
  },
  {
    "url": "blog/devops-kubernetes-step1.png",
    "revision": "a383ca6b10cf54cdf08b09e93daf374f"
  },
  {
    "url": "blog/devops-kubernetes-step2.png",
    "revision": "3ab73fdd30236034fce0b2630b286349"
  },
  {
    "url": "blog/devops-kubernetes-step3.png",
    "revision": "9a58967ee520665e3076e17966144739"
  },
  {
    "url": "blog/devops-kubernetes-step4.1.png",
    "revision": "e60ee965ffe978807b7dc94967bf62e6"
  },
  {
    "url": "blog/devops-kubernetes-step4.png",
    "revision": "1e7556d81ee883f8ae88aca2bf8b61e3"
  },
  {
    "url": "blog/devops-kubernetes-step5.png",
    "revision": "2ca05d57a0d8ffe340630b10e04da300"
  },
  {
    "url": "blog/devops-kubernetes-step6.png",
    "revision": "6d670ecf5bc26f818e15a35346fbe1d6"
  },
  {
    "url": "blog/devops-kubernetes-step7.png",
    "revision": "33381fdc74674697be73e50569e647d3"
  },
  {
    "url": "blog/devops-kubernetes-step8.png",
    "revision": "00bd1e65a6f816f81efc2318dae948f3"
  },
  {
    "url": "blog/devops-kubernetes.html",
    "revision": "2f43890f0ca8cda92c3012305c6be18d"
  },
  {
    "url": "blog/devops-microfrontend.html",
    "revision": "0ce680f6163b3a1a75d6e5b9eb0f6cd8"
  },
  {
    "url": "blog/devops-performance-cache.png",
    "revision": "8f33689a73abfb2f216bb69095aab475"
  },
  {
    "url": "blog/devops-performance-page_render.png",
    "revision": "f0817ffb80d8ce5be57a86304b522efd"
  },
  {
    "url": "blog/devops-performance-render.png",
    "revision": "6ced6b1be85cd8ce2e1ece5aaec65fef"
  },
  {
    "url": "blog/devops-performance.html",
    "revision": "8f2bbd0810558eda423fd5c68e42fb3c"
  },
  {
    "url": "blog/devops-test.html",
    "revision": "b3402751036fe7a91dae99fbd392e1a7"
  },
  {
    "url": "blog/devops-webpack-entry.html",
    "revision": "23c20e3f80fad35cde9a5f3af9ab4003"
  },
  {
    "url": "blog/devops-webpack-flow.html",
    "revision": "b5379b446dbb8c41c995e812a96d0dc0"
  },
  {
    "url": "blog/devops-webpack-steps.jpg",
    "revision": "5ca3edba14315b118ddfab5c2b502e53"
  },
  {
    "url": "blog/devops-webpack.html",
    "revision": "24e536e681c1563d126aedd55a5e5c12"
  },
  {
    "url": "blog/front-interview-cross-domain.png",
    "revision": "25591a8af7684ec4fb761ae90dbc326a"
  },
  {
    "url": "blog/frontend.html",
    "revision": "cfa153b66c2981a0a194761675d9ec37"
  },
  {
    "url": "blog/index.html",
    "revision": "c2306aab9c3fcf36a9f56b8f76317bb9"
  },
  {
    "url": "blog/js-canvas.html",
    "revision": "fff331262ee30b827c5df63dbe77e941"
  },
  {
    "url": "blog/js-event.html",
    "revision": "a4984c8392070bfc30c693ad89d5308c"
  },
  {
    "url": "blog/js-form.html",
    "revision": "bd8c7b0f7b0c4e1afd6918f9ebf73ec6"
  },
  {
    "url": "blog/js-html5-program.html",
    "revision": "d8025bb059eb93ceb204c30b4fdcb132"
  },
  {
    "url": "blog/js-huanqi.html",
    "revision": "1a7f961b4af2549b4d22ca6907a149fc"
  },
  {
    "url": "blog/js-inherit.html",
    "revision": "432c9cf8a5b4eb76fdc46e592d411281"
  },
  {
    "url": "blog/js-jsBridge-core.png",
    "revision": "aa05dbcd700744448fa64ee9e81b8e75"
  },
  {
    "url": "blog/js-jsBridge-detail.png",
    "revision": "a0801c4e787701b363e1ca6fc0d50832"
  },
  {
    "url": "blog/js-jsBridge.html",
    "revision": "059e23bc1a0f5796326112a5bfca1076"
  },
  {
    "url": "blog/js-module.html",
    "revision": "2e0251dc160f539d50a77a5f5db73902"
  },
  {
    "url": "blog/js-object-ergodic.html",
    "revision": "9aae0d019fc90a738d993cfde54d8ede"
  },
  {
    "url": "blog/js-operator-priority.html",
    "revision": "44df84eab9faee88d084b01590c4b54a"
  },
  {
    "url": "blog/js-principle.html",
    "revision": "475a18dda1e3020796908287460ef9f2"
  },
  {
    "url": "blog/js-promise-test.png",
    "revision": "3591e9c41536344ee17495f96e25c52d"
  },
  {
    "url": "blog/js-promise.html",
    "revision": "dea006cce766643b4c6c3f6960bcd95a"
  },
  {
    "url": "blog/js-prototype.html",
    "revision": "4d54dae2f03c64a879a6299d18b044b2"
  },
  {
    "url": "blog/js-recursion.html",
    "revision": "0a0b4cbca85137bbe2df542698a6d590"
  },
  {
    "url": "blog/js-this.html",
    "revision": "6737c945967656b5da285bdcbe6de1ba"
  },
  {
    "url": "blog/libary-react-core.html",
    "revision": "d70ccaed24a6530a46575e647ca0d4c4"
  },
  {
    "url": "blog/library-koa-diy-flow.png",
    "revision": "388d7c4fdf6d757cb13bf8bf24b9eba1"
  },
  {
    "url": "blog/library-koa-diy.html",
    "revision": "2fa661a11801d9c3abb048f0e359261b"
  },
  {
    "url": "blog/library-koa.html",
    "revision": "4b2e35e3bb01eb9d2e682b151b2a289d"
  },
  {
    "url": "blog/library-miniProgram-appService.png",
    "revision": "a9d1133bb0109828ef08495fdc020d96"
  },
  {
    "url": "blog/library-miniProgram-component.jpeg",
    "revision": "711a1e88bba7265c4a2de4666a04b7ac"
  },
  {
    "url": "blog/library-miniProgram-jiagou.png",
    "revision": "39a3f88f3d9482b722c058db8b6a3a9f"
  },
  {
    "url": "blog/library-miniProgram-jiagou2.png",
    "revision": "ea953d686390837662ebde6f3a1fbbf4"
  },
  {
    "url": "blog/library-miniProgram-wxml.png",
    "revision": "f80cb9e26caa6f28355fc712f42ddb9c"
  },
  {
    "url": "blog/library-miniProgram-wxss.png",
    "revision": "dce54cb46a769cd5f0d494d6c0a727e2"
  },
  {
    "url": "blog/library-miniProgram.html",
    "revision": "7b042b69dd5c78ec54eafff316b48ea3"
  },
  {
    "url": "blog/library-node-async.png",
    "revision": "4194c06b592b3c0dc430fabb70927ca6"
  },
  {
    "url": "blog/library-node-backend.png",
    "revision": "3e4e3bf6802d9a3d4782c7ed74c3837a"
  },
  {
    "url": "blog/library-node.html",
    "revision": "618e4337e857738445e0f5dbff03a845"
  },
  {
    "url": "blog/library-react-batchedUpdates.png",
    "revision": "3fd9fa9462ff121c2242e18db6219faf"
  },
  {
    "url": "blog/library-react-children-map.png",
    "revision": "16443a082ef65bdb180c76d1a942a9ba"
  },
  {
    "url": "blog/library-react-code-1.html",
    "revision": "7d08b1a04787bbfd43831d4ee39fb188"
  },
  {
    "url": "blog/library-react-code-2.html",
    "revision": "d3981fd9cffb567b01fed9a055e4caf2"
  },
  {
    "url": "blog/library-react-code-3.html",
    "revision": "053c2e0a3a517a7dc42eadc96f9a7f20"
  },
  {
    "url": "blog/library-react-code-4.html",
    "revision": "373791aa5e7997fd9bc03c3f0a2bb2e1"
  },
  {
    "url": "blog/library-react-code3-fiber-detail.png",
    "revision": "d3f432d807596a32698dee5b44fd0bb6"
  },
  {
    "url": "blog/library-react-code3-fiber.png",
    "revision": "6768aba4e04b67193a700c283661148b"
  },
  {
    "url": "blog/library-react-code4-effectlist.png",
    "revision": "18d7e632db3244d234cb1e7f497c9637"
  },
  {
    "url": "blog/library-react-code4-render-phase.png",
    "revision": "287b0a3564174ba2cd2cb7d837f4cdfc"
  },
  {
    "url": "blog/library-react-code4-updatequeue.png",
    "revision": "560191954e084b0cf18336c920d2b9fb"
  },
  {
    "url": "blog/library-react-code4-workinprocess.png",
    "revision": "38d278ac5274ff8fcfdaec47bfaca278"
  },
  {
    "url": "blog/library-react-effect-2.png",
    "revision": "52214aec0f93351b042032a1f6962e54"
  },
  {
    "url": "blog/library-react-effect.png",
    "revision": "c5d667a728acff34d14b041891dd2d73"
  },
  {
    "url": "blog/library-react-hooks.html",
    "revision": "de376f7fbd6bc08a51915ad09e6573e6"
  },
  {
    "url": "blog/library-react-redux-code.html",
    "revision": "63508fc904f2bca42d3d0d86abab177d"
  },
  {
    "url": "blog/library-react-router.html",
    "revision": "02fbb81b20f95ed9e49ca1247d3d8651"
  },
  {
    "url": "blog/library-react-scheduler-fiber-scheduler.png",
    "revision": "5614e29c9aecf8cea3589cc1aeeaea8b"
  },
  {
    "url": "blog/library-react-scheduler-render-root.png",
    "revision": "6f8ace8bff5693dd642d9d83eeeb2c41"
  },
  {
    "url": "blog/library-react-ssr.html",
    "revision": "9a815f68f635c815fa2f0d367beeef42"
  },
  {
    "url": "blog/library-react-tree-demo-Fiber.png",
    "revision": "15c5490dad9ef96d7022ce624851fe9a"
  },
  {
    "url": "blog/library-react.html",
    "revision": "59facb91ca0d14922785851c5e0f3fe2"
  },
  {
    "url": "blog/library-redux-code-flow.png",
    "revision": "92a506e8ddb170e872237052c604c574"
  },
  {
    "url": "blog/library-redux-flux.png",
    "revision": "f719fccae7b22258f97c2c3f9490f3f2"
  },
  {
    "url": "blog/library-redux-mvc.png",
    "revision": "7b8ac74d335701de13b99290ab65240a"
  },
  {
    "url": "blog/library-redux.html",
    "revision": "e720c5feacc90c1abd34c2fdfd2db907"
  },
  {
    "url": "blog/library-rxjs.html",
    "revision": "ad7d1bd39da7c714fd5c23d5de7da7ff"
  },
  {
    "url": "blog/library-vue-flow.html",
    "revision": "be43bab26da4fac400609aadab37b264"
  },
  {
    "url": "blog/library-vue-nexttick.html",
    "revision": "a0da19928c797a863a29c4cc3b82b88a"
  },
  {
    "url": "blog/library-vue.html",
    "revision": "e15bb7c2b7ad385957a78387b03cc582"
  },
  {
    "url": "blog/operation-docker-micro-service.html",
    "revision": "1505822c016a95b3413222c6dcd20048"
  },
  {
    "url": "blog/operation-linux-file.html",
    "revision": "f1b97e776ad33fc069cc9d0dad3c4a82"
  },
  {
    "url": "blog/operation-linux-login.html",
    "revision": "4a7debc4c740807c66ebaa1e941dfd04"
  },
  {
    "url": "blog/operation-linux.html",
    "revision": "398d979bb8ba9a80afc92923d22b8cf6"
  },
  {
    "url": "blog/operation-myserver.html",
    "revision": "5ebad9c2f48a83feb428fb4d28c5086c"
  },
  {
    "url": "blog/operation-nginx-load-balancing-loadBalancing.png",
    "revision": "7a6ec47ab1d5d6a9a0668ea67c0dcd68"
  },
  {
    "url": "blog/operation-nginx-load-balancing-reverseProxy.png",
    "revision": "5e9558d00008ece24f3f3b50918c76a6"
  },
  {
    "url": "blog/operation-nginx-load-balancing.html",
    "revision": "9bfd627afabd08ab7fa9b3d9d7c03088"
  },
  {
    "url": "blog/operation-nginx-match.html",
    "revision": "4d9f513df93a5bd230449cf214913b1e"
  },
  {
    "url": "blog/osi-flow.html",
    "revision": "39cd38e4fe5e3a9c57eea3274b58693c"
  },
  {
    "url": "blog/osi-hijack-meituan.png",
    "revision": "6b2540801dd3898e44bd7c3d7fa0464d"
  },
  {
    "url": "blog/osi-hijack.html",
    "revision": "b86e7acc72f2e4461a47bacf2af8062e"
  },
  {
    "url": "blog/osi-http-0rtt.png",
    "revision": "a81b6efb8af80fb839b1181b210f4a21"
  },
  {
    "url": "blog/osi-http-binary_framing_layer.svg",
    "revision": "ae09920e853bee0b21be83f8e770ba01"
  },
  {
    "url": "blog/osi-http-duolufuyong-1.png",
    "revision": "29bab6ea23377b0d2fe85a97680600e8"
  },
  {
    "url": "blog/osi-http-duolufuyong.png",
    "revision": "8e01bb02ebacabc03da3e79dab7ee8d9"
  },
  {
    "url": "blog/osi-http-header_compression.svg",
    "revision": "feb142f82737d148ed5bcefd91915276"
  },
  {
    "url": "blog/osi-http-jiami.png",
    "revision": "71b35bce707111d2f81dd87e2024f8bb"
  },
  {
    "url": "blog/osi-http-push.svg",
    "revision": "d759887277b266a42c526643285dd244"
  },
  {
    "url": "blog/osi-http-streams_messages_frames.svg",
    "revision": "8e6931bb40fc26c511ad15645e7b6113"
  },
  {
    "url": "blog/osi-http.html",
    "revision": "a23e5091715d1ac1841f7b2a92b5b7b2"
  },
  {
    "url": "blog/osi-https-hash1.png",
    "revision": "87c69f423d32966c5e0890e0ae0ed637"
  },
  {
    "url": "blog/osi-https-hash2.png",
    "revision": "91d4b06df8230a597c054f83dabf5a9b"
  },
  {
    "url": "blog/osi-https-tsl.png",
    "revision": "3cbf6a508ade1eb3c3e7e819a48c5c7e"
  },
  {
    "url": "blog/osi-https.html",
    "revision": "082ce38910f442349cabb1f9f672f4c7"
  },
  {
    "url": "blog/osi-https.png",
    "revision": "99291362aca06ef1c282cf0561fd37d4"
  },
  {
    "url": "blog/osi-tcp-arq.png",
    "revision": "a56f5dd37438dbcc059b1b11b3a6ac6c"
  },
  {
    "url": "blog/osi-tcp-cancel.png",
    "revision": "9bb6008d0e5d389285bdd5a7f1c914b7"
  },
  {
    "url": "blog/osi-tcp-connect.png",
    "revision": "27055efa76010e511c26f44c403116fe"
  },
  {
    "url": "blog/osi-tcp-header.png",
    "revision": "77d18b4b741565596e54b545dca60ebe"
  },
  {
    "url": "blog/osi-tcp-resend-congestion-avoidance.png",
    "revision": "ca1f34dc9951e3dd44770620fd900c05"
  },
  {
    "url": "blog/osi-tcp-resend.png",
    "revision": "494d24b3f888b61dd1f0e43318698272"
  },
  {
    "url": "blog/osi-tcp.html",
    "revision": "6ab5210ebe45ef7cb5141c2dee9a4bd7"
  },
  {
    "url": "blog/osi-web-login-oauth.jpg",
    "revision": "2dae82002027e00a585f7b6b673b397e"
  },
  {
    "url": "blog/osi-web-login-sso1.jpeg",
    "revision": "ec1c5788d8b1d7140ddd6e6a2878c3ea"
  },
  {
    "url": "blog/osi-web-login-sso2.jpeg",
    "revision": "8d17a3f406ccd2f845cbcd40a9ee531a"
  },
  {
    "url": "blog/osi-web-login-sso3.jpeg",
    "revision": "94ce0cdc0d6db01494df7ce516a6b575"
  },
  {
    "url": "blog/osi-web-login.html",
    "revision": "d11cad8a35ee9ce6d7b24906640f552d"
  },
  {
    "url": "blog/osi-web-security-1.png",
    "revision": "ca28968daa49b9787e11039c2c3a9d27"
  },
  {
    "url": "blog/osi-web-security-2.png",
    "revision": "cec7aaca64d04a1a0545db9bae985ee1"
  },
  {
    "url": "blog/osi-web-security-csrf.jpg",
    "revision": "0c8a1016b3659bf99bbf1db4759b1e1b"
  },
  {
    "url": "blog/osi-web-security.html",
    "revision": "8a550c0514efec5d41dde7c0305825f3"
  },
  {
    "url": "blog/other-npm.html",
    "revision": "cd4eeed1f045ddc84a52e50bd416201d"
  },
  {
    "url": "blog/other-pit.html",
    "revision": "22a3b8ec406489bea3e3b36759e574f4"
  },
  {
    "url": "blog/other-tools.html",
    "revision": "8353471befea433209a7cf57a0d2cdd8"
  },
  {
    "url": "blog/other-vscode.html",
    "revision": "2eb365ba088d22ce6b5708da52fd6847"
  },
  {
    "url": "blog/vue-dir.png",
    "revision": "5c582c957a5cff9cf58ab13b73b411de"
  },
  {
    "url": "blog/vue-flow.png",
    "revision": "cd92342a375f5a699de658e857cc4937"
  },
  {
    "url": "blog/vue-mvvm.png",
    "revision": "a2c5e4e7a6be3029a5fd6818cc89cb0e"
  },
  {
    "url": "blog/vue-platforms.png",
    "revision": "89b10f58b5d84dc85e84a819350ce965"
  },
  {
    "url": "blog/冒泡排序.gif",
    "revision": "e1a5e701ab13aa61112dcf0d7732e929"
  },
  {
    "url": "blog/希尔排序.gif",
    "revision": "26d982ad88862f930b1b7e67ad87b37f"
  },
  {
    "url": "blog/归并排序.gif",
    "revision": "b99460f4173a23f9ed1be77f2f9fd224"
  },
  {
    "url": "blog/快速排序.gif",
    "revision": "90fb5f9dd147f5acbb04419c8c8b4ac0"
  },
  {
    "url": "blog/插入排序.gif",
    "revision": "ffda0249330d775e6fd3488f198c5c43"
  },
  {
    "url": "blog/选择排序.gif",
    "revision": "f37e5468225dff6e2edd0d9bec3778a2"
  },
  {
    "url": "book/book-act-like-a-leader.html",
    "revision": "1536df3219a3388b50395b3f10c2ec83"
  },
  {
    "url": "book/book-boyilun.html",
    "revision": "80cd6db8960421e8122179b1ddcd367c"
  },
  {
    "url": "book/book-code.html",
    "revision": "f8061c80150a33e04db6e149444eb86a"
  },
  {
    "url": "book/book-how-network-connect.html",
    "revision": "37b92964420cc793fdd14514b5a31e6a"
  },
  {
    "url": "book/book-http-graph.html",
    "revision": "aec1e49528e04c1cdeb3abce5d5b0030"
  },
  {
    "url": "book/book-http2.html",
    "revision": "3dca760e68abc910d87ac8efde46a644"
  },
  {
    "url": "book/book-maintainable-js.html",
    "revision": "2f3bee016751f6c48e4a4b21a1b433b2"
  },
  {
    "url": "book/book-microfront.html",
    "revision": "049f105588d03e7acf8737ce02e54a0f"
  },
  {
    "url": "book/book-nodejs.html",
    "revision": "8a256f1018eda1cdc637b3e9d40372c2"
  },
  {
    "url": "book/book-regular.html",
    "revision": "e008f27e48b238961c46ec0d8fc71eab"
  },
  {
    "url": "book/book-self-control.html",
    "revision": "2c649ea4a5c5d4bc538947d621faee61"
  },
  {
    "url": "book/book-webgl-flow.jpeg",
    "revision": "4e3f5cc4ea17e4f086d6d0b1f725793f"
  },
  {
    "url": "book/book-webgl-structure.png",
    "revision": "78903b0d4e9a363e41966d81ae5c464e"
  },
  {
    "url": "book/book-webgl.html",
    "revision": "4974a1fc0cc6e516fab3042996c29fd4"
  },
  {
    "url": "book/index.html",
    "revision": "1bc90a56f72079468b1a49db73b07f95"
  },
  {
    "url": "index.html",
    "revision": "287cbc2a68302e3a337843c71b6f33d5"
  },
  {
    "url": "interview/2019-9-1.html",
    "revision": "718cfd0e86987d1335016dc42123c2d8"
  },
  {
    "url": "interview/base.html",
    "revision": "16e5ec375b4c8f0c65fcd59c1a5e9175"
  },
  {
    "url": "interview/css.html",
    "revision": "5d269d93d82025154710102446154823"
  },
  {
    "url": "interview/framework.html",
    "revision": "e061187bc530c7232edbd241f0f4cfdd"
  },
  {
    "url": "interview/html.html",
    "revision": "75cd7d01ec02846384a0f9ff30257696"
  },
  {
    "url": "interview/index.html",
    "revision": "6b6b9a88eeaa3db5ba5f47ddb137aba6"
  },
  {
    "url": "interview/interview-abstractCompare.png",
    "revision": "683b800b15d495bfd2e2ade99b6eba74"
  },
  {
    "url": "interview/interview-bom.jpg",
    "revision": "637f20e7efb9d9f0af995dd5b97529b4"
  },
  {
    "url": "interview/interview-css.png",
    "revision": "e2ef1b6cbdb573ccb36a31952542907b"
  },
  {
    "url": "interview/interview-jsbridge.png",
    "revision": "e1f58f641b1961a977f56cc0244117e9"
  },
  {
    "url": "interview/js.html",
    "revision": "7e3037628ba39616f557899b9cc79ab1"
  },
  {
    "url": "interview/smallzhishi.html",
    "revision": "444221bfe3eb1809f9f19153c1c098c8"
  },
  {
    "url": "interview/structure.html",
    "revision": "c547d094f413a35f9980470977c5aa05"
  },
  {
    "url": "interview/suanfa.html",
    "revision": "37bda67e974b8b795d87b3f976eef780"
  },
  {
    "url": "logo.png",
    "revision": "4be593b6331b4d3b4320e3d53b9fbd34"
  },
  {
    "url": "translate/index.html",
    "revision": "7bb4f37b98d463aaf99d598f5feb628c"
  },
  {
    "url": "translate/translate-browser-color.html",
    "revision": "0e4fbc46ce60374f821e8b2b64a7cac2"
  },
  {
    "url": "translate/translate-uuid.html",
    "revision": "96929cad526536a5ccdc7c6e4f3e6236"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
