const { authenticator } = require('otplib');
 
const secret = 'GIIF XRTP CF3V RHAL XI2W AKLT STY4 K5OW';
 
const token = authenticator.generate(secret);
 
try {
    console.log(token)
  var isValid = authenticator.check(token, secret);
  console.log(isValid)

  var isValid1 = authenticator.verify({ token, secret });
  console.log(isValid1)

} catch (err) {
  console.error(err);

  console.log('Invalid token');
}


