<?php
$headless = true;
// if($_GET['page'])
if ($headless) {
  include("./template/head.html");
}
?>

<div class="window-wrap">
    <img class="files-img" src="./data/檔案區.jpg" alt="">
    <button class="love"><p>50%</p></button>
    <button class="friend"><p>30%</p></button>
    <button class="family"><p>30%</p></button>
    <button class="studies"><p>30%</p></button>
    <button class="work"><p>30%</p></button>
    <button class="life"><p>30%</p></button>
    <button class="others"><p>30%</p></button>
    <button class="no-entry"></button>
    <script src="./scripts/files.js"></script>
</div>

<?php
if ($headless) {
  include("./template/tail.html");
}
