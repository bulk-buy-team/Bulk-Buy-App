<?php 
session_start();
if (!isset($_SESSION["user"])) {
    header("location:../login.html");
}

$user = $_SESSION['user'];
$lastname = $user['lastname'];
$firstname = $user['firstname'];
$fullname = $firstname .' '. $lastname;
$email = $user['email'];

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
    $querry = "SELECT * FROM successful_transaction WHERE email = '$email' AND fullname = '$fullname'";
    $stnt1 = mysqli_query($conn,$querry);
    $transaction = $stnt1->fetch_all(MYSQLI_ASSOC);

 

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <li><a href="./index.html" class="active">home</a></li>
    <li><a href="./bashboard.html" class="active">dashboard</a></li>
  <li><a href="./signup.html" aria-current="page">Sign Up</a></li>
  <li><a href="./login.html" class="active">Login</a></li>

  
 
<div class="body">
<p>CONGRATULATION ON YOUR PAYMENT, YOUR transaction histroy WILL BE DISPLAY HERE</p>
 <?php 
   
   for ($i=0; $i < count($transaction); $i++) { 
    $id = $transaction[$i]["transaction_id"];
    $th_reference = $transaction[$i]["reference"];
    $th_amount = $transaction[$i]["amount"];
    $th_items = $transaction[$i]["items"];
    $th_paid = $transaction[$i]["paid_at"];
    echo "
    <div class='contain'>
    <button name'submit'>
        <a href='single.php?transaction_id=$id'>
            <div class='trannsaction'>
                <div>
                    <p>$th_reference</p>
                </div>
                <div>
                    <p> paid the sum of:  </p>
                </div>
                <div> 
                    <p>$th_amount</p>
                </div>
                <div> 
                    <p>$th_paid</p>
                </div>
            </div>
        </a>
    </button>
    </div> ";
}
?> 
</div>

</body>
</html>