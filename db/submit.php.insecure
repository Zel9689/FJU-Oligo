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

echo '<br>';
$data = json_decode(file_get_contents('php://input'), true);
$category = $data['category'];
$content = $data['content'];
echo $category;
echo $content;

//設定連線編碼，防止中文字亂碼
$connect->query("SET NAMES 'utf8'");
 
$insertSql = "INSERT INTO confess_form (category, content) VALUES ('$category', '$content')";
//呼叫query方法(SQL語法)
$status = $connect->query($insertSql);
 
if ($status) {
    echo '新增成功';
} else {
    echo "錯誤: " . $insertSql . "<br>" . $connect->error;
}

