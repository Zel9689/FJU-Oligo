<?php
$mysqli = new mysqli("localhost", "zelus", "1234", "OligoFJU"); //host, user, passwd, database_name
/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
$mysqli->query("SET NAMES 'utf8'"); //設定連線編碼，防止中文字亂碼
$category = $_GET['category']; //要求什麼種類的
$quantity = $_GET['quantity']; //client端目前筆數
$num_per_load = 10; //每次刷新幾筆
if ($quantity == NULL) {
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

/* create a prepared statement */
if ($stmt = $mysqli->prepare("SELECT * FROM confess_form WHERE category = ? ORDER BY ID DESC LIMIT ? , ?")) {

    /* bind parameters for markers */
    $stmt->bind_param("sii", $value, $quantity, $num_per_load);

    foreach ($name_map as $key => $value) {
        if ($category == $key) {
            /* execute query */
            $stmt->execute();
            $result = $stmt->get_result();
            while ($row = $result->fetch_row()){
                array_push($data, $row[2]);
            }

            break;
        }
    }
    /* close statement */
    $stmt->close();
}

/* close connection */
$mysqli->close();
header('Content-Type: application/json');
echo json_encode($data);