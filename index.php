<?php
$headless = true;
// if($_GET['page'])
if ($headless) {
  include("./template/head.html");
}
?>

<div class="window-wrap">
  <div class="foreword">
    <img src="./data/內部圖_srgb.jpg" alt="">
    <p></p>
  </div>
  <button class="confess-btn">我要自首</button>

  <video class="vid-opening" autoplay="true" muted="true" onplay=handleFirstPlay(event)>
    <source src="./data/開場影片.webm" type="video/webm">
    <p>你的瀏覽器不支援 HTML 5 video</p>
  </video>
  <button class="play-btn">Start</button>
</div>
<script src="./scripts/index.js"></script>


<?php
if ($headless) {
  include("./template/tail.html");
}
