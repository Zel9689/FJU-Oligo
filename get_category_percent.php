<?php
$host = 'localhost';
$user = 'zelus';
$passwd = '1234';
$database = 'OligoFJU';
$connect = new mysqli($host, $user, $passwd, $database);
if($connect->connect_error) {
    die("連結失敗: " . $connect->connect_error);
}
// echo "連線成功";
// echo "<br>";

// 去資料庫撈筆數回來，看佔幾％
$amount_of_all = $connect->query("SELECT COUNT(*) as total FROM confess_form");
$amount_of_love = $connect->query("SELECT COUNT(*) as total FROM confess_form WHERE category = '愛情'");
$amount_of_friend = $connect->query("SELECT COUNT(*) as total FROM confess_form WHERE category = '友情'");
$amount_of_studies = $connect->query("SELECT COUNT(*) as total FROM confess_form WHERE category = '學業'");
$amount_of_family = $connect->query("SELECT COUNT(*) as total FROM confess_form WHERE category = '親情'");
$amount_of_work = $connect->query("SELECT COUNT(*) as total FROM confess_form WHERE category = '工作'");
$amount_of_life = $connect->query("SELECT COUNT(*) as total FROM confess_form WHERE category = '生活'");
$amount_of_others = $connect->query("SELECT COUNT(*) as total FROM confess_form WHERE category = '其他'");

$querys_of_amount = array(
    'all' => $amount_of_all,
    'love' => $amount_of_love,
    'friend' => $amount_of_friend,
    'studies' => $amount_of_studies,
    'family' => $amount_of_family,
    'work' => $amount_of_work,
    'life' => $amount_of_life,
    'others' => $amount_of_others,
);

$data = array();
foreach($querys_of_amount as $key => $value){
    $x = $value->fetch_assoc();
    $data[$key] = $x['total'];
    // print_r($key);
    // echo '____________';
    // print_r($value);
    // echo '____________';
    // print_r($x);
    // echo '<br>';
}
// print_r($data);
header('Content-Type: application/json');
echo json_encode($data);


//取內容
// $selectSql = "SELECT * FROM confess_form WHERE category = '學業'";

// //呼叫query方法(SQL語法)
// $memberData = $connect->query($selectSql);
// //有資料筆數大於0時才執行
// if ($memberData->num_rows > 0) {
//     //讀取剛才取回的資料
//     while ($row = $memberData->fetch_assoc()) {
//         print_r($row);
//         echo '<br>';
//     }
// } else {
//     echo '0筆資料';
// }
