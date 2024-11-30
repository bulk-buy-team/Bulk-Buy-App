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
    $email = htmlspecialchars($_POST ["email"]);
    $password = $_POST ["password"];    

    // SQL query to insert data
    $queryforlogin = "SELECT * FROM user WHERE email = '$email' AND password = '$password'";
       $result = $conn->query($queryforlogin);
        $loginresult = $result->fetch_assoc();

        $role = $loginresult['role'];
       

    if ($loginresult && $role) {
             $_SESSION["user13"] = $loginresult;
            // var_dump($_SESSION["user13"]);
            header("location:../BULK-BUY-FRONTEND/admin.php");
        } else {
          $_SESSION["user12"] = $loginresult;
          // var_dump($_SESSION["user12"]);
          header("location:../BULK-BUY-FRONTEND/dashboard.php");
       }
    // Close connection
     $conn->close();
}
else {
    echo 'error loging in';
  }
// $conn->close();
?>


