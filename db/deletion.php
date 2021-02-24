<?php
$mysqli = new mysqli("localhost", "zelus", "1234", "OligoFJU"); //host, user, passwd, database_name
/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
$mysqli->query("SET NAMES 'utf8'"); //設定連線編碼，防止中文字亂碼
$data = json_decode(file_get_contents('php://input'), true); //decode從前端傳來的json
$sql = $data['sql'];
$adm = $data['adm'];
if($adm == 'fju'){
    echo $sql;
    mysqli_query($mysqli, $sql);
}
$mysqli->close();