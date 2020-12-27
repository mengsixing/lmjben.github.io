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
    "url": "assets/js/101.8ba139f9.js",
    "revision": "0fc9929d239f80856cd9918dcbae8912"
  },
  {
    "url": "assets/js/102.9292ccca.js",
    "revision": "2c03a54dc3ec06d3b537dc5a95c22fcb"
  },
  {
    "url": "assets/js/103.fc1f8df4.js",
    "revision": "bbdc22e5310e209efe762b9cb6556a39"
  },
  {
    "url": "assets/js/104.85eb0a91.js",
    "revision": "dabdedd82d0e277218ed688dfa4fba17"
  },
  {
    "url": "assets/js/105.ddcca173.js",
    "revision": "f200b2124cb28171c4c29092d446c9f2"
  },
  {
    "url": "assets/js/106.5d05e24e.js",
    "revision": "0249f78fb6f7001abbb1d74e13bd0f4a"
  },
  {
    "url": "assets/js/107.a71de46c.js",
    "revision": "f761dd4204fe031e1df171f79dbb453d"
  },
  {
    "url": "assets/js/108.1c1f1618.js",
    "revision": "5864d76e0c5b0763f2d0d896860dd6b8"
  },
  {
    "url": "assets/js/109.1e7bd7f3.js",
    "revision": "57bcc06d279d307f9e5de245922cd160"
  },
  {
    "url": "assets/js/11.c9f038f7.js",
    "revision": "488999ac03fc2deefedd9950a8a41721"
  },
  {
    "url": "assets/js/110.36621615.js",
    "revision": "241bbe148c5b9a78f24867dffe15b526"
  },
  {
    "url": "assets/js/111.62486bd1.js",
    "revision": "7b56286e06ae92f35deb5e3117117d26"
  },
  {
    "url": "assets/js/112.7affee06.js",
    "revision": "2455bf41749d9343a373b62345bf757f"
  },
  {
    "url": "assets/js/113.a5e9e760.js",
    "revision": "d6dbcd78843cdd0a9b548c8a209caa54"
  },
  {
    "url": "assets/js/114.0d9440b9.js",
    "revision": "4c5a7824c0cb0ebc8bf3a23b81fa822d"
  },
  {
    "url": "assets/js/115.ffb70b44.js",
    "revision": "623b7a7999e83b0ef6c954ad04a570a0"
  },
  {
    "url": "assets/js/116.4293a367.js",
    "revision": "467deb80c21aaed78b7864914851081f"
  },
  {
    "url": "assets/js/117.1e5b3a3e.js",
    "revision": "8cb2dd6236bb25619c138e64137a0673"
  },
  {
    "url": "assets/js/118.a4a3d1fe.js",
    "revision": "e89d6e4e2de10f49a21dbc1ff3797b22"
  },
  {
    "url": "assets/js/119.96564c23.js",
    "revision": "7d002be6c208f435921f5af53e3801ce"
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
    "url": "assets/js/15.0ba268c1.js",
    "revision": "a8fef190f891a0fb82f7b04fdff27a3a"
  },
  {
    "url": "assets/js/16.858e7f9a.js",
    "revision": "4ca5d6c11fd72e437d5aa36e1cc1dab4"
  },
  {
    "url": "assets/js/17.9583162a.js",
    "revision": "0c946582c0d21f802b95f20161e7cd9d"
  },
  {
    "url": "assets/js/18.e615a85b.js",
    "revision": "ad91862ecd8f8ca21b32d6e595c46839"
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
    "url": "assets/js/27.4b5827e4.js",
    "revision": "c3424913698b56e9323d8666cf5f19a3"
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
    "url": "assets/js/30.9a0d9bda.js",
    "revision": "9c0c60f58dd67eaa391cd588d67986a2"
  },
  {
    "url": "assets/js/31.2a927868.js",
    "revision": "e74d62d647c0149a09256d7b2ace25fc"
  },
  {
    "url": "assets/js/32.b4bdacc8.js",
    "revision": "a8ef5e3facbd8d01fdb594e404157bba"
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
    "url": "assets/js/38.0157c8c8.js",
    "revision": "54456fab8ef9a6a7bfd383f03304b44f"
  },
  {
    "url": "assets/js/39.bfbff644.js",
    "revision": "7ed524745576f3dd33f7e5850b803581"
  },
  {
    "url": "assets/js/4.e842843a.js",
    "revision": "e71a9ff29b2571de1371fb7575412dfb"
  },
  {
    "url": "assets/js/40.c56c2315.js",
    "revision": "df240745f4294aa5538587273633542b"
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
    "url": "assets/js/44.322048aa.js",
    "revision": "3d90c0f493d6d3d560e7488978817e34"
  },
  {
    "url": "assets/js/45.443fc365.js",
    "revision": "99f82703a9b15891af042bce76efd22d"
  },
  {
    "url": "assets/js/46.27dd470e.js",
    "revision": "bc35739f5b9118f59159c01916f551f4"
  },
  {
    "url": "assets/js/47.691954c8.js",
    "revision": "cc9d89f808d3f5726ca495036c77eb49"
  },
  {
    "url": "assets/js/48.c1e05fc6.js",
    "revision": "27a85d23c349f7a8b586e9d00199295b"
  },
  {
    "url": "assets/js/49.1811cc4d.js",
    "revision": "cb2ee49b5b51fb2b0cd4c91c3f6217c3"
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
    "url": "assets/js/53.5ce56c7d.js",
    "revision": "a51af90328837f34c7aa81027b88f25b"
  },
  {
    "url": "assets/js/54.02189949.js",
    "revision": "701d944db766ee16a4909f9c5b66c19e"
  },
  {
    "url": "assets/js/55.d1537ecf.js",
    "revision": "ec0634a6bfc0fd4d3b7d05a5b2dd69b2"
  },
  {
    "url": "assets/js/56.efc80345.js",
    "revision": "bbef322cb184a8e58844e2fab5a3360c"
  },
  {
    "url": "assets/js/57.d94c4117.js",
    "revision": "cbc7a9971297fef2b394e500d3f367cb"
  },
  {
    "url": "assets/js/58.aba3dfbd.js",
    "revision": "d7874e56ad480b4dcb14f3783c257132"
  },
  {
    "url": "assets/js/59.b47fc32d.js",
    "revision": "810e2de19872cc4c6eae51876f0833cd"
  },
  {
    "url": "assets/js/6.a78c385c.js",
    "revision": "388e566ebb2e2f657a157b6aa3a0b32c"
  },
  {
    "url": "assets/js/60.3c26b030.js",
    "revision": "1025c2d4e18771f2363a224bf75d16d0"
  },
  {
    "url": "assets/js/61.3c8027ad.js",
    "revision": "3db4ae2dd1267ab8997ef8810bce6027"
  },
  {
    "url": "assets/js/62.a9d2bdb0.js",
    "revision": "cd1ad6b25385a77fd6840d7db3c8bfd4"
  },
  {
    "url": "assets/js/63.ecf0fc7d.js",
    "revision": "37c7a89c1acb6b25e13741a507abcae2"
  },
  {
    "url": "assets/js/64.6e8daf96.js",
    "revision": "f44499effeab52c66c812b21083484f2"
  },
  {
    "url": "assets/js/65.5c27ee30.js",
    "revision": "74f41e7e8fccc47d3e0f4cc9c0e0473a"
  },
  {
    "url": "assets/js/66.bcd5f264.js",
    "revision": "d5c0d174304769a878f62181fb230e1d"
  },
  {
    "url": "assets/js/67.60b3d82d.js",
    "revision": "5914dcc348363a1ef347afda6624634e"
  },
  {
    "url": "assets/js/68.5a62d05c.js",
    "revision": "ad1823cdbe4473889689478a0c05332d"
  },
  {
    "url": "assets/js/69.13f43404.js",
    "revision": "7316c4b4229860125c975588daec7dae"
  },
  {
    "url": "assets/js/7.428acef7.js",
    "revision": "78328494d30239df460935c417fd8466"
  },
  {
    "url": "assets/js/70.421fad70.js",
    "revision": "232ba229cd18614479e4a2f63caf7639"
  },
  {
    "url": "assets/js/71.c2248dea.js",
    "revision": "7b979e54d02b26a33ed82cf51f09b38f"
  },
  {
    "url": "assets/js/72.5cb30392.js",
    "revision": "ed68b6a77f28aa3e17bc2c2b473051ef"
  },
  {
    "url": "assets/js/73.f16f7f3e.js",
    "revision": "f5bc23a7b35c331cabed94d7d0893135"
  },
  {
    "url": "assets/js/74.08eae76a.js",
    "revision": "04a499cb9545e241460ea7a3d4d7115c"
  },
  {
    "url": "assets/js/75.cd9072fb.js",
    "revision": "1771647dca8d0ff59b8d479eb0943556"
  },
  {
    "url": "assets/js/76.3c9d5077.js",
    "revision": "ee1e64c25e2c966aeb4f34358c4c0d4b"
  },
  {
    "url": "assets/js/77.d00c2074.js",
    "revision": "b283f2ec691d7147ebd1507cfcb1624c"
  },
  {
    "url": "assets/js/78.7eb42bbe.js",
    "revision": "7224b6d8bdb72d52d714ee528a6a4ca0"
  },
  {
    "url": "assets/js/79.f80c75c9.js",
    "revision": "1ba2ed7f1ff4165994a68edbf766ca85"
  },
  {
    "url": "assets/js/8.62497525.js",
    "revision": "d168318efa896b5301b81a7e89d79561"
  },
  {
    "url": "assets/js/80.7c2ea84b.js",
    "revision": "0f5fefed149ae01a4bac7a896b44ecf3"
  },
  {
    "url": "assets/js/81.43a8183d.js",
    "revision": "759ad146f00059d749356b003771591b"
  },
  {
    "url": "assets/js/82.db1058ab.js",
    "revision": "8ecf46268e965fd7865694f65a4fcbae"
  },
  {
    "url": "assets/js/83.5cec7a8b.js",
    "revision": "37a867af3d614d07b6286837ef73e57f"
  },
  {
    "url": "assets/js/84.aeac2f5f.js",
    "revision": "8f1dc31d7c7a0fbab66a9e7ad877023e"
  },
  {
    "url": "assets/js/85.7251a526.js",
    "revision": "8d5af5e57ff2083b339a31cf52879d89"
  },
  {
    "url": "assets/js/86.1345ea18.js",
    "revision": "66a3852ea5674d0b0805f76a17b22e9c"
  },
  {
    "url": "assets/js/87.895ba9ec.js",
    "revision": "1b0fb19b446d42e0ddb563765ba70a40"
  },
  {
    "url": "assets/js/88.1ac6b992.js",
    "revision": "89d6d22fb0a055d110ed69f23e033242"
  },
  {
    "url": "assets/js/89.181b73a6.js",
    "revision": "0c9dc33ef51b00270fa68a90f383b9cf"
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
    "url": "assets/js/91.e2ab3c50.js",
    "revision": "0de980b1ce453f5b326d0ee0ba620565"
  },
  {
    "url": "assets/js/92.28707b30.js",
    "revision": "eb8777d14d6bdc3cc3ec27918baa72a8"
  },
  {
    "url": "assets/js/93.10d4d970.js",
    "revision": "8eac998aeb49c0002ce20d8e46eca965"
  },
  {
    "url": "assets/js/94.93ba4984.js",
    "revision": "d1b76806d39fd5a76b765983c8c931b5"
  },
  {
    "url": "assets/js/95.a6c9c378.js",
    "revision": "ce09c833a37048ba33cdf30978414520"
  },
  {
    "url": "assets/js/96.57c516f7.js",
    "revision": "501404972bc0d584e7b47471e998c1c3"
  },
  {
    "url": "assets/js/97.3e1817d0.js",
    "revision": "03627ca8352d7d83ac5339bcdd40ca8d"
  },
  {
    "url": "assets/js/98.8c145e3f.js",
    "revision": "d8cdd9284b99d0fc3948f6e4b534b567"
  },
  {
    "url": "assets/js/99.7e7eb86c.js",
    "revision": "e7f0b7409ebe84d1cb099597f038808c"
  },
  {
    "url": "assets/js/app.d9752643.js",
    "revision": "76d6eab26a7b5ef1793fcaa6f01c681a"
  },
  {
    "url": "blog/2018.html",
    "revision": "ea05e9d4fd1342b34dce6274de9be4a7"
  },
  {
    "url": "blog/2019-12.html",
    "revision": "1cb78b0305929f154fb5d511ace6a8ad"
  },
  {
    "url": "blog/2019-6.html",
    "revision": "d9e2e2325c9bc92b00a4d974997c08f1"
  },
  {
    "url": "blog/2020-6.html",
    "revision": "3ade4a58c2348b490f202f94eaabe73d"
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
    "revision": "9cfa8f007bf0a35b7f9cfeb36f5f137e"
  },
  {
    "url": "blog/base-design-pattern.html",
    "revision": "dd65de937477e2e3142077cd626ddb57"
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
    "revision": "b4e0c0b0d1864b611405a2b39d0b1715"
  },
  {
    "url": "blog/base-function.html",
    "revision": "f52c00a99579a3985ea09a19c0fbf033"
  },
  {
    "url": "blog/base-functional.html",
    "revision": "c9cf50399c397170319323615040be34"
  },
  {
    "url": "blog/base-graphql.html",
    "revision": "44f26455892ba498e98b4ae10bace94c"
  },
  {
    "url": "blog/base-ioc.html",
    "revision": "3f7a8ed3cf94143b7d047b5524d05fbc"
  },
  {
    "url": "blog/base-ioc.jpg",
    "revision": "e71a2119796c6da6a3a4bddc364e5a5e"
  },
  {
    "url": "blog/base-structure-base-select.html",
    "revision": "61cafdffc64cc05528caf368ad8979ba"
  },
  {
    "url": "blog/base-structure-base-sort.html",
    "revision": "94c7ed18e5c3b14d798da0a490fa646e"
  },
  {
    "url": "blog/base-structure-high-algorithm.html",
    "revision": "9a45530caf581302ec6dc742056f0a6a"
  },
  {
    "url": "blog/base-structure-senior-sort.html",
    "revision": "0ea037412f815d0e81a0f3cb899bdd6d"
  },
  {
    "url": "blog/base-structure.html",
    "revision": "ba3658bfe7dcbc08f1e3e3a4ad3879cc"
  },
  {
    "url": "blog/base-technology.html",
    "revision": "50796a1aaaae9229d51c9c2a2a5b2474"
  },
  {
    "url": "blog/base-typescript.html",
    "revision": "f0dbfc831af9c2e5ad29b86e80ae5a65"
  },
  {
    "url": "blog/base-webcomponents.html",
    "revision": "54f2b3e494fe56899e53002f4242e9cd"
  },
  {
    "url": "blog/css-devicePixelRatio.html",
    "revision": "0f239f7110d45a75e7ed1c4924c1c961"
  },
  {
    "url": "blog/css-devicePixelRatio.png",
    "revision": "4d40c1ce6c79c1e3a762cf6181237cb1"
  },
  {
    "url": "blog/css-flex.html",
    "revision": "7e7ab6233186f84bf35563099fe4d940"
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
    "revision": "85a93c9805195a6865b74346a3ab93e6"
  },
  {
    "url": "blog/css-icon.html",
    "revision": "eba6665f5179d675a0a2b43f0f26582a"
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
    "revision": "62ec56a106fb3ea2fefab5507045bd11"
  },
  {
    "url": "blog/css-modules-all.png",
    "revision": "c214d7210aca56fd2034b2494389a1da"
  },
  {
    "url": "blog/css-modules.html",
    "revision": "7f12a092bf6aa26cc0a5e0afbbcab4a2"
  },
  {
    "url": "blog/css-next.html",
    "revision": "7e76ed5f8d433534b5e98ad9615f7aad"
  },
  {
    "url": "blog/css-useful.html",
    "revision": "2154d27138f3589618c07cedff406375"
  },
  {
    "url": "blog/css.html",
    "revision": "a2baa47c952a31fa05f75fe1f33a47d7"
  },
  {
    "url": "blog/devops-cdfang-spider.html",
    "revision": "05a242a0d23b3058f8adf4213eaab1cf"
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
    "revision": "78a83293f407bffc0e2336b0b6fb942f"
  },
  {
    "url": "blog/devops-commitlint.html",
    "revision": "d9f580b149080305fbdee46ab1ddeecb"
  },
  {
    "url": "blog/devops-dependencies.html",
    "revision": "61f3afd24640d9541d92544be01c4bfe"
  },
  {
    "url": "blog/devops-docker.html",
    "revision": "d23d09a5f3e1108411bca4c6aec28ef5"
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
    "revision": "49302d6de05d7847ab57ba6c7b61a91c"
  },
  {
    "url": "blog/devops-image.html",
    "revision": "1ca41164ba68ac89047451dcfdf4af35"
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
    "revision": "1644cb229d825a0fc1179230ecd12123"
  },
  {
    "url": "blog/devops-microfrontend.html",
    "revision": "626563f37491a0e90d246b917f7f7c7f"
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
    "revision": "43e76fce904683d7304cb9c21b98f9bc"
  },
  {
    "url": "blog/devops-test.html",
    "revision": "9387e9995886e4752c07f70fb2fc91bf"
  },
  {
    "url": "blog/devops-webpack-entry.html",
    "revision": "c2aad501bd5fa8495c0b91f50852b4d4"
  },
  {
    "url": "blog/devops-webpack-flow.html",
    "revision": "e4a73ceb4326873abe564f91b891fbb7"
  },
  {
    "url": "blog/devops-webpack-steps.jpg",
    "revision": "5ca3edba14315b118ddfab5c2b502e53"
  },
  {
    "url": "blog/devops-webpack.html",
    "revision": "512560cc1a0a7b44853b74fcd6e27ff9"
  },
  {
    "url": "blog/front-interview-cross-domain.png",
    "revision": "25591a8af7684ec4fb761ae90dbc326a"
  },
  {
    "url": "blog/frontend.html",
    "revision": "a4f664507c8178e391d9a2a55e6826a5"
  },
  {
    "url": "blog/index.html",
    "revision": "2f5bbbfd6181bb3cf8bcfd1099cfe759"
  },
  {
    "url": "blog/js-canvas.html",
    "revision": "7478be7c23a89d0129fab9b4bff6ee5f"
  },
  {
    "url": "blog/js-event.html",
    "revision": "bd4d4e3396141ca9d4b20011b0a1b1d9"
  },
  {
    "url": "blog/js-form.html",
    "revision": "4c722c402ecbe972f737b6adf832e62a"
  },
  {
    "url": "blog/js-html5-program.html",
    "revision": "8fae287db445edc70cc3bf73debdf0d0"
  },
  {
    "url": "blog/js-huanqi.html",
    "revision": "5c05d84fa3870c91b971a4ffa9f89a80"
  },
  {
    "url": "blog/js-inherit.html",
    "revision": "99e34b2d0cf281ebb91fce49cdb3bc55"
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
    "revision": "9198c9f8cf25143d1d789d18269a7476"
  },
  {
    "url": "blog/js-module.html",
    "revision": "ebcb6aaa3db432c5b00d4df9237078b4"
  },
  {
    "url": "blog/js-object-ergodic.html",
    "revision": "2ea228e2abc3f251926947693ab0ae35"
  },
  {
    "url": "blog/js-operator-priority.html",
    "revision": "3945bf38bc710cad32e3eb2f13b5adf2"
  },
  {
    "url": "blog/js-principle.html",
    "revision": "3716c548669e01b2f4e9ff1c1e3a0c72"
  },
  {
    "url": "blog/js-promise-test.png",
    "revision": "3591e9c41536344ee17495f96e25c52d"
  },
  {
    "url": "blog/js-promise.html",
    "revision": "ea2a0ef2fff43ebe5183177a7dcd6141"
  },
  {
    "url": "blog/js-prototype.html",
    "revision": "de3a88033761c879c755e413b954af69"
  },
  {
    "url": "blog/js-recursion.html",
    "revision": "7580c1eac8358d2ed8a0e91b6c13b1f9"
  },
  {
    "url": "blog/js-this.html",
    "revision": "7d1bfc856450ec90191f541186a0e6e4"
  },
  {
    "url": "blog/libary-react-core.html",
    "revision": "f2916270b9f5adfcd40c26c4330abfd0"
  },
  {
    "url": "blog/library-koa-diy-flow.png",
    "revision": "388d7c4fdf6d757cb13bf8bf24b9eba1"
  },
  {
    "url": "blog/library-koa-diy.html",
    "revision": "807168176e8cb84d0d147d241db481ae"
  },
  {
    "url": "blog/library-koa.html",
    "revision": "a27fadb55aa28ac83e08e2a2786478ab"
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
    "revision": "d59cd984a9a238ffe75a61c767b9bee7"
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
    "revision": "a9ae89840250b28b305ec5f51ea21113"
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
    "revision": "b828636d023bf1e6838d3e1b07f56a0e"
  },
  {
    "url": "blog/library-react-code-2.html",
    "revision": "6e2df01219994999903c91193d917a18"
  },
  {
    "url": "blog/library-react-code-3.html",
    "revision": "07ba8265d89919b8d27294b2106b24dc"
  },
  {
    "url": "blog/library-react-code-4.html",
    "revision": "5eb7b867feb395037d9b501f6d67bec0"
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
    "revision": "dbb479cd8b59e0e9d0577137e56c44c3"
  },
  {
    "url": "blog/library-react-redux-code.html",
    "revision": "bca4080c86b68c347a1079cebe320b5d"
  },
  {
    "url": "blog/library-react-router.html",
    "revision": "3b15f09bbecd6066c1008a2d298cb85b"
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
    "revision": "d0210976200eeae617d44c230fcf8ee2"
  },
  {
    "url": "blog/library-react-tree-demo-Fiber.png",
    "revision": "15c5490dad9ef96d7022ce624851fe9a"
  },
  {
    "url": "blog/library-react.html",
    "revision": "8de2ed65a2875f297d15c90e6ef36686"
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
    "revision": "1c2842947bc6b36aa9888978c2d3fd08"
  },
  {
    "url": "blog/library-rxjs.html",
    "revision": "8e7ed33c07d0cdf762e18c721a6a9d55"
  },
  {
    "url": "blog/library-vue-flow.html",
    "revision": "608e0ed449f56218e85cd2cdc5f5354b"
  },
  {
    "url": "blog/library-vue-nexttick.html",
    "revision": "8eec82577165f5100d682c492e1f7599"
  },
  {
    "url": "blog/library-vue.html",
    "revision": "5179cd4f66ddec823c87a7faa28030f5"
  },
  {
    "url": "blog/operation-docker-micro-service.html",
    "revision": "3b52cf0c22f5a660f90fd874fdb7e403"
  },
  {
    "url": "blog/operation-linux-file.html",
    "revision": "8564f7903bb90bb91880e9b5b4d2afda"
  },
  {
    "url": "blog/operation-linux-login.html",
    "revision": "943a3d17c5e957f7084ef97cd6f905d8"
  },
  {
    "url": "blog/operation-linux.html",
    "revision": "81f84a5c680443c4eec216fc05f74850"
  },
  {
    "url": "blog/operation-myserver.html",
    "revision": "7ad1884f199c99ae344bc414a4c45ca0"
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
    "revision": "12e56dd9bada39419de1bb8d6aa3eefe"
  },
  {
    "url": "blog/operation-nginx-match.html",
    "revision": "07a1c6434e319d8ebb98e95566ea2377"
  },
  {
    "url": "blog/osi-flow.html",
    "revision": "86bc6ad12c7661a6b56e45d3b6dc6f10"
  },
  {
    "url": "blog/osi-hijack-meituan.png",
    "revision": "6b2540801dd3898e44bd7c3d7fa0464d"
  },
  {
    "url": "blog/osi-hijack.html",
    "revision": "979a2720740ebea2b9d58fca8fb71867"
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
    "revision": "db638d360a7cb17402193333ce7cf00c"
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
    "revision": "d04cfdf14347a7acb18f1c180cf6ad5c"
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
    "revision": "dff93afd851590ea134ada59cdaa9f9f"
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
    "revision": "6bbcffcd326788fb659d384ea6976589"
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
    "revision": "f951d684b3ac5caa2a520572ec2fb254"
  },
  {
    "url": "blog/other-npm.html",
    "revision": "a397af4041965244e8e2a88e3929c32b"
  },
  {
    "url": "blog/other-pit.html",
    "revision": "4e3f42e6da8f9555e705a922cfe80615"
  },
  {
    "url": "blog/other-tools.html",
    "revision": "b818d05fc122fb1110f901152a2b41d5"
  },
  {
    "url": "blog/other-vscode.html",
    "revision": "cc33a99625582af20e2d328e18332419"
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
    "revision": "f5338dfdf34f688434d3bc09b1a16b84"
  },
  {
    "url": "book/book-boyilun.html",
    "revision": "4bd0a4cc379e3f4ef4cbf70afeeb0338"
  },
  {
    "url": "book/book-code.html",
    "revision": "0362c9763b63a21a9d0f6208c9a2a90f"
  },
  {
    "url": "book/book-how-network-connect.html",
    "revision": "d99f15294f983ebac284187893194874"
  },
  {
    "url": "book/book-http-graph.html",
    "revision": "8dc4fa393b7566e066311498ebbf620d"
  },
  {
    "url": "book/book-http2.html",
    "revision": "246290d6e1c57c1f539ea334ba964fad"
  },
  {
    "url": "book/book-maintainable-js.html",
    "revision": "e001a2aa6ac925802c48a06c5156354d"
  },
  {
    "url": "book/book-microfront.html",
    "revision": "58d4cb68a49d6b45a06ed44115b606c5"
  },
  {
    "url": "book/book-nodejs.html",
    "revision": "b1a298be849d309ba592bb997c1203bd"
  },
  {
    "url": "book/book-regular.html",
    "revision": "eaf5114156c71e4bbec528d5ad61dfe9"
  },
  {
    "url": "book/book-self-control.html",
    "revision": "bcbe1708034d864a668d90e8459ec93f"
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
    "revision": "b14b36c38117f8f3e6e67919217796d9"
  },
  {
    "url": "book/index.html",
    "revision": "3294fe131ea4a8b77b16855d7bc42109"
  },
  {
    "url": "index.html",
    "revision": "f153f97a131be2d5f0dc8b24aa823a70"
  },
  {
    "url": "interview/2019-9-1.html",
    "revision": "96fc43b33f441ea44f47c17592b9bdb5"
  },
  {
    "url": "interview/base.html",
    "revision": "0aeed3e7e8eecaaa8c1ffa3efe9d6954"
  },
  {
    "url": "interview/css.html",
    "revision": "754654d540a5d21aafb354070edcd7fe"
  },
  {
    "url": "interview/framework.html",
    "revision": "cb871c119a47ccb30a2dc9f2b5dbf090"
  },
  {
    "url": "interview/html.html",
    "revision": "4b24406b417ae2ab20d4bdda0cde083a"
  },
  {
    "url": "interview/index.html",
    "revision": "f497cf5ee395349fadd9db54f8744205"
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
    "revision": "968166483ebebe734da0e0addcbdfa32"
  },
  {
    "url": "interview/smallzhishi.html",
    "revision": "d652d39d815d4bca4a7ce7639433fddf"
  },
  {
    "url": "interview/structure.html",
    "revision": "0075a53b6ef32908e7dc4e982a1090cb"
  },
  {
    "url": "interview/suanfa.html",
    "revision": "5c5988c8919d39148b54265aa352ae5f"
  },
  {
    "url": "logo.png",
    "revision": "4be593b6331b4d3b4320e3d53b9fbd34"
  },
  {
    "url": "translate/index.html",
    "revision": "c4b2fe6d9600b185d59367c3f08de2df"
  },
  {
    "url": "translate/translate-browser-color.html",
    "revision": "9e386b122449390e5d305f7198dff35a"
  },
  {
    "url": "translate/translate-uuid.html",
    "revision": "29564e5f17b2aa2539bd23bd761a1bc0"
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
