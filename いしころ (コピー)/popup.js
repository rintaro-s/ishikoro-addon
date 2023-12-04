document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('clickMe');
  button.addEventListener('click', function() {
    // ここにクリック時に実行したいコードを書く
    const img = document.querySelector("#img");

  // 画像要素があれば、削除する
  if (img) {
    img.parentNode.removeChild(img);
  };
    alert('Button clicked!');
  });
});

