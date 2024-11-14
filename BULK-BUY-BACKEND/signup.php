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

if (isset($_POST["submit"])) {
    if ($_POST["password"] == $_POST["confirmPassword"]) {
        $firstname = htmlspecialchars($_POST["firstName"]);
        $lastname = htmlspecialchars($_POST["lastName"]);
        $email = htmlspecialchars($_POST["email"]);
        $password = password_hash($_POST["password"], PASSWORD_DEFAULT); // Hash the password

        // SQL query to insert data
        $stmt = $conn->prepare("INSERT INTO user (firstname, lastname, email, password) VALUES (?, ?, ?, ?)");
        if ($stmt) {
            $stmt->bind_param("ssss", $firstname, $lastname, $email, $password);
            if ($stmt->execute()) {
                echo "Registration successful";
                // header("location:./");
            } else {
                echo "Error executing statement: " . $stmt->error;
            }
            $stmt->close(); // Close statement
        } else {
            echo "Error preparing statement: " . $conn->error;
        }

        // Close connection
        $conn->close();
    } else {
        echo 'Invalid password';
    }
}
?>
