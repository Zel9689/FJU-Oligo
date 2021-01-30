<?php
$headless = true;
// if($_GET['page'])
if ($headless) {
  include("./template/head.html");
}
?>

<div class="window-wrap">


</div>

<?php
if ($headless) {
  include("./template/tail.html");
}
