<?php
session_start();
if (!isset($_SESSION["user1"])) {
    header("location: ./login.html");
}

$user = $_SESSION['user1'];
$user_id = $user['username'];
$lastname = $user['lastname'];
$firstname = $user['firstname'];
$email = $user['email'];

?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
h1,form{
    text-align: center;
}</style>
<body>
    <h1>dashboard</h1>

    <?php 
echo "wellcome " . $firstname . ' ' . $lastname;

?>


<a href="./backend/logout.php">log out</a>
</body>
</html>