<?php
$headless = true;
if ($_GET['ajax'] == '1') {
  $headless = false;
}
if ($headless) {
  include("./template/head.html");
}
?>

<div class="window-wrap">
  <div class="outter">
    <img class="radio" src="./data/圖層/無線電.png" alt=""></img>
    <div class="inner">
      <div class="case-list">

      </div>
    </div>
    <img class="slogan" src="./data/圖層/要排出.png" alt=""></img>
  </div>
  <script src="./scripts/cases.js"></script>
</div>

<?php
if ($headless) {
  include("./template/tail.html");
}
