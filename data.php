<?php
              
if(isset($_POST['cName'] || $_POST['cEmail'] || $_POST['cTextarea']))
{
$name=$_POST['cName'];
$email=$_POST['cEmail'];
$content=$_POST['cTextarea'];
$fp = fopen('report.txt', 'a');
fwrite($fp, $name);
fwrite($fp, $email);
fwrite($fp, $content);
fclose($fp);
}
?>