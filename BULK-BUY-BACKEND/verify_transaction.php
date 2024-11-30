<?php
session_start();

<<<<<<< HEAD
if (isset($_SESSION["user12"])) {
  $user =  $_SESSION['user12'];
}
elseif (isset($_SESSION["user13"])) {
    $user =  $_SESSION['user13'];
 }
else{
     header("location:../bulk-buy-frontend/login.html");
     exit();
}
    $lastname = $user['lastname'];
    $firstname = $user['firstname'];
    $fullname = $firstname .' '. $lastname;
    $email = $user['email'];


=======
>>>>>>> baf767034e60dcb30d9ad75dbe97094de7f0df66
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

<<<<<<< HEAD
=======


$user = $_SESSION['user'];
$lastname = $user['lastname'];
$firstname = $user['firstname'];
$email = $user['email'];
>>>>>>> baf767034e60dcb30d9ad75dbe97094de7f0df66

  // Set the Paystack verify URL and secret key
  $reference = $_GET['reference'];
  $verify_url = "https://api.paystack.co/transaction/verify/" . $reference;
<<<<<<< HEAD
  $secret_key = "sk_test_884c609a47daf8535d336229789a489f46dc003f";
=======
  $secret_key = "sk_test_c21a76b9972ce999583b985939e965fe437ca283";
>>>>>>> baf767034e60dcb30d9ad75dbe97094de7f0df66

  // Initialize cURL for verification
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $verify_url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    "Authorization: Bearer $secret_key",
    "Cache-Control: no-cache",
  ));

  // Execute request
  $result = curl_exec($ch);
  curl_close($ch);

  // Handle verification result
  $response = json_decode($result);
//   print_r($response); // Display the entire response to understand its structure
    if ($response && $response->data->status === 'success' || $response->data->status !== 'success') {
        $status = $response->data->status;
        $reference = $response->data->reference;
        $amount = $response->data->amount / 100;
        $fullname = $firstname .' '. $lastname;
        $cus_email = $response->data->customer->email;
<<<<<<< HEAD
        $product_name = $response->data->metadata->product_name;
        $boughtunit = $response->data->metadata->bought_unit;
//         echo '<pre>';
// print_r($response);
// echo '</pre>';
// die(); // Stop execution fo debugging

       
         // SQL query to insert data
   
    $stmt31 = $conn->prepare("INSERT INTO successful_transaction ( status, email, fullname, reference, amount, bought_unit, items) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt31->bind_param("sssssss", $status, $cus_email, $fullname, $reference, $amount, $boughtunit, $product_name );
    $stmt31->execute();
    $producttype = explode(" ", $product_name )[0]; 
    $productname = explode(" ", $product_name )[1]; 
    
    if ($stmt31 ) {
      
    $querry = "SELECT * FROM product WHERE product = '$productname' and product_type = '$producttype'";
    $result = $conn->query($querry);
    $result1 = $result->fetch_assoc();

      $product_id = $result1['product_id'];
      $updated_unit = $result1['updated_unit']; 


      if ($result1) {
      $updated_unit += $boughtunit; 
    
      $update_stmt = $conn->prepare("UPDATE product SET updated_unit=? WHERE product_id=?");
      $update_stmt->bind_param("ii", $updated_unit, $product_id);
      $update_stmt->execute();   

       echo "Payment verified! Thank you, " . $firstname;
       header("Location: ../BULK-BUY-FRONTEND/history.php");
      exit();
      }
      else{
        echo "unable to updated bought unit";
      } 
     } 
     else {
      echo "Database preparation failed.";
=======
        date_default_timezone_set("Africa/lagos");
        $paid_at = date('Y-m-d H:i:s', time());
        $items = json_encode($response->data->metadata->items);
         echo $fullname;
         // SQL query to insert data
    $stmt = $conn->prepare("INSERT INTO successful_transaction ( status, email, fullname, reference, amount, items, paid_at ) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssss", $status, $cus_email, $fullname, $reference, $amount, $items, $paid_at);
    $stmt->execute();

    if ($stmt) {
        echo "Payment verified! Thank you." . ' '. $firstname;
        header('location:../BULK-BUY-FRONTEND/transactionhistroy.php');
        
    }
    else{
        echo "database preparation failed";
    }
   
  } else {
    echo "Payment verification failed. Please try again.";
>>>>>>> baf767034e60dcb30d9ad75dbe97094de7f0df66
  }
}
else {
  echo "Payment verification failed. Please try again.Invalid request: Missing reference.";
}
    
  

?>

