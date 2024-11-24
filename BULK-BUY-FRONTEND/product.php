<?php
session_start();
// $user = $_SESSION['user'];
// $lastname = $user['lastname'];
// $firstname = $user['firstname'];
// $fullname = $firstname .' '. $lastname;
// $email = $user['email'];

// Database connection
$servername = "localhost"; // or your server
$username = "root";        // your database username
$password = "";            // your database password
$dbname = "bulk-buy"; // your database name

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);


$querry = "SELECT * FROM product ";
$stnt1 = mysqli_query($conn,$querry);
$product = $stnt1->fetch_all(MYSQLI_ASSOC);


?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="assets/styles/product.css">
  <title>FAQ</title>
</head>
<body>
  <div class="sidebar">
    <div class="logo">
      <img src="assets/images/logo.PNG" alt="">
    </div>
    <nav>
      <ul>
        <li><a href="./dashboard.php">Home</a></li>
        <li><a href="#">My cart</a></li>
        <li><a href="#">Order History</a></li>
        <li><a href="#">FAQs</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </nav>
  </div>
  <div class="mobile-navbar">
    <nav>
      <ul>
        <li>home</li>
        <li>cart</li>
        <li>History</li>
        <li>Settings</li>
      </ul>
    </nav>
  </div>
  <main>
    <header>
      <div class="home">
        <a href="#">FAQs</a>
        <a href="#"><img src="assets/images/bell.png" alt="notification"></a>
      </div>
      <div class="search-bar">
        <input type="search" name="search" id="search">
      </div>
    </header>
    <div class="main-container">
      <div class="product-card">
        <div class="product-header">
        <?php
for ($i = 0; $i < count($product); $i++) {
    $products_id = $product[$i]["product_id"];
    $products = $product[$i]["product"];
    $product_type = $product[$i]["product_type"];
    $total_unit = $product[$i]["total_unit"];
    $total_amount = $product[$i]["total_amount"];
    $product_image = $product[$i]["product_image"]; // Base64 string from the database

    $unit_price = $total_amount / $total_unit;
    $product_name = $product_type . ' ' . $products;

    // Render the product card
    echo "
    <div class='product-card'>
        <div class='product-header'>
            <h1 class='product-name'>$product_name</h1>
            <span class='total-units'>$total_unit units</span>
            <p class='unit-price'>1 unit: $unit_price</p>
        </div>
        <div class='product-img'>
            <img src='data:image/jpeg;base64,$product_image' alt='Product Image' />
        </div>
        <div class='product-price'>
            <p>$total_amount.00</p>
        </div>
    </div>";
}
?>
        </div>
      </div>
    </div>

          
     
  </main>
<script src="assets/scripts/product.js"></script>
</body>
</html>