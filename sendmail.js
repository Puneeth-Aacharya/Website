function sendMail()
{
	var e=new Error('Something went Wrong !!!!');

	Email.send({
		SecureToken:"ba9c82d4-69f1-4ec5-898e-4dcd9b0ea976",
		To:'websiteksp.738@gmail.com',
		From:document.getElementById('cmail').value,
		Subject:document.getElementById('cname').value,
		Body:document.getElementById('inputtext').value,
	}).then(
		function(response){ 
				if (response == 'OK') {             
					alert("Mail sent succeessfully");
					document.getElementById('cmail').value="";
					document.getElementById('cname').value="";
					document.getElementById('inputtext').value="";
				} else {
					alert(e);
            }
           });
}
