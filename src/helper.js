//helpers.js
export const getToken = () => {
    var authData = localStorage.getItem('auth-data');
    return authData;
}