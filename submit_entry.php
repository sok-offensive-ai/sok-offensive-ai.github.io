<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $tableSelect = $_POST['tableSelect'];
    $paper = $_POST['paper'];
    $year = $_POST['year'];
    $email = $_POST['email'];

    // Construct email message
    $to = "xxxx@gmail.com"; // Your email address
    $subject = "New entry submitted for " . $tableSelect;
    $message = "Table: " . $tableSelect . "\n";
    $message .= "Paper: " . $paper . "\n";
    $message .= "Year: " . $year . "\n";
    $message .= "Email: " . $email . "\n";

    // Send email
    mail($to, $subject, $message);

    // Redirect back to the form page
    header("Location: {$_SERVER['HTTP_REFERER']}?success=true");
} else {
    // If accessed directly, redirect to the form page
    header("Location: {$_SERVER['HTTP_REFERER']}");
}
?>


