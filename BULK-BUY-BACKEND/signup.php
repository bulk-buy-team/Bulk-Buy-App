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
if (mysqli_connect_errno()) {
    die("Connection failed: " . mysqli_connect_error());
} 

if (isset ($_POST["submit"])) {
    $firstname = htmlspecialchars($_POST ["firstName"]);
    $lastname = htmlspecialchars($_POST ["lastName"]);
    $email = htmlspecialchars($_POST ["email"]);
    $password = $_POST ["password"];    

    // SQL query to insert data
    $stmt = $conn->prepare("INSERT INTO user (firstname, lastname, email, password) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $firstname, $lastname, $email, $password);
    $stmt->execute();
    
    if ($stmt) {
        header("location:../BULK-BUY-FRONTEND/login.html");
     } else {
         echo "Error ";
     }
 
     // Close connection
     $conn->close();
 
}
?>
