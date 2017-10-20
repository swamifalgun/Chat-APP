'use strict';

if (process.env.NODE_ENV === 'production') {
    //  Offer production stage environment variables
    module.exports = {
        host: process.env.host || "",
        dbURI: process.env.dbURI,
        sessionSecret: process.env.sessionSecret,
        fb: {
            clientID: process.env.fbclientID,
            clientSecret: process.env.fbclientSecret,
            callbackURL: process.env.host + "/auth/facebook/callback",
            profileFields: ["id", "displayName", "photos"]
        },
        twitter: {
            consumerKey: process.env.twitterConsumerKey,
            consumerSecret: process.env.twitterConsumerSecret,
            callbackURL: process.env.host + "/auth/twitter/callback",
            profileFields: ["id", "displayName", "photos"]
        }
    }
} else {
    // Offer development stage setttings and data 
    module.exports = require('./development.json');
}