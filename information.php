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
  <button class="info-return"><img src="./data/close.svg" alt=""></button>
  <img class="important-img" src="./data/重大情報-01_srgb.jpg" alt="">
</div>

<?php
if ($headless) {
  include("./template/tail.html");
}
