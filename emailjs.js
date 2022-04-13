function f(){
  
    var userid_d = CryptoJS.AES.decrypt("U2FsdGVkX1/8e276VAVRQeRaf5/udUGeldZosqXbQef+iD5JdVRFl1Ouw9vO3SEM", "My Secret Passphrase");
    var user_plaintext = userid_d.toString(CryptoJS.enc.Utf8);

    var serid_d = CryptoJS.AES.decrypt("U2FsdGVkX1+3Ow6BeNFFMhTgYpnDcv27dQIXnZBYYXM=", "My Secret Passphrase");
    var ser_plaintext = serid_d.toString(CryptoJS.enc.Utf8);

    var tempid_d = CryptoJS.AES.decrypt("U2FsdGVkX1/NuSxi7FP9ancEIxdNDo4aT6XszL5Fukm5fcQdijHFjvCVc/fCGNU0", "My Secret Passphrase");
    var temp_plaintext = tempid_d.toString(CryptoJS.enc.Utf8);

  (function() {
    emailjs.init(user_plaintext); 
  })();


   document
        .getElementById("c_form")
        .addEventListener("submit", function (event) {
          event.preventDefault();

          const serviceID = ser_plaintext;
          const templateID = temp_plaintext;

          // send the email here
          emailjs.sendForm(serviceID, templateID, this).then(
            (response) => {
              console.log("Email Sent Successfully ", response.status, response.text);
              alert("Email Sent Successfully");
            },
            (error) => {
              console.log("FAILED...!!", error);
              alert("FAILED...!!", error);
            }
          );
        });
}
