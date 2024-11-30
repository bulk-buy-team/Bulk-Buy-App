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
    $otp = rand(1000, 9999); 
    $_SESSION['otp'] = $otp; 
    $_SESSION['otp_expiry'] = time() + 300; 

if (isset($_POST['submit'])) {
    $email = htmlspecialchars($_POST ["email"]);
    
    $queryforlogin = "SELECT * FROM user WHERE email = '$email'";
    $result = $conn->query($queryforlogin);
    $emailresult = $result->fetch_assoc();     
    $_SESSION['emailresult'] = $emailresult;
    
    if (isset($_SESSION['otp']) && $emailresult) {
        echo "successful";
        header("location:../BULK-BUY-FRONTEND/otp.php");
     } 
     else{
        echo "nusuccessful";
     }


}

?>