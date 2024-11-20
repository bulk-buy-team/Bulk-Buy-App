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
            $_SESSION['user1'] = $loginresult;
            header("location:../BULK-BUY-FRONTEND/admindashboard.php");
        } else {
         echo "Error "; 
         header("location:../BULK-BUY-FRONTEND/dashboard.php");
       }
    // Close connection
     $conn->close();
}
else {
    echo 'error loging in';
  }
$conn->close();
?>



// $data = json_decode( file_get_contents("php://input"));
// echo $data->user_id;


if (isset($_POST["submit"])) 
{
    $email = $_POST["email"];
    $password = $_POST["password"];
       $queryforlogin = "SELECT * FROM user WHERE email = '$email' AND password = '$password'";
       $result = $conn->query($queryforlogin);
        $loginresult = $result->fetch_assoc();
    if ($loginresult) {
            $_SESSION['user1'] = $loginresult;
            $user = $_SESSION['user1'];
            $user_role = $user['role'];
            
            if ($user_role !== null) {
                header("location:../BULK-BUY-FRONTEND/dashboard.php");
            }
            else {
                echo "unsuccessfull";
            }

            // http_response_code(200);
            // echo json_encode(array("result"=>$loginresult));
            //  return;
         } 
         else{
            echo 'wrong username and password';
         }
    
}
?>

