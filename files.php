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
    <img class="files-img" src="./data/檔案區.jpg" alt="">
    <button class="love font-optima"><p>50%</p></button>
    <button class="friend font-optima"><p>30%</p></button>
    <button class="family font-optima"><p>30%</p></button>
    <button class="studies font-optima"><p>30%</p></button>
    <button class="work font-optima"><p>30%</p></button>
    <button class="life font-optima"><p>30%</p></button>
    <button class="others font-optima"><p>30%</p></button>
    <button class="no-entry"></button>
    <script src="./scripts/files.js"></script>
</div>

<?php
if ($headless) {
  include("./template/tail.html");
}
