var express = require('express');
var userRespJson = require('../../response/userDetails.json');

// Post request to find valid user or not
class UserDetails {
    constructor() {}

    getUserResponse(obj) {
        const userCredens = userRespJson.userResp;
        const resp = userCredens.filter(e => {
            return (e.email === obj.email)
        });
        return resp;
    }
    
}


module.exports = UserDetails;