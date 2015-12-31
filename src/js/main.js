var Asset = {};

// アセットの定義
Asset.assets = [
  { type: 'image', name: 'back', src: 'images/back.png'},
  { type: 'image', name: 'box', src: 'images/box.png'}
];

// 読み込んだ画像
Asset.images = {};

window.addEventListener('load', init);

var SCREEN_WIDTH = 800;
var SCREEN_HEIGHT = 600;

/**
 * 初期化
 */
function init(){
  // 初期化の処理を追加
  canvas = document.getElementById('maincanvas');
  ctx = canvas.getContext('2d');
  canvas.width = SCREEN_WIDTH;
  canvas.height = SCREEN_HEIGHT;

  // 毎フレームごとに更新
  Asset.loadAssets(function() {
    // アセットが全て読み終わったら、ゲームの更新処理を始めるようにする
    requestAnimationFrame(update);
  });
}

function update() {
  requestAnimationFrame(update);

  render();
}

function render() {
  // 全体をクリア
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 背景を表示
  ctx.drawImage(Asset.images['back'], 0, 0);

  // みかん箱を表示
  ctx.drawImage(Asset.images['box'], 0, 0);
}


// アセットの読み込み
Asset.loadAssets = function(onComplete) {
  // 読み込み処理
  var total = Asset.assets.length; // アセットの合計数
  var loadCount = 0; // 読み込み完了したアセット数

  // アセットが読み込み終わった時に呼ばれるコールバック関数
  var onLoad = function() {
    loadCount++; // 読み込み完了数を1つ足す
    if (loadCount >= total) {
      // すべてのアセットの読み込みがオワタ
      onComplete();
    }
  };

  // アセットの読み込み処理につなげる
  Asset.assets.forEach(function(asset) {
    switch (asset.type) {
      case 'image':
        Asset._loadImage(asset, onLoad);
        break;
    }
  });
};

// 画像読み込み用のメソッド (_)のプレフィックスはprivateメソッドという習慣
Asset._loadImage = function(asset, onLoad) {
  var image = new Image();
  image.src = asset.src;
  image.onload = onLoad;

  Asset.images[asset.name] = image;
};
