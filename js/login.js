const response = new XMLHttpRequest();
const url = 'http://15.237.34.51:8000/api/v1/auth/login';

function select(el) {
    return document.querySelector(el);
}

select(".btn_login").addEventListener('click', collect_credential);
let darkmode_display = select('.darkmode');
document.createElement('span')

/**collecting user credential 
 * focusing if one field is empty
 * check if the values are "database friendly"
 * takes user email changes it to lowercase for validation
 */
function collect_credential() {
    let email = select('#email_username').value;    
    let password = select('#password').value;
    //let pattern 
    if (email=="") {
        select('.login_details_username').focus();
    }else if(password==""){
        select('.login_details_password').focus();
    }else {
        email = email.toLowerCase();
        response.open("POST", url)
        response.setRequestHeader('Content-Type', 'application/json')
        let login_json = {
            email:email,
            password:password
        }; 
        const json = JSON.stringify(login_json);
        response.send(json);//hello  mr.server 😒
        console.log(json);
    }
}


/**End login handling */
