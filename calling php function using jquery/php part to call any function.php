<?php
//This part is for calling data from ajax call
/*
write your functions here
function abc(){

}
*/
if(isset($_GET['fn'])){
	require_once('_connection.php');
	echo $_GET['fn']($_GET['parameter']);
}
?>