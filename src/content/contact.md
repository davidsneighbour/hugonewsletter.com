---
title: "Contact Us"
menu:
  main:
    weight: 25
---

<style type="text/css">
	form{
		width: 100%;
		width: 600px;
	}

	input[type=email],
	input[type=text],
	textarea{
		width: 100%;
	}
</style>

<form action="https://formspree.io/ricardo@feliciano.tech" method="POST">
	<label for="name">Name:</label><br />
	<input type="text" name="name" /><br />
	<label for="_replyto">Email:</label><br />
	<input type="email" name="_replyto" /><br />
	<label for="message">Message:</label><br />
	<textarea name="message"></textarea><br />
	<input type="submit" value="Send" />
</form>
