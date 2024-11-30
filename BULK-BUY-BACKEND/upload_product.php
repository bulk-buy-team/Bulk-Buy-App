<?php

session_start();
<<<<<<< HEAD
if (!isset($_SESSION["user12"])) {
=======
if (!isset($_SESSION["user"])) {
>>>>>>> baf767034e60dcb30d9ad75dbe97094de7f0df66
    header("location:../login.html");
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
if (isset ($_POST["submit"])) {
    $product = ($_POST ["product"]);
    $product_type = ($_POST ["product_type"]);
    $total_unit = ($_POST ["total_unit"]);
    $total_amount = ($_POST ["total_amount"]);
<<<<<<< HEAD
    $tempPath = ($_FILES['product_image']['tmp_name']);
    $imageData = file_get_contents($tempPath);
    $base64Image = base64_encode($imageData);

    // SQL query to insert data
    $stmt = $conn->prepare("INSERT INTO product (product, product_type, total_unit, total_amount, product_image) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $product, $product_type, $total_unit, $total_amount, $base64Image);
=======
    $product_image = $_POST ["product_image"];    

    // SQL query to insert data
    $stmt = $conn->prepare("INSERT INTO product (product, product_type, total_unit, total_amount, product_image) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $product, $product_type, $total_unit, $total_amount, $product_image);
>>>>>>> baf767034e60dcb30d9ad75dbe97094de7f0df66
    $stmt->execute();
    
    if ($stmt) {
        echo "upload completed";
     } else {
         echo "Error ";
     }
 
     // Close connection
     $conn->close();
 
}

?>


