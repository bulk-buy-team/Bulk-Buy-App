<?php
session_start();
// Database connection
$servername = "localhost"; // or your server
$username = "root";        // your database username
$password = "";            // your database password
$dbname = "bulk-buy"; // your database name 

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

if (isset($_POST['resetsubmit'])) {
    $email = htmlspecialchars($_POST ["email"]);

    $queryforReset = "SELECT * FROM user WHERE email = '$email'";
    $resultforReset = $conn->query($queryforReset);
    $resetresult = $resultforReset->fetch_assoc();
    if ($resetresult) {
        $_SESSION['user'] = $resetresult;
    echo "successful";
        // header("location:../reset.html");
     } 
     else{
        echo "nusuccessful";
     }

}



?>