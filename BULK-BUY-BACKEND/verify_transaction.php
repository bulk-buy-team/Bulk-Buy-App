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
  if ($response && $response->data->status === 'success') {
    echo "Payment verified! Thank you." . ' '. $firstname;
    // Deliver product or update database here
  } else {
    echo "Payment verification failed. Please try again.";
  }




?>

