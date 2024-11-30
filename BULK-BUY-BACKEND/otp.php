<?php
session_start();
$use1_otp = $_SESSION['otp'];

if (isset($_POST['submit'])) {
    $userotp1 = $_POST['otp1'];
    $userotp2 = $_POST['otp2'];
    $userotp3 = $_POST['otp3'];
    $userotp4 = $_POST['otp4'];
    $userotp = $userotp1 . $userotp2 . $userotp3 . $userotp4;
    if (isset($_SESSION['otp']) && $use1_otp == $userotp) {
        if (time() <= $_SESSION['otp_expiry']) {
            echo "otp successful";
<<<<<<< HEAD
            header("location:../BULK-BUY-FRONTEND/reset.html");
=======
            header("location:../BULK-BUY-FRONTEND/resetpassword.html");
>>>>>>> baf767034e60dcb30d9ad75dbe97094de7f0df66
        } else {
            echo "OTP expired. Please request a new one.";
        }
    } else {
        echo "Invalid OTP. Please try again.";
    }
    exit();
}
?>
