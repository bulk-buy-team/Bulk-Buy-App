<?php
session_start();
if (!isset($_SESSION['user'])) {
    header("location: ./login.php");
}
// Database connection
$servername = "localhost"; // or your server
$username = "root";        // your database username
$password = "";            // your database password
$dbname = "futo"; // your database name 

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 




?>