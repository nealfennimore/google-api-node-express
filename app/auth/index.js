const jwt = require('jsonwebtoken');
const fs  = require('fs');

const publicKey = fs.readFileSync('keys/pub.pem');

function authenticate(req, res, next) {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token) {
        jwt.verify(token, publicKey, { algorithms: ['RS256'] }, function(err, decoded) {
            if (err) {
                return res.status(403).json({
                    error: true,
                    message: 'Failed to authenticate token'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });

    } else {

        // No token
        return res.status(403).json({
            error: true,
            message: 'No token'
        });
    }
}

module.exports = authenticate;