<?php
session_start();

if (!isset($_SESSION["user13"])) {
    header("location:../login.html");
}


$user = $_SESSION['user13'];
$user_id = $user['user_id'];
$firstname = $user['firstname'];
$lastname = $user['lastname'];
$email = $user['email'];

?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="assets/styles/admin.css">
  <title>Profile</title>
</head>
<body>
  <div class="sidebar">
    <div class="logo">
      <img src="assets/images/logo.PNG" alt="">
    </div>
    <nav>
      <ul>
      <li><a href="admin.php">Home</a></li>
            <li><a href="product.php">Products</a></li>
            <li><a href="history.php">Order History</a></li>
            <li><a href="profile.php">Profile</a></li>
        <!-- <li><a href="#">Support</a></li> -->
        <!-- <li><a href="#">Settings</a></li> -->
        <!-- <li><a href="#">Logout</a></li> -->
      </ul>
    </nav>
  </div>
  <div class="mobile-navbar">
    <nav>
    <ul>
        <a href="admin.php"><li class="Home"><img src="assets/images/home.png" alt=""></li></a>
        <a href="product.php"><li class="product"><img src="assets/images/shopping-cart.png" alt=""></li></a>
        <a href="history.php"><li class="history"><img src="assets/images/calendar.png" alt=""></li></a>
        <a href="profile.php"><li class="profile"><img src="assets/images/profile.png" alt=""></li></a>
      </ul>
    </nav>
  </div>
  <main>
    <header>
      <div class="home">
        <a href="#">admin</a>
        <a href="#"><img src="assets/images/bell.png" alt="notification"></a>
      </div>
      <div class="search-bar">
        <input type="search" name="search" id="search">
        <input type="submit">
      </div>
    </header>
    <div class="main-container">
      <div class="welcome-user">
        <img src="assets/images/profile-circle.svg" alt="">
        <div class="salutation">
          <?php  echo "<h3>Welcome . $firstname  $lastname!</h3>
          <span>Hi! Welcome back, you've been missed.</span>" ?>
        </div>
      </div>

      <div class="add-product">
        <h2>Add New product</h2>
        <button class="add-new">+</button>
      </div>
      <form action="../BULK-BUY-BACKEND/upload_product.php" method="post" id="form" style="display: none">
        <label for="type-of-product">
          Type of product
        </label>
        <input type="text" id="type-of-product">
        
        <label for="total-unit">Total Unit</label>
        <input type="number" id="total-units">
        
        <label for="total-amount">Total amount</label>
        <input type="number" id="total-amoumt">
        
        <label for="product-image">Product Image</label>
        <input type="file" id="product-image">
        
        <input type="submit" value="Upload product">
      </form>
    </div>
  </main>
<script src="assets/scripts/admin.js"></script>
</body>
</html>