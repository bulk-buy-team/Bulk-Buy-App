<?php 
session_start();
if (isset($_SESSION["user12"])) {
  $user =  $_SESSION['user12'];
  $lastname = $user['lastname'];
  $firstname = $user['firstname'];
  $fullname = $firstname .' '. $lastname;
  $email = $user['email'];
  }
  elseif (isset($_SESSION["user13"])) {
    $user =  $_SESSION['user13'];
    $lastname = $user['lastname'];
    $firstname = $user['firstname'];
    $fullname = $firstname .' '. $lastname;
    $email = $user['email'];
    }
  else{
     header("location:./login.html");
  }
  
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
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="assets/styles/history.css">
  <title>Profile</title>
</head>
<body>
  <div class="sidebar">
    <div class="logo">
      <img src="assets/images/logo.PNG" alt="">
    </div>
    <nav>
      <ul>
      <li>
            <?php
            
              if (isset($_SESSION["user12"])) {
                echo "<a href='dashboard.php'><li class='Home'><img src='assets/images/home.png' alt=''></li></a>";
              }
              elseif (isset($_SESSION["user13"])) {
                echo "<a href='admin.php'><li class='Home'><img src='assets/images/home.png' alt=''></li></a>";
              }
            ?>
          </li>
            <li><a href="product.php">Products</a></li>
            <li><a href="history.php">Order History</a></li>
            <li><a href="profile.php">Profile</a></li>
            <li><a href="faq.html">Faq</a></li> 
            <!-- <li><a href="#">Settings</a></li> -->
            <li><a href="../BULK-BUY-BACKEND/logout.php">Logout</a></li>
      </ul>
    </nav>
  </div>
  <div class="mobile-navbar">
    <nav>
    <ul>
          <?php
            
            if (isset($_SESSION["user12"])) {
              echo "<a href='dashboard.php'><li class='Home'><img src='assets/images/home.png' alt=''></li></a>";
            }
            elseif (isset($_SESSION["user13"])) {
              echo "<a href='admin.php'><li class='Home'><img src='assets/images/home.png' alt=''></li></a>";
            }
          ?>
        <a href="product.php"><li class="product"><img src="assets/images/shopping-cart.png" alt=""></li></a>
        <a href="history.php"><li class="history"><img src="assets/images/calendar.png" alt=""></li></a>
        <a href="profile.php"><li class="profile"><img src="assets/images/profile.png" alt=""></li></a>
      </ul>
    </nav>
  </div>
  <main>
    <header>
      <div class="home">
        <a href="#">Order History</a>
        <a href="#"><img src="assets/images/bell.png" alt="notification"></a>
      </div>
      <div class="search-bar">
        <div class="search-icon">
            <img src="assets/images/search1.png" alt="">
        </div>
        <input type="search" name="search" id="search" placeholder="Search">
      </div>
    </header>
    <div class="main-container">
   
      <?php 
   
   for ($i=0; $i < count($transaction); $i++) { 
    $id = $transaction[$i]["transaction_id"];
    $th_reference = $transaction[$i]["reference"];
    $th_amount = $transaction[$i]["amount"];
    $bought_unit = $transaction[$i]["bought_unit"];
    $th_items = $transaction[$i]["items"];
    $th_paid = $transaction[$i]["created_at"];
  
    echo "
  
    </div> 
     <div class='main-container'>
      <div class='history-card'>
        <div class='circle-right'></div>
        <div class='card-main'>
          <div class='card-head'>
            <div>
              <h1>$bought_unit units of $th_items</h1>
              <h4>$th_paid</h4>
            </div>
            <h4>$th_reference</h4>
          </div>
          <div class='card-body'>
            <h3>Total amount: N$th_amount</h3>
          </div>
        </div>
        <div class='circle-left'></div>
      </div>
      </div>";
}



?> 

    </div>
  </main>
</body>
</html>