<?php
session_start();


// header("Access-Control-Allow-Origin: *");
// header("Content-Type: application/json");
// header("Access-Control-Allow-Methods: post");



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

$data = json_decode(file_get_contents("php://input"));

echo json_encode(["result"=>$data, "status"=>1]);
return;

if (isset ($_POST["submit"])) {
    $email = htmlspecialchars($_POST ["email"]);
    $password = $_POST ["password"];    

    // SQL query to insert data
    $queryforlogin = "SELECT * FROM user WHERE email = '$email' AND password = '$password'";
       $result = $conn->query($queryforlogin);
        $loginresult = $result->fetch_assoc();

        $role = $loginresult['role'];
        $_SESSION["user12"] = $loginresult;


    if ($loginresult && $role) {
            
            // echo $_SESSION ["user12"];
            // header("location:../BULK-BUY-FRONTEND/admindashboard.php");
           

        } else {
          
            echo json_encode(["result"=>false, "status"=>1]);
            return;      
           }
    // Close connection
     $conn->close();
}
else {
    echo 'error loging in';
  }
// $conn->close();
?>


