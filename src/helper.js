//helpers.js
export const getToken = () => {
    var authData = localStorage.getItem('auth-data');
    return authData;
}

export const getLoggedInUserDetails = () => {
    var userData = localStorage.getItem('user-details');
    return userData;
}
