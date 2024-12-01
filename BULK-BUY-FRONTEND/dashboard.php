<?php
session_start();
if (!isset($_SESSION["user12"])) {
    echo "error";
    // header("location:./login.html");
}
$user =  $_SESSION['user12'];
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


$querry = "SELECT * FROM product ";
$stnt1 = mysqli_query($conn,$querry);
$product = $stnt1->fetch_all(MYSQLI_ASSOC);


?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="assets/styles/dashboard.css">
</head>
<body>
  <div class="sidebar">
    <div class="logo">
      <img src="assets/images/logo.PNG" alt="">
    </div>
    <nav>
        <ul>
            <li><a href="dashboard.php">Home</a></li>
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
        <a href="dashboard.php"><li class="Home"><img src="assets/images/home.png" alt=""></li></a>
        <a href="product.php"><li class="product"><img src="assets/images/shopping-cart.png" alt=""></li></a>
        <a href="history.php"><li class="history"><img src="assets/images/calendar.png" alt=""></li></a>
        <a href="profile.php"><li class="profile"><img src="assets/images/profile.png" alt=""></li></a>
      </ul>
    </nav>
  </div>
    <main>
      <header>
      <div class="home">
        <a href="#" class="page-title">Home</a>
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
            <div class="welcome-user">
                    <img src="assets/images/profile-circle.svg" alt="">
                    <div class="salutation">
                    <?php  echo "<h3>Welcome . $firstname $lastname!</h3>
                     <span>Hi! Welcome back, you've been missed.</span>" ?>

                    </div>
            </div>

            <div class="content-container">
                <div class="text">
                    <h3>Bag of Beans | Bag of Wheat</h3>
                    <span>Discount: 25%</span>
                </div>
                <button>Order Now</button>
            </div>


            <div class="product-list">
                <!-- Garri Product Card -->
                <?php
for ($i = 0; $i < count($product); $i++) {
    $products_id = $product[$i]["product_id"];
    $products = $product[$i]["product"];
    $product_type = $product[$i]["product_type"];
    $total_unit = $product[$i]["total_unit"];
    $updated_unit = $product[$i]["updated_unit"];
    $total_amount = $product[$i]["total_amount"];
    $product_image = $product[$i]["product_image"]; // Base64 string from the database

    $unit_price = $total_amount / $total_unit;
    $product_name = $product_type . ' ' . $products;

    // Render the product card
    echo " 
     <form action='../BULK-BUY-BACKEND/paystack.php' method='post'>
    <div class='product-card'>
                    <div class='product-image'>
                        <img src='data:image/jpeg;base64,$product_image' alt='Product Image' />
                        <img src='assets/images/menu-1.svg'alt='' class='menu-icon'>
                        <span>N$total_amount.00</span>
                    </div>
                    <div class='product-details'>
                        <div>
                            <h2>$product_name: </h2> <span class='unit-number'>$total_unit Units</span>
                        </div>
                        <div>1 unit: N$unit_price.00</div>
                        <div class='cart-quantity'>
                        <input type='hidden' name='product_name' value='$product_name'>
                        <input type='hidden' name='unit_price' value='$unit_price'>
                            <button name='pay_now'>Order Now</button>
                            <button class='minus'>-</button>
                            <input type='number' name='amount' value='9' class='unit-no'>
                            <button class='plus'>+</button>
                        </div>
                    </div>
                </div>
                </form>";

}
?>
<form action="../BULK-BUY-BACKEND/paystack.php"></form>
    
                <!-- Noodles Product Card -->
                
            </div>

            <div class="analysis">
                <div>
                    <h2>General Analysis: Rice</h2>
                    <div>Total number of people who contributed</div>
                </div>

                <div class="analysis-container">
                    <input type="range" name="analysis-bar" id="analysis-bar" value="90" oninput="analysisValue.value = value + '%'">
                    <output id="analysisValue">90%</output>
                </div>
                
                <div class="analysis-container">
                    <div>
                        <div class="buyer-images">
                            <img src="assets/images/profile-3.png" alt="">
                            
                            <div>+5 Members</div>
                        </div>
                    </div>


                    <a>
                        View details
                    </a>
                </div>

            </div>
  </div>
    </main>
    <script src="assets/scripts/dashboard.js"></script>
</body>
</html>