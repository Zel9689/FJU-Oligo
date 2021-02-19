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
    <!-- <span>Loading</span> -->
  </div>
</div>
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
    <button class="next-page"></button>
      <video playsinline class="vid-push" muted="true" onplay=handleFirstPlay(event) preload="auto">
      <source src="./data/推開_44KB.mp4" type="video/mp4">
      <source src="./data/推開_74KB.webm" type="video/webm">
      <source src="./data/推開_436KB.ogv" type="video/ogg">
      <p>你的瀏覽器不支援 HTML 5 video</p>
      </video>
    </div>
    <div class="swiper-slide">
    <div class="loading-wrapper" style="background: none;">
  <div class="wrapper"> 
    <div class="circle"></div> 
    <div class="circle"></div> 
    <div class="circle"></div>  
    <div class="shadow"></div>  
    <div class="shadow"></div> 
    <div class="shadow"></div>  
   </div> 
  </div> 
    </div>
  </div>
</div>
  
<button class="play-btn">Start</button>
  <div class="confess-form">
    <img src="./data/自首單界面-01_s.jpg" alt="">
    <form>
      <select name="category" class="category" required>
        <option value="">請選擇你自首的類別</option>
        <option>愛情</option>
        <option>親情</option>
        <option>工作</option>
        <option>友情</option>
        <option>學業</option>
        <option>生活</option>
        <option>其他</option>
      </select>
      <textarea class="font-song" name="confess-content" placeholder="【你可以寫下曾經讓你有罪惡感的事】" maxlength="500" required></textarea>
      <input type="submit" value="" class="commit"></input>
    </form>
  </div>
  <script src="./scripts/confess.js?08122a54"></script>
</div>

<?php
if ($headless) {
  include("./template/tail.html");
}
