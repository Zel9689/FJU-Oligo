<?php
$headless = true;
// if($_GET['page'])
if ($headless) {
  include("./template/head.html");
}
?>

<div class="window-wrap">
  <img class="important-img" src="./data/重大情報-01_srgb.jpg" alt="">
</div>

<?php
if ($headless) {
  include("./template/tail.html");
}
