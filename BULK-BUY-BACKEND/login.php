<?php
session_start();

<<<<<<< HEAD

=======
>>>>>>> baf767034e60dcb30d9ad75dbe97094de7f0df66
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
<<<<<<< HEAD
       

    if ($loginresult && $role) {
             $_SESSION["user13"] = $loginresult;
            // var_dump($_SESSION["user13"]);
            header("location:../BULK-BUY-FRONTEND/admin.php");
        } else {
          $_SESSION["user12"] = $loginresult;
          // var_dump($_SESSION["user12"]);
          header("location:../BULK-BUY-FRONTEND/dashboard.php");
=======

    if ($loginresult && $role) {
            $_SESSION['user1'] = $loginresult;
            header("location:../BULK-BUY-FRONTEND/admindashboard.php");
        } else {
         echo "Error "; 
         header("location:../BULK-BUY-FRONTEND/dashboard.php");
>>>>>>> baf767034e60dcb30d9ad75dbe97094de7f0df66
       }
    // Close connection
     $conn->close();
}
else {
    echo 'error loging in';
  }
<<<<<<< HEAD
// $conn->close();
=======
$conn->close();
>>>>>>> baf767034e60dcb30d9ad75dbe97094de7f0df66
?>


