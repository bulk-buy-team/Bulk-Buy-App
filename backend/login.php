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


$data = json_decode( file_get_contents("php://input"));
echo $data->user_id;


if (isset($_POST["submit"])) 
{
    $username = $_POST["username"];
    $password = $_POST["password"];
       $queryforlogin = "SELECT * FROM user WHERE username = '$username' AND password = '$password'";
       $result = $conn->query($queryforlogin);
        $loginresult = $result->fetch_assoc();
    if ($loginresult) {

            // $_SESSION['user1'] = $loginresult;
            // header("location:../dashboard.php");


            http_response_code(200);
            echo json_encode(array("result"=>$loginresult));
            return;
        } 
         else{
            echo 'wrong username and password';
         }
}
?>


