<?php
session_start();

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bulk-buy";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Database connection failed."]);
    exit;
}

// Handle POST request
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = isset($_POST["email"]) ? trim($_POST["email"]) : null;
    $password = isset($_POST["password"]) ? trim($_POST["password"]) : null;

    if (!$email || !$password) {
        echo json_encode(["success" => false, "message" => "Email and password are required."]);
        exit;
    }

    // Use prepared statement to prevent SQL injection
    $stmt = $conn->prepare("SELECT * FROM user WHERE email = ? AND password = ?");
    $stmt->bind_param("ss", $email, $password);
    $stmt->execute();
    $result = $stmt->get_result();
    $loginResult = $result->fetch_assoc();

    if ($loginResult) {
        $_SESSION["user"] = $loginResult;
        $role = $loginResult["role"] ?? "user";
        echo json_encode(["success" => true, "role" => $role]);
    } else {
        echo json_encode(["success" => false, "message" => "Invalid email or password."]);
    }

    $stmt->close();
    $conn->close();
    exit;
}

// Invalid request method
http_response_code(405);
echo json_encode(["success" => false, "message" => "Invalid request method."]);
?>