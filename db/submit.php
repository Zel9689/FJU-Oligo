<?php
$mysqli = new mysqli("localhost", "zelus", "1234", "OligoFJU"); //host, user, passwd, database_name
/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
$mysqli->query("SET NAMES 'utf8'"); //設定連線編碼，防止中文字亂碼

$data = json_decode(file_get_contents('php://input'), true); //decode從前端傳來的json
$category = $data['category'];
$content = $data['content'];
/* create a prepared statement */
if ($stmt = $mysqli->prepare("INSERT INTO confess_form (category, content) VALUES (?, ?)")) {

    /* bind parameters for markers */
    $stmt->bind_param("ss", $category, $content);
    $stmt->execute();
    /* close statement */
    $stmt->close();
}

/* close connection */
$mysqli->close();