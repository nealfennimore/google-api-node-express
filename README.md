# Google API Express Server

Intended as an example for utilizing Google APIs.

## Installation

```sh
npm install
npm install -g foreman # Install foreman globally
```

### .env File Example

Update your `.env` file to look like below.

```js
{
    "server": {
        "ip": "0.0.0.0",
        "port": 3000
    },
    "google": {
        "auth": {
            /* Your Google JSON Secret */
        },
        "api": {
            /* Deliminate scopes with a comma */
            "scopes": "https://www.googleapis.com/auth/calendar,https://www.googleapis.com/auth/drive"
        },
        "calendar": {
            "id": ""
        }
    }
}
```

### Generate Keys

We'll use a RSA private key for signing and a public key for verifying using JSON Web Tokens for certain API requests.

```sh
openssl genrsa -out keys/priv.pem 1024
openssl rsa -pubout -in keys/priv.pem -out keys/pub.pem
```

## Get Access Token

Generate an access token and use it for authenticated API requests.

```js
const jwt = require('jsonwebtoken');
const fs  = require('fs');

const privateKey = fs.readFileSync('keys/priv.pem');

const ACCESS_TOKEN = jwt.sign({}, privateKey, { algorithm: 'RS256'})
```

The token should be in the `Authorization` Header.

```js
// Authorization: Bearer <token>
req.headers['authorization'];
```

## Starting API Server

```sh
npm run start
npm run develop # With nodemon
```