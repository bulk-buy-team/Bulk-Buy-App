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

if (isset ($_POST["submit"])) {
    
    if ($_POST ["password"] == $_POST ["password2"]) {
        $firstname = htmlspecialchars($_POST ["firstname"]);
        $lastname = htmlspecialchars($_POST ["lastname"]);
        $email = htmlspecialchars($_POST ["email"]);
        $username = htmlspecialchars($_POST ["username"]);
        $password = $_POST ["password"];   

        // SQL query to insert data
        $stmt = $conn->prepare("INSERT INTO user (firstname, lastname, email, username, password) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("sssss", $firstname, $lastname, $email, $username, $password);
        $stmt->execute();
    
        if ($stmt) {
            header("location:/login.html");
        } else {
            echo "Error ";
        }
 
        // Close connection
        $conn->close();
    } 
    else{
        echo 'invaild password';

    }
}
?>