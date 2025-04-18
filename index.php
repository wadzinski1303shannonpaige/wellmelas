<?php
// Get visitor IP address
$ip = $_SERVER['REMOTE_ADDR'];

// Query IP geolocation API
$geoData = @json_decode(file_get_contents("http://ip-api.com/json/{$ip}"), true);

// Check if API call was successful
if ($geoData && $geoData['status'] === 'success') {
    $countryCode = $geoData['countryCode'];

    if ($countryCode === 'US' || $countryCode === 'CA') {
        // Redirect to Page A for USA/Canada visitors
        header("Location: https://facebook.com/");
        exit();
    } else {
        // Redirect to Page B for all other visitors
        header("Location: https://pornhub.com/");
        exit();
    }
} else {
    // Optional: handle API failure (e.g., redirect to Page B by default)
    header("Location: https://yourdomain.com/");
    exit();
}
?>
