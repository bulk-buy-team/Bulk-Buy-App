<<?php
session_start();
// if (!isset($_SESSION["user"])) {
//     header("location:../BULK-BUY-FRONTEND/login.html");
// }

$user = $_SESSION['user12'];
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
    <title>Document</title>
</head>
<style>
h1,form{
    text-align: center;
}</style>
<body>
    <h1>dashboard</h1>

    <li><a href="./index.html" class="active">home</a></li>
    <li><a href="./cart.html" class="active">cart</a></li>
    <li><a href="./product.php" class="active">product</a></li>
    <li><a href="./signup.html" aria-current="page">Sign Up</a></li>
    <li><a href="./login.html" class="active">Login</a></li>
    <li><a href="./transactionhistroy.php" class="active">transaction history</a></li>

    
<?php  echo "wellcome to bulk buy MR " . $firstname . ' ' . $lastname?>


    <form method="post" action="../BULK-BUY-BACKEND/upload_product.php" enctype="multipart/form-data">
            <h3 id="news-db">upload a product</h3><br>
            <select id="news-option" name="product">
                <option >--Select an option--</option>
                <option value="rice">rice</option>
                <option value="beans">beans</option>
                <option value="noode">noodle</option>
                <option value="garri">garri</option>
            </select><br><br>
            <h3>type of product</h3>
            <input required type="text" class="create-news" name="product_type" ><br>
            <h3>total unit</h3>
            <input required class="create-news" name="total_unit" ><br> 
            <h3>total amount</h3>
            <input class="create-news1" name="total_amount" ><br>
            <h3>product_image</h3>
           <input  type="file" class="create-update" name="product_image" ><br><br>
           <input  type="submit"  name="submit" value="upload product">
        </form>
  
</body>
</html>
