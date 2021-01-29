<?php
$headless = true;
// if($_GET['page'])
if ($headless) {
  include("./template/head.html");
}
?>

<div class="window-wrap">
  <video class="vid-push" muted="true" onplay=handleFirstPlay(event)>
    <source src="./data/推開.webm" type="video/webm">
    <p>你的瀏覽器不支援 HTML 5 video</p>
  </video>
  <button class="play-btn">Start</button>
  <button class="temp">proceed</button>

  <div class="confess-form">
    <img src="./data/自首單界面-01.jpg" alt="">
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
      <textarea name="confess-content" placeholder="【你可以寫下曾經讓你有罪惡感的事】" maxlength="500" required></textarea>
      <input type="submit" value="" class="commit"></input>
      <!-- To-do: implement ajax POST -->
    </form>
  </div>
</div>
<script src="./scripts/confess_form.js"></script>

<?php
if ($headless) {
  include("./template/tail.html");
}
