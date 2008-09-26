<?php
$line1="ID\tProduct\tColor\tSales\t";
$line2="1\tPrinter\tGrey\t13\t";
$line3="2\tCD\tBlue\t15\t";
$line4="3\tDVD\tRed\t7\t";
$line5="4\tMonitor\tGreen\t4\t";
$line6="5\tTelephone\tBlack\t2\t";

$data="$line1\n$line2\n$line3\n$line4\n$line5\n$line6\n";
 
header("Content-type: application/x-msdownload");
header("Content-Disposition: attachment; filename=extraction.xls");
header("Pragma: no-cache");
header("Expires: 0");
print "$header\n$data";
?>