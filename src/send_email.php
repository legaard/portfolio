<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
  $request_data = json_decode(file_get_contents('php://input', true));
  $email_data = array();

  //make sure that all keys exist in request body
  if(!array_key_exists("name", $request_data)
  || !array_key_exists("email", $request_data)
  || !array_key_exists("subject", $request_data)
  || !array_key_exists("message", $request_data)) {
    http_response_code(400);
    die("400 – Key missing from request!");
  }

  //make sure that all values are not empty
  foreach ($request_data as $key => $value) {
    if(empty($value)) {
        http_response_code(400);
        die("400 – One or more values are empty!");
    }
    $email_data[$key] = $value;
  }

  $message = wordwrap($email_data['message'], 70, "\r\n") . "\n\nFrom: " . $email_data['email'];
  $did_send = mail("legaard.lasse@gmail.com", $email_data['subject'], $message, "From: contact@legaard.xyz");

  if(!$did_send) {
    http_response_code(500);
    die("500 – Failed to send email");
  }
}
 ?>
