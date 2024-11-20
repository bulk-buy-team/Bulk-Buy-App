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

$user = $_SESSION['emailresult'];
        

if (isset($_POST['submit'])) {
    if ($_POST ["password1"] == $_POST ["password2"]) {
        // Get values from form inputs
        $id = $user['user_id'];
        $password = $_POST["password2"];

        // Prepare the SQL UPDATE query
        $sql = "UPDATE user SET password=? WHERE user_id=?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("si", $password, $id);
        $stmt->execute();
        // Execute the query
        if ($stmt) {
            header("location:../BULK-BUY-FRONTEND/login.html");
        } 
        else {
            echo "Error updating record: " . $conn->error;
        }
    }
    else  {
        echo "wrong password";
    }

}
$conn->close();



?>