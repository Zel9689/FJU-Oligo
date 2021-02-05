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

$category = $_GET['category']; //要求什麼種類的
$quantity = $_GET['quantity']; //client端目前筆數
$num_per_load = 10; //每次刷新幾筆
if($quantity == NULL){
    $quantity = 0;
}

$name_map = array(
    'love' => '愛情',
    'friend' => '友情',
    'family' => '親情',
    'studies' => '學業',
    'work' => '工作',
    'life' => '生活',
    'others' => '其他',
);
$data = array();
foreach($name_map as $key => $value){
    if($category == $key){
        $selectSql = "SELECT * FROM confess_form WHERE category = '" . $value . "' ORDER BY ID DESC LIMIT " . $quantity . "," . $num_per_load;
        $query = $connect->query($selectSql);
        if($query->num_rows > 0){
            while($row = $query->fetch_row()){
                array_push($data, $row[2]);
            }
        }
        break;
    }
}
header('Content-Type: application/json');
echo json_encode($data);


