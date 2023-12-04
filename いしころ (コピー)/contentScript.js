const logo = document.createElement("h2");
logo.innerHTML = '<a href="https://youtube.com"><img src="https://cdn.discordapp.com/attachments/1099335406790639766/1174249015609659442/I.png?ex=6566e79d&is=6554729d&hm=3708d6c20fedf3f384c3e5c8f2948178924e736f3053ea937b4b7165be10599a&" alt="画像の説明" width="100" height="70"></a>';
document.querySelector(".ytd-logo").appendChild(logo);


  // 画像要素を検索する
  const img = document.querySelector("#img");

  // 画像要素があれば、削除する
  if (img) {
    img.parentNode.removeChild(img);
  };
/*
  setInterval(function() {
    // ここに5秒ごとに実行したいコードを書く
    const img = document.querySelector("#img");

    // 画像要素があれば、削除する
    if (img) {
      img.parentNode.removeChild(img);
    };
  
    console.log('This is executed every 5 seconds.');
  }, 5000);
*/
  setTimeout(function() {
    console.log('This is executed after 5 seconds.');
    // ここに5秒待ってから実行したいコードを書く
    const img = document.querySelector("#img");

    // 画像要素があれば、削除する
    if (img) {
      img.parentNode.removeChild(img);
    };
  }, 5000);
  setTimeout(function() {
    console.log('This is executed after 5 seconds.');
    // ここに5秒待ってから実行したいコードを書く
    const img = document.querySelector("#img");

    // 画像要素があれば、削除する
    if (img) {
      img.parentNode.removeChild(img);
    };
  }, 5000);
  setTimeout(function() {
    console.log('This is executed after 5 seconds.');
    // ここに5秒待ってから実行したいコードを書く
    const img = document.querySelector("#img");

    // 画像要素があれば、削除する
    if (img) {
      img.parentNode.removeChild(img);
    };
  }, 5000);
  setTimeout(function() {
    console.log('This is executed after 5 seconds.');
    // ここに5秒待ってから実行したいコードを書く
    const img = document.querySelector("#img");

    // 画像要素があれば、削除する
    if (img) {
      img.parentNode.removeChild(img);
    };
  }, 5000);
 
 