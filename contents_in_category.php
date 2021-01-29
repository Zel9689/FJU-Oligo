<?php
$host = 'localhost';
$user = 'zelus';
$passwd = '1234';
$database = 'OligoFJU';
$connect = new mysqli($host, $user, $passwd, $database);
if($connect->connect_error) {
    die("連結失敗: " . $connect->connect_error);
}
echo "連線成功";
echo "<br>";

//選擇資料表user，條件是欄位id = 1的
$selectSql = "SELECT * FROM confess_form WHERE 'category' = '其他'";
//呼叫query方法(SQL語法)
$memberData = $connect->query($selectSql);
//有資料筆數大於0時才執行
if ($memberData->num_rows > 0) {
    //讀取剛才取回的資料
    while ($row = $memberData->fetch_assoc()) {
        print_r($row);
    }
} else {
    echo '0筆資料';
}


$category = $_GET['category'];
switch ($category) {
    case '愛情':
        # code...
        $amount_of_love = "SELECT * FROM confess_form WHERE 'category' = '愛情'";
        break;
    case '友情':
        # code...
        $amount_of_friend = "SELECT * FROM confess_form WHERE 'category' = '友情'";
        break;
    case '親情':
        # code...
        $amount_of_family = "SELECT * FROM confess_form WHERE 'category' = '親情'";
        break;
    case '學業':
        # code...
        $amount_of_studies = "SELECT * FROM confess_form WHERE 'category' = '學業'";
        break;
    case '工作':
        # code...
        $amount_of_work = "SELECT * FROM confess_form WHERE 'category' = '工作'";
        break;
    case '生活':
        # code...
        $amount_of_life = "SELECT * FROM confess_form WHERE 'category' = '生活'";
        break;
    case '其他':
        # code...
        $amount_of_others = "SELECT * FROM confess_form WHERE 'category' = '其他'";
        break;
    default:
        return 0;
        break;
}