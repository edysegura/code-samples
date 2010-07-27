<?php
$ua = $_SERVER['HTTP_USER_AGENT'];
if (strpos($ua,"MSIE") != false && strpos($ua,"Opera") === false) {
  
  if (strpos($ua,"Windows NT 5.2") != false) { 
    if(strpos($ua,".NET CLR") === false) return; 
  }

  if (substr($ua,strpos($ua,"MSIE")+5,1) < 7) {
    header("Location: noie6/index.html");
  }
}
?>
