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

if (isset($_POST["submit"])) {
    $email = $_POST["email"];
    $password = $_POST["password"];
    
    // Prepare and execute the query
    $stmt = $conn->prepare("SELECT * FROM user WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    $loginresult = $result->fetch_assoc();

    // Verify password
    if ($loginresult && password_verify($password, $loginresult['password'])) {
        $_SESSION['user1'] = $loginresult; // Uncomment if you want to store user session
        header("location:../BULK-BUY-FRONTEND/dashboard.php");
    } else {
        echo "Invalid username or password";
    }
    
    $stmt->close();
}

$conn->close();
?>
