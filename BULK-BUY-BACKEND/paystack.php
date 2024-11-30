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
     header("location:./login.html");
  }

if (isset($_POST['pay_now'])) {
    $url = "https://api.paystack.co/transaction/initialize";
    $secret_key = "sk_test_884c609a47daf8535d336229789a489f46dc003f";
=======

if (!isset($_SESSION["user1"])) {
    header("location:../login.html");
}
$user = $_SESSION['user'];

if (isset($_POST['pay_now'])) {
    $url = "https://api.paystack.co/transaction/initialize";
    $secret_key = "sk_test_c21a76b9972ce999583b985939e965fe437ca283";
>>>>>>> baf767034e60dcb30d9ad75dbe97094de7f0df66
    
    // Define required variables
// $user_id = $user['username'];
$lastname = $user['lastname'];
$firstname = $user['firstname'];
$email = $user['email'];
$user_id = $user['user_id'];
<<<<<<< HEAD
$product_name = $_POST['product_name']; 
$unit_price1 = $_POST['unit_price']; 
$bought_unit = $_POST['amount']; 
// $item = [$_POST['item'],]; 
$amount = $unit_price1 * $bought_unit;
$amount = intval($amount);
$transaction_reference = 'BB' . $user_id . uniqid();

=======
$amount = $_POST['amount']; 
$item = [$_POST['item'],]; 
$transaction_reference = 'BB' . $user_id . uniqid();


>>>>>>> baf767034e60dcb30d9ad75dbe97094de7f0df66


    // Prepare data fields
    $fields = [
        'email' => $email,
        'amount' => $amount * 100, // Convert to kobo
<<<<<<< HEAD
        'callback_url' => "http://localhost/BULK/BULK-BUY-BACKEND/verify_transaction.php", // Replace with a publicly accessible URL
        'reference' => $transaction_reference,
        'metadata' => [
            'cancel_action' => "http://localhost/BULK-BUY/BULK-BUY-FRONTEND/dashboard.php",
            'customer_note' => 'Thank you for shopping!',
            'first_name' => $firstname,
            'last_name' => $lastname,
            'product_name' => $product_name,
            'bought_unit' => $bought_unit,
            // 'items' => $item
=======
        'callback_url' => "http://localhost/paystack/backend/verify_transaction.php", // Replace with a publicly accessible URL
        'reference' => $transaction_reference,
        'metadata' => [
            'cancel_action' => "http://localhost/paystack/index.html/cancel",
            'customer_note' => 'Thank you for shopping!',
            'first_name' => $firstname,
            'last_name' => $lastname,
            'items' => $item
>>>>>>> baf767034e60dcb30d9ad75dbe97094de7f0df66
        ]
    ];

    $fields_string = http_build_query($fields);

    // Initialize cURL
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        "Authorization: Bearer $secret_key",
        "Content-Type: application/x-www-form-urlencoded"
    ));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    // Execute the request
    $result = curl_exec($ch);
    if (curl_errno($ch)) {
<<<<<<< HEAD
        echo ' Curl error: ' . curl_error($ch);
        echo '<br> Invalid network connection, Connect to the intenet or Check your intenet connection.';
=======
        echo 'Curl error: ' . curl_error($ch);
>>>>>>> baf767034e60dcb30d9ad75dbe97094de7f0df66
        exit();
    }
    curl_close($ch);

    // Parse response and redirect to Paystack's payment page
    $response = json_decode($result, true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        echo "Invalid JSON response from Paystack.";
        exit();
    }

    if (isset($response['status']) && $response['status'] === true) {
        header("Location: " . $response['data']['authorization_url']);
        exit();
    } else {
        echo "Failed to initialize transaction. Please try again.";
        if (isset($response['message'])) {
            echo " Error: " . $response['message'];
        }
    }
}

?>

