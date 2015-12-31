window.onload = function() {
  alert('loaded!');
};
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
  requestAnimationFrame(update);
}

function update() {
  requestAnimationFrame(update);

  render();
}

function render() {
  // 全体をクリア
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
