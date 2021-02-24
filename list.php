<?php 
//get
$adm = $_GET["adm"];
$cat = $_GET["cat"];
//sql
$connection = new mysqli("localhost", "zelus", "1234", "OligoFJU");
$adm = "fju";
//key
$key="fju";

//select
if (!empty($cat)){
$sql = "SELECT * FROM confess_form where category='$cat' ORDER BY id ASC";
}else{
$sql = "SELECT * FROM confess_form ORDER BY id ASC";
}


?>


<!DOCTYPE html>
<html lang="tc">
<head>
	<meta name="robots" content="noindex">
	<meta name="googlebot" content="noindex">
	<title>後台資料</title>
	<meta property="og:title" content="後台資料">
	<meta name="description" content="後台資料"/>
	<meta property="og:image" content="">
	
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<style>
	table, th, td {
		/* border: 1px solid black; */
		border-collapse: separate;
		padding-left: 2px;
		padding-right: 2px;
		white-space: nowrap;
		word-wrap: break-word;
		padding: 10px;
	}
	tr td:nth-child(3) {
    color: #000;
	white-space: break-spaces;
	word-break: break-all;
}
tr td:nth-child(1), tr td:nth-child(2) {
    color: #16a57e;
	white-space: nowrap;
}

tr:nth-child(2n+1) td{
	background-color: #d3ece7;
}
tr:nth-child(1) th{
    background-color: #31cca2;
    color: #fff;
}
/*第一欄第一列：左上*/
tr:first-child th:first-child{
    border-top-left-radius: 10px;
  }
  /*第一欄最後列：左下*/
  tr:last-child td:first-child{
    border-bottom-left-radius: 10px;
  }
  /*最後欄第一列：右上*/
  tr:first-child th:last-child{
    border-top-right-radius: 10px;
	min-width: 150px;
  }
  /*最後欄第一列：右下*/
  tr:last-child td:last-child{
    border-bottom-right-radius: 10px;
  }
  @font-face {
    font-family: "CSong3HK Medium";
    src: url('../data/fonts/è’™ç´ç¹é•·å®‹.otf');
    src: url('../data/fonts/converted-files/CSong3HK-Medium.woff');
}

@font-face {
    font-family: Optima;
    src: local('Optima');
    src: url('../data/fonts/Optima.ttc');
    src: url('../data/fonts/converted-files/Optima-Regular.woff2');
}
.font-song{
    font-family: "CSong3HK Medium";
	font-weight: normal;
}
.font-optima{
    font-family: Optima;
}
.title-wrapper, .table-responsive{
	display: inline-block;
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	margin: 0 0 20px 0;
}
.delete-btn{
	display: inline-block;
	background-color: #c04444;
	color: #fff;
	border: none;
	border-radius: 5px;
	padding: 5px 10px;
	transition: background-color, transform .2s;
	margin-left:13px;
}
.delete-btn:hover, .delete-btn:focus{
	background-color: #199b40;
	transform: scale(1.1);
}
.select-all, .deselect-all{
	display: inline-block;
	background-color: #888;
	color: #fff;
	border: none;
	border-radius: 5px;
	padding: 5px 10px;
	transition: background-color, transform .2s;
	margin-left:13px;
}
.select-all:hover, .deselect-all:hover{
	background-color: #555;
	transform: scale(1.1);
}
	</style>
</head>
<body>
<?php 
if(true){?>
	<div class="table-responsive">
		<div class="title-wrapper">
	<h1 class="font-song">疚事派出所後台資料</h1>
	<p style="display: inline-block;background-color:#555;color:#fff;padding: 5px 10px;border-radius: 5px;">category:<?php
	if(!empty($cat)){
		echo $cat;
	}else{
		echo '全部';
	}?>
</p>
	<select onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">
		<option value="">選擇分類</option>
		<option value="./list.php?adm=<?php echo $adm?>">全部</option>
		<option value="./list.php?adm=<?php echo $adm?>&cat=愛情">愛情</option>
		<option value="./list.php?adm=<?php echo $adm?>&cat=友情">友情</option>
		<option value="./list.php?adm=<?php echo $adm?>&cat=親情">親情</option>
		<option value="./list.php?adm=<?php echo $adm?>&cat=學業">學業</option>
		<option value="./list.php?adm=<?php echo $adm?>&cat=工作">工作</option>
		<option value="./list.php?adm=<?php echo $adm?>&cat=生活">生活</option>
		<option value="./list.php?adm=<?php echo $adm?>&cat=其他">其他</option>
	</select>

		<button onclick="location.href = './list.php';">離開</button>
		</div>
		<div>
			<button class="delete-btn" onclick="deleteFromTable();">刪除</button>
			<button class="select-all" onclick="selectAll();">全選</button>
			<button class="deselect-all" onclick="deselectAll();">取消全選</button>
		</div>
		<table>
					<!-- <caption>輔大後台資料</caption> -->
						<tr>
							<th class="font-song" style="text-align:center;">編號</th>
							<th class="font-song" style="text-align:center;">分類</th>
							<th class="font-song" style="text-align:center;">資料</th>
						</tr>
			<?php if($result = mysqli_query($connection, $sql)){
				if(mysqli_num_rows($result)){
					?>
							<?php while($row = mysqli_fetch_array($result)){?>
								
									<tr>
										<td class="font-optima"><input class="checkbox" type="checkbox" value="<?php echo $row['ID']?>" onchange="PushPopID(this);"><?php echo $row['ID']?></td>
										<td class="font-song"><?php echo $row['category']?></td>
										<td class="font-song"><?php echo $row['content']?></td>
									</tr>
							<?php }?>
					</table>
					<button class="delete-btn" onclick="deleteFromTable();">刪除</button>
				<?php }?>
			<?php }else{?>
				No records matching your query were found.
				
			<?php }?>
		

	</div>

</body>
<script>
	let IDs = [];
	function PushPopID(element){
		if(element.checked){
			IDs.push(element.value);
		}else{
			var index = IDs.findIndex((id) => id==element.value);
			IDs.splice(index, 1);
		}
		// console.log(IDs);
	}
	function deleteFromTable(){
		var sql = "DELETE FROM confess_form WHERE ID=-1";
		var adm = '<?php echo $adm?>';
		for(id of IDs){
			sql += " OR ID=" + id;
		}
		console.log(sql);
		fetch('./db/deletion.php', {
        body: JSON.stringify({adm: adm, sql: sql}), // must match 'Content-Type' header
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, same-origin, *omit
        headers: {
            // 'user-agent': 'Mozilla/4.0 MDN Example',
            'content-type': 'application/json'
        },
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'same-origin', // no-cors, cors, *same-origin
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // *client, no-referrer
    	})
		.then(response => response.text())
		.then(text => console.log(text))
		.then(()=>location.href = './list.php?adm=<?php echo $adm?>&cat=<?php echo $cat?>');
	}
	function clearCheckBox(){
		for(element of document.querySelectorAll('.checkbox')){
			element.checked = false;
		}
	}
	function selectAll(){
		for(checkbox of document.querySelectorAll('.checkbox')){
  checkbox.checked=true;
    checkbox.onchange();
}
	}
	function deselectAll(){
		for(checkbox of document.querySelectorAll('.checkbox')){
  checkbox.checked=false;
    checkbox.onchange();
}
	}
	clearCheckBox();
</script>
</html>
<?php }