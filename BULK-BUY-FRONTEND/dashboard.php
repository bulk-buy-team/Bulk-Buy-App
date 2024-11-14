<?php
session_start();
if (!isset($_SESSION["user1"])) {
    header("location:../BULK-BUY-FRONTEND/login.html");
}

$user = $_SESSION['user1'];
$user_id = $user['username'];
$lastname = $user['lastname'];
$firstname = $user['firstname'];
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

<?php  echo "wellcome to bulk buy MR " . $firstname . ' ' . $lastname?>


<form action="../backend/paystack.php" method="POST"> 
  <input type="hidden" name="user_email" value="<?php echo $email; ?>"> 
  <input type="hidden" name="user_email" value="<?php echo $firstname; ?>"> 
  <input type="hidden" name="user_email" value="<?php echo $lastname; ?>"> 
  <label for="">amount</label><br>
  <input type="text" name="amount" value="1 unit = 1000"> 
  <input type="hidden" name="cartid" value="<?php echo $cartid; ?>"> <br>
  <button type="submit" name="pay_now" id="pay-now" title="Pay now">Pay now</button>
</form>

<a href="../backend/logout.php">log out</a>
</body>
</html>