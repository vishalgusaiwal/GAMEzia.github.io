<!DOCTYPE html>
<head>
  <title>my site</title>
</head>
<body>
<form method="POST" action="<?php echo $_SERVER["PHP_SELF"];?>">
<lable>username</lable><br>
<input type="text" name="uname"><br>
<input type="password" name="pass"><br>
<input type="submit" name="submit">
</form>
<?php 
if($_SERVER["REQUEST_METHOD"]=="POST"){
	$name= $_POST['uname'];
	$pass= $_POST['pass'];
	if(empty($name)||empty($pass)){
	echo "one of the above space is blank";
	}
	else {
		echo $name.",,".$pass;
	}
}
?>

</body>
</html>