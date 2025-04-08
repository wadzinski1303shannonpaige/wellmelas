<?php
require_once('geoplugin.class.php');
$geoplugin = new geoPlugin();
$geoplugin->locate();
// create a variable for the country code
$var_country_code = $geoplugin->countryCode;
// redirect based on country code:
if ($var_country_code == "US") {
   header('Location: https://facebook.com/');
}
else if ($var_country_code == "NL") {
   header('Location: https://wikipedia.org/');
} else {
   header('Location: https://google.com/');
}
?>
