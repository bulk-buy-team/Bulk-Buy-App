<?php

session_start();
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
    
    // Define required variables
// $user_id = $user['username'];
$lastname = $user['lastname'];
$firstname = $user['firstname'];
$email = $user['email'];
$user_id = $user['user_id'];
$product_name = $_POST['product_name']; 
$unit_price1 = $_POST['unit_price']; 
$bought_unit = $_POST['amount']; 
// $item = [$_POST['item'],]; 
$amount = $unit_price1 * $bought_unit;
$amount = intval($amount);
$transaction_reference = 'BB' . $user_id . uniqid();



    // Prepare data fields
    $fields = [
        'email' => $email,
        'amount' => $amount * 100, // Convert to kobo
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
        echo ' Curl error: ' . curl_error($ch);
        echo '<br> Invalid network connection, Connect to the intenet or Check your intenet connection.';
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

