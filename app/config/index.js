const config = {
    server: {
        port: 3000,
        ip: '0.0.0.0'
    },
    google: {
        calendarId: '',
        scopes: [
            'https://www.googleapis.com/auth/calendar'
        ]
    }
};

module.exports = config;