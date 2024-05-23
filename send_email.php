<?php
$errors = [];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get POST data
    $table = isset($_POST['tableSelect']) ? $_POST['tableSelect'] : '';
    $paper = isset($_POST['paper']) ? strip_tags(trim($_POST['paper'])) : '';
    $year = isset($_POST['year']) ? strip_tags(trim($_POST['year'])) : '';
    $mitre = isset($_POST['mitre']) ? strip_tags(trim($_POST['mitre'])) : '';
    $other = isset($_POST['other']) ? strip_tags(trim($_POST['other'])) : '';
    $focus = isset($_POST['focus']) ? strip_tags(trim($_POST['focus'])) : '';
    $counter = isset($_POST['counter']) ? strip_tags(trim($_POST['counter'])) : '';
    $offensive = isset($_POST['offensive']) ? strip_tags(trim($_POST['offensive'])) : '';
    $target = isset($_POST['target']) ? strip_tags(trim($_POST['target'])) : '';
    $realToy = isset($_POST['realToy']) ? strip_tags(trim($_POST['realToy'])) : '';
    $social = isset($_POST['social']) ? strip_tags(trim($_POST['social'])) : '';
    $benefit = isset($_POST['benefit']) ? strip_tags(trim($_POST['benefit'])) : '';
    $cost = isset($_POST['cost']) ? strip_tags(trim($_POST['cost'])) : '';
    $baseline = isset($_POST['baseline']) ? strip_tags(trim($_POST['baseline'])) : '';
    $code = isset($_POST['code']) ? strip_tags(trim($_POST['code'])) : '';
    $email = isset($_POST['email']) ? filter_var($_POST['email'], FILTER_SANITIZE_EMAIL) : '';

    // Validate form fields
    if (empty($table)) {
        $errors[] = 'Table selection is empty';
    }

    if (empty($paper)) {
        $errors[] = 'Paper field is empty';
    }

    if (empty($year)) {
        $errors[] = 'Year field is empty';
    } elseif (!is_numeric($year)) {
        $errors[] = 'Year must be a number';
    }

    if (empty($email)) {
        $errors[] = 'Email is empty';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Email is invalid';
    }

    // If no errors, send email
    if (empty($errors)) {
        // Recipient email address (replace with your own)
        $to_email = "saskia.schroeer@uni.li";

        // Subject of the email
        $subject = "SoK-OAI New Entry";

        // Build the email content
        $message = "New entry submitted:\n\n";
        $message .= "Table: $table\n";
        $message .= "Paper: $paper\n";
        $message .= "Year: $year\n";
        $message .= "MITRE ATT&CK Tactic: $mitre\n";
        $message .= "Other OAI Use Case: $other\n";
        $message .= "Focus: $focus\n";
        $message .= "Countermeasures: $counter\n";
        $message .= "Offensive Mentions: $offensive\n";
        $message .= "Target: $target\n";
        $message .= "Real/Toy System: $realToy\n";
        $message .= "Social Aspect Occurrences: $social\n";
        $message .= "Benefit Analysis: $benefit\n";
        $message .= "Cost Analysis: $cost\n";
        $message .= "Baseline Comparison: $baseline\n";
        $message .= "Code Link: $code\n";
        $message .= "Submitted by: $email\n";

        // Additional headers
        $headers = "From: $email";

        // Send email
        if (mail($to_email, $subject, $message, $headers)) {
            echo "Thank you! Your entry has been submitted successfully.";
        } else {
            echo "Failed to send email. Please try again later.";
        }
    } else {
        // Display errors
        echo "The form contains the following errors:<br>";
        foreach ($errors as $error) {
            echo "- $error<br>";
        }
    }
} else {
    // Not a POST request, display a 403 forbidden error
    header("HTTP/1.1 403 Forbidden");
    echo "You are not allowed to access this page.";
}
?>
