<?php

function iud($query){
	$result = mysqli_query($GLOBALS['connect'], $query);
	if ($result) {
		$message = "Successful";
		echo $message;
		return true;
	}
	else{
		$message = mysqli_error($GLOBALS['connect']);
		echo $message;
		return false;
	}
}

if (isset($_POST['data'])) {
	// decode JSON string to PHP object, 2nd param sets to associative array
	$decoded = json_decode($_POST['data'],true);
	$values="";
	$columns = "";
	foreach ($decoded as $key => $value) {
		//get column name of each field. Make sure the name attribute in html form is same as the name of column in database
	    $columns.="`".mysqli_real_escape_string($GLOBALS['connect'],$value['name'])."`,";
	    //Get value of each field as per form
		$values.= "'".mysqli_real_escape_string($GLOBALS['connect'],$value["value"])."',";

	}
	// Generate query based on data received and table that is required to insert data into.
	$query = "INSERT INTO `table` (".rtrim($columns,',').") VALUES (".rtrim($values,',').")";
	//Calling insert update delete function
	iud($query);
}

?>