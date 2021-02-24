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
    <button class="files-return"><img src="./data/返回箭頭.png" alt=""></button>
    <img class="files-img" src="./data/檔案區-01.jpg" alt="">
    <button class="love font-optima"><p>%</p></button>
    <button class="friend font-optima"><p>%</p></button>
    <button class="family font-optima"><p>%</p></button>
    <button class="studies font-optima"><p>%</p></button>
    <button class="work font-optima"><p>%</p></button>
    <button class="life font-optima"><p>%</p></button>
    <button class="others font-optima"><p>%</p></button>
    <button class="no-entry"></button>
    <script src="./scripts/files.js?20210223"></script>
</div>

<?php
if ($headless) {
  include("./template/tail.html");
}
