function loginform() {
    document.getElementById('signup-form').style.visibility = 'hidden';
    document.getElementById('login-form').style.visibility = 'visible';
}
function signupform() {
    document.getElementById('login-form').style.visibility = 'hidden';
    document.getElementById('signup-form').style.visibility = 'visible';

}
function login() {
    location.href = "dashboard.html";
}
function signup() {
    location.href = "dashboard.html";
}