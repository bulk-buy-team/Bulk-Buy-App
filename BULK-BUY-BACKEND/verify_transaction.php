
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



$user = $_SESSION['user'];
$lastname = $user['lastname'];
$firstname = $user['firstname'];
$email = $user['email'];

// Save this as callback.php
<?php

session_start();
$user = $_SESSION['user1'];
$user_id = $user['username'];
$lastname = $user['lastname'];
$firstname = $user['firstname'];
$email = $user['email'];
$amount = $_POST['amount'];



  // Set the Paystack verify URL and secret key
  $reference = $_GET['reference'];
  $verify_url = "https://api.paystack.co/transaction/verify/" . $reference;

  $secret_key = "sk_test_c21a76b9972ce999583b985939e965fe437ca283";

  $secret_key = "sk_test_244602ad2efb57ce7ce95602619a998dd658faed";


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
   

  if ($response && $response->data->status === 'success') {
    echo "Payment verified! Thank you." . ' '. $firstname;
    // Deliver product or update database here

  } else {
    echo "Payment verification failed. Please try again.";
  }




?>

