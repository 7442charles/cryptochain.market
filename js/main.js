function select(el) {
    return document.querySelector(el);
}

select('.login_btn').addEventListener('click', collect_credential);

/**collecting user credential 
 * focusing if one field is empty
 * check if the values are "database friendly"
 * takes user email changes it to lowercase for validation
 */
function collect_credential() {
    let email = select('#email_username').value;    
    let password = select('#password').value;
    if (email=="") {
        select('.login_details_username').focus();
    }else if(password==""){
        select('.login_details_password').focus();
    }else {
        email = email.toLowerCase();
        let login_json = {
            email:email,
            password:password
        }; //get ready server 😒
        console.log(login_json);
        //console.log('password=', password);
        //console.log('email=', email);
    }
}
