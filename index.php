<?php
$headless = true;
if($_GET['ajax'] == '1'){
  $headless = false;
}
if ($headless) {
  include("./template/head.html");
}
?>

<div class="window-wrap">

 <div class="loading-wrapper">
  <div class="wrapper"> 
    <div class="circle"></div> 
    <div class="circle"></div> 
    <div class="circle"></div>  
    <div class="shadow"></div>  
    <div class="shadow"></div> 
    <div class="shadow"></div>  
   </div> 
  </div>  
  <video playsinline class="vid-opening" muted="true" onplay=handleFirstPlay(event) preload="auto">
  <source src="./data/開場影片_195KB.mp4" type="video/mp4">
  <source src="./data/開場影片_301KB.webm" type="video/webm">
  <source src="./data/開場影片_736KB.ogv" type="video/ogg">
  <p>你的瀏覽器不支援 HTML 5 video</p>
</video>
<!-- <video playsinline class="vid-opening" muted="true" onplay=handleFirstPlay(event) preload="auto">
  <source src="./data/test/pr.mp4" type="video/mp4">
  <p>你的瀏覽器不支援 HTML 5 video</p>
</video> -->
  <button class="play-btn">Start</button>
  <div class="foreword">
    <img src="./data/內部圖_srgb_s.jpg" alt="">
    <p class="font-song"></p>
  </div>
  <button class="confess-btn font-song">我要自首</button>

  <script src="./scripts/index.js?08023a118"></script>
</div>


<?php
if ($headless) {
  include("./template/tail.html");
}
