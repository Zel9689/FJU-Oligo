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
      <div class="case-return-space">
        <button class="case-return"><img src="./data/close.svg" alt=""></button>
      </div>
      <div class="case-list">
      <p class="font-song no-data-alert hide">目前還沒有人自首這個分類</p>
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
    </div>
    <img class="slogan" src="./data/圖層/要排出.png" alt=""></img>
  </div>
  <script src="./scripts/cases.js?20210224"></script>
</div>

<?php
if ($headless) {
  include("./template/tail.html");
}
