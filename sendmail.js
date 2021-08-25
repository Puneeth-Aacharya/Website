function sendMail()
{
	var e=new Error('Something went Wrong !!!!');

	Email.send({
		SecureToken:"091bbbb1-8f21-4806-9a27-6d583ed9fd66",
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
