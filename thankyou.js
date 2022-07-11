//Generate random number
function generateOTP() {
  var digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < 4; i++) {
    OTP = OTP + digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}

let num = generateOTP();
console.log(num);

//compare OTP
  let attempts=3;
function compareOTP() 
{ 
  let validnum = document.getElementById("otp").value;
if (num == validnum) 
    {
      alert("Validation Successful!");
      window.location.href = "http://pixel6.co/";
    } 
 else
 {
  if(attempts==0)
  {
    window.location.href = "https://pixel6.co/errors";
  }
  else
  {
   attempts=attempts-1;
      alert("Invalid OTP. "+attempts+"  attempt Available");
      document.getElementById("otp").value ="";
      document.getElementById("otp").focus();
  }
 }
 
 return false;
}	
