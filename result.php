<?php
$headless = true;
if($_GET['ajax'] == '1'){
  $headless = false;
}

$src = array(
  '愛情' => './data/結果頁/結果頁 愛情_s.jpg',
  '友情' => './data/結果頁/結果頁 友情_s.jpg',
  '學業' => './data/結果頁/結果頁 學業_s.jpg',
  '親情' => './data/結果頁/結果頁 親情_s.jpg',
  '工作' => './data/結果頁/結果頁 工作_s.jpg',
  '生活' => './data/結果頁/結果頁 生活_s.jpg',
  '其他' => './data/結果頁/結果頁 其他_s.jpg',
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
      <p class="font-song">分享你的案件</p>
      <a class="close"></a>
    </div>
    <div class="sites-btn">
      <a class="facebook font-optima" href="https://www.facebook.com/sharer.php?u=https://fju.syeeo.com/" target="_blank"><img src="./data/fb.svg">Facebook</a>
      <a class="twitter font-optima" href="https://twitter.com/intent/tweet?url=https://fju.syeeo.com&hashtags=%E7%96%9A%E4%BA%8B%E6%8E%92%E5%87%BA%E6%89%80" target="_blank"><img src="./data/twitter.svg">Twitter</a>
      <a class="Instgram font-optima"><img src="./data/ig.svg">Instgram</a>
      <a class="Line font-optima" href="https://social-plugins.line.me/lineit/share?url=https://fju.syeeo.com/" target="_blank"><img src="./data/line.svg">Line</a>
      <div class="link">
        <p class="font-optima">https://fju.syeeo.com/</p>
        <a class="copy-link">複製</a>
      </div>
    </div>
  </div>
  <script src="./scripts/result.js?0812a54"></script>
</div>


<?php
if ($headless) {
  include("./template/tail.html");
}
