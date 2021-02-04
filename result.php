<?php
$headless = true;
if($_GET['ajax'] == '1'){
  $headless = false;
}

$src = array(
  '愛情' => './data/結果頁/結果頁 愛情.jpg',
  '友情' => './data/結果頁/結果頁 友情.jpg',
  '學業' => './data/結果頁/結果頁 學業.jpg',
  '親情' => './data/結果頁/結果頁 親情.jpg',
  '工作' => './data/結果頁/結果頁 工作.jpg',
  '生活' => './data/結果頁/結果頁 生活.jpg',
  '其他' => './data/結果頁/結果頁 其他.jpg',
);
$category = '其他'; //沒用GET取得的圖片
if($_GET['category'] != NULL){
  $category = $_GET['category'];
}

if ($headless) {
  include("./template/head.html");
}
?>

<div class="window-wrap">
  <img class="result-img" src="<?php echo $src[$category]; ?>" alt="">
  <button class="share-btn"></button>
  <button class="go-to-file-btn"></button>

  <div class="share-window">
    <div class="title-close">
      <p>分享你的案件</p>
      <a class="close"></a>
    </div>
    <div class="sites-btn">
      <a class="facebook" href="https://www.facebook.com/sharer.php?u=http://www.google.com/&quote=尬林拿" target="_blank"><img src="./data/fb.svg">Facebook</a>
      <a class="twitter"><img src="./data/twitter.svg">Twitter</a>
      <a class="Instgram"><img src="./data/ig.svg">Instgram</a>
      <a class="Line" href="https://social-plugins.line.me/lineit/share?url=http://www.google.com" target="_blank"><img src="./data/line.svg">Line</a>
      <div class="link">
        <p>https://abc.example.com</p>
        <a class="copy-link">複製！</a>
      </div>
    </div>
  </div>
  <script src="./scripts/result.js"></script>
</div>


<?php
if ($headless) {
  include("./template/tail.html");
}
