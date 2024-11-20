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

    $querry = "SELECT * FROM product ";
    $stnt1 = mysqli_query($conn,$querry);
    $product = $stnt1->fetch_all(MYSQLI_ASSOC);

    // var_dump($product[0]);




    if (isset($_POST["submit"])) {
        $product_name = $_POST["product_name"];
        $total_amount = $_POST["total_amount"];
        $bought_unit = $_POST["bought_unit"];
        $total_unit = $_POST["total_unit"];
        
        if ($_POST["total_unit"] === 0) {
            echo "order complete";
        }else{
            
            for ($i=0; $i < count($product); $i++) {

                $items = [
                    [
                        "product_id" => 101,
                        "name" => "Product A",
                        "quantity" => 2
                    ],
                    [
                        "product_id" => 102,
                        "name" => "Product B",
                        "quantity" => 1
                    ]
                ];
        

        }
    

    }
}
?>

