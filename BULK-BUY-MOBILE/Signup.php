<?php
session_start();

// Allow CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Database connection
$servername = "localhost"; 
$username = "root";
$password = "";
$dbname = "bulk-buy";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Ensure it's a POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $firstname = htmlspecialchars($_POST['firstName'] ?? '');
    $lastname = htmlspecialchars($_POST['lastName'] ?? '');
    $email = htmlspecialchars($_POST['email'] ?? '');
    $password = $_POST['password'] ?? '';

    // Validate input
    if (empty($firstname) || empty($lastname) || empty($email) || empty($password)) {
        http_response_code(400);
        echo "All fields are required.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Invalid email format.";
        exit;
    }

    // Hash the password
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // SQL query to insert data
    $stmt = $conn->prepare("INSERT INTO user (firstname, lastname, email, password) VALUES (?, ?, ?, ?)");
    if (!$stmt) {
        http_response_code(500);
        echo "Error preparing statement: " . $conn->error;
        exit;
    }

    $stmt->bind_param("ssss", $firstname, $lastname, $email, $hashed_password);
    if ($stmt->execute()) {
        http_response_code(200);
        echo "Signup successful.";
    } else {
        http_response_code(500);
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>