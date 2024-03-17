import * as crypto from 'node:crypto';
import { Buffer } from 'node:buffer';
import * as fs from 'node:fs';


// Hashing

const data = "Some data for hash";

const hash = crypto.createHash('sha256');
hash.update(data);
console.log(hash.digest('hex'));

const hmac = crypto.createHmac('sha256', 'a secret key');
hmac.update(data);
console.log(hmac.digest('hex'));

// ------------------------------------------------

// Encryption

const algorithm = 'aes-256-cbc';
const password = 'my secret key';
const key = crypto.scryptSync(password, 'salt', 32);
const iv = Buffer.alloc(16, 0);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('some data to encrypt', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);


// --------------------------------------------------


// Decryption

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);


// ----------------------------------------------------

// Key Exchange ( Deffi Helman )


const diffiehellmangrp1 = crypto.getDiffieHellman('modp14');
const diffiehellmangrp2 = crypto.getDiffieHellman('modp14');

diffiehellmangrp1.generateKeys();
diffiehellmangrp2.generateKeys();

const diffiehellmangrp1sc = diffiehellmangrp1
    .computeSecret(diffiehellmangrp2.getPublicKey(), null, 'hex');

const diffiehellmangrp2sc = diffiehellmangrp2
    .computeSecret(diffiehellmangrp1.getPublicKey(), null, 'hex');

console.log(diffiehellmangrp1sc === diffiehellmangrp2sc);



// -----------------------------------------------------------


// Key Signatures 




const message = 'This is a message to be signed';

const sign = crypto.createSign('RSA-SHA256');

sign.update(message);

const privateKey = fs.readFileSync('private-key.pem', 'utf8');

const signature = sign.sign(privateKey, 'base64');
console.log(signature);


/*
Generating a Key Pair
First, let’s generate an RSA key pair using OpenSSL. Open a terminal and run the following commands:

openssl genpkey -algorithm RSA -out private-key.pem
openssl rsa -pubout -in private-key.pem -out public-key.pem
const privateKey = fs.readFileSync('private-key.pem', 'utf-8');

function generateDigitalSignature(data: string): string {
    const sign = crypto.createSign('RSA-SHA256');
    sign.update(data);
    return sign.sign(privateKey, 'base64');
}

const publicKey = fs.readFileSync('public-key.pem', 'utf-8');

function validateDigitalSignature(data: string, receivedSignature: string): boolean {
    const verify = crypto.createVerify('RSA-SHA256');
    verify.update(data);
    return verify.verify(publicKey, receivedSignature, 'base64');
}

// Example data to sign
const dataToSign = 'Hello, world!';

// Generate a digital signature
const signature = generateDigitalSignature(dataToSign);
console.log('Generated Signature:', signature);

// Validate the digital signature
const isSignatureValid = validateDigitalSignature(dataToSign, signature);
console.log('Signature Validation Result:', isSignatureValid);
 */


