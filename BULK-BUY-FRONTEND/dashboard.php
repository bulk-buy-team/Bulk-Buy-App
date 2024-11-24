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
        <li><a href="./dashboard.php">Home</a></li>
        <li><a href="./product.php">Product</a></li>
        <li><a href="#">My cart</a></li>
        <li><a href="#">Order History</a></li>
        <li><a href="./faq.html">FAQs</a></li>
        <li><a href="./support.html">Support</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="../BULK-BUY-BACKEND/logout.php">Logout</a></li>
      </ul>
    </nav>
  </div>
  <div class="mobile-navbar">
    <nav>
      <ul>
        <li class="Home">home</li>
        <li class="cart">cart</li>
        <li class="history">History</li>
        <li class="settings">Settings</li>
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
        <input type="search" name="search" id="search">
      </div>
    </header>
        <div class="main-container">
            <div class="welcome-user">
                    <img src="assets/images/profile-circle.svg" alt="">
                    <div class="salutation">
                      <?php echo " <h3>Welcome $fullname!</h3>   "?>
                        <span>Hi! Welcome back, you've been missed.</span>
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
    $total_amount = $product[$i]["total_amount"];
    $product_image = $product[$i]["product_image"]; // Base64 string from the database

    $unit_price = $total_amount / $total_unit;
    $product_name = $product_type . ' ' . $products;

    // Render the product card
    echo "
    <div class='product-card'>
                <div class='product-image'>
                    <img src='data:image/jpeg;base64,$product_image' alt='Product Image' />
                     <span>N$total_amount.00</span>
                </div>
                <div class='product-details'>
                    <div>
                        <h2>$product_name: </h2> <span class='unit-number'>$total_unit Units</span>
                    </div>
                    <div>1 unit: N$unit_price.00</div>
                    <div class='cart-quantity'>
                        <button>Add to Cart</button>
                        <button>-</button>
                        <input type='number' name='no-of-units' value='0' >
                        <button>+</button>
                    </div>
                </div> 
   </div>";
                
 }
?>

            </div>   
                 <button><a href="./product.php">more</a></button>
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