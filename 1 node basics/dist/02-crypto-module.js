import crypto, { verify } from "node:crypto";
//built in module system
// security related task
//creaint a lot uuid , ids
//secure token
//hash data, verify if the data has chaged or not
//encrypt and decrypt
//creating userId,sessionId
const requestId = crypto.randomUUID();
console.log(requestId);
//password reset token or email verification token, session scerates and api keys also use below
const resetToken = crypto.randomBytes(16).toString('hex');
console.log(resetToken); // 32 char string
//fixed length strings
// hello ->hash
//hash -> one way function
//one way mean can convert plain text to hash but cannot convert hash to plain text
//hash is used to verify the data
const text = "hello";
const hash = crypto.createHash("sha256").update(text).digest('hex');
console.log(hash);
// HMAC is used for message authentication - verify the data integrity and authenticity
//crypto.createHmac(algo,key)
// HMAC: data + secrate -> signed hash
//webhook,signed token,api authentication
const hmac = crypto.createHmac('sha256', 'secret-key').update(text).digest('hex');
const verifyHmac = crypto.createHmac('sha256', 'secret-key').update(text).digest('hex');
console.log(hmac);
console.log('signature is matching', hmac === verifyHmac);
//# sourceMappingURL=02-crypto-module.js.map