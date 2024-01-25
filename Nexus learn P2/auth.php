<?php

// Establish a MySQL database connection
$servername = "localhost";
$username = "root"; // Change this if your MySQL username is different
$password = "";     // Change this if your MySQL password is set
$database = "restaurant_db"; // Change this if your database name is different

$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle login request
if (isset($_POST['login'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
    $result = $conn->query($query);

    if ($result->num_rows > 0) {
        echo "Login successful!";
    } else {
        echo "Invalid username or password. Please try again.";
    }
}

// Handle signup request
if (isset($_POST['signup'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $query = "INSERT INTO users (username, password) VALUES ('$username', '$password')";
    
    if ($conn->query($query) === TRUE) {
        echo "Signup successful!";
    } else {
        echo "Error: " . $query . "<br>" . $conn->error;
    }
}

$conn->close();

?>
