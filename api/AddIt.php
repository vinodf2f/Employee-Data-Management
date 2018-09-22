<?php
	
	require_once('dbconfig.php');

	$_POST = json_decode(file_get_contents('php://input'), true);

	if (empty($_POST['name']))
		echo 'name empty';
		$name = $_POST['name'];
  
	if (empty($_POST['email']))
		echo 'email empty';
  		$email = $_POST['email'];

	if (empty($_POST['password']))
		echo 'password empty';
		$password = $_POST['password'];

	if (empty($_POST['image']))
		echo 'image empty';
  		$image = $_POST['image'];	

	$query = "INSERT into info (name, email, password,image) VALUES ('$name',  '$email', '$password', '$image')";
	$result = mysqli_query($con,$query);
    $rows = mysqli_affected_rows($con);

	echo $json_response = json_encode($rows);

?>