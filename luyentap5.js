let accounts = [];
let choice;

function isValidateEmail(email){
    return email.length >= 6 && (email.endsWith(".com") || email.endsWith(".vn")) && email.includes("@");
}

function isEmailTaken(accounts, email){
    return accounts.some(account => account.email === email);
}

function isValidatePassword(password){
    if(password.length < 6){
        return false;
    }

    let specialChars = "!@#$%^&*";
    let hasUpperCase = password.split("").some(char => char >= 'A' && char <= 'Z');
    let hasSpecialChar = password.split("").some(char => specialChars.includes(char));
    
    return hasUpperCase && hasSpecialChar;
}

function register(accounts){
    let email, password;

    do{
        email = prompt('Nhập email của bạn:');
        if(!isValidateEmail(email)){
            alert('Email không hợp lệ');
        }
        if(isEmailTaken(accounts, email)){
            alert('Email đã tồn tại');
        }
    }
    while(!isValidateEmail(email) || isEmailTaken(accounts, email));

    do{
        password = prompt('Nhập mật khẩu của bạn:');
        if(!isValidatePassword(password)){
            alert('Mật khẩu không hợp lệ');
        }
    }
    while(!isValidatePassword(password));

    const newAccount = {
        email,
        password,
    };

    accounts.push(newAccount)
    console.table(accounts);
}

function login(accounts){
    const email = prompt('Nhập email của bạn:');
    const password = prompt('Nhập mật khẩu của bạn: ');

    if(accounts.find((accounts) => accounts.email === email && accounts.password === password)){
        alert('Đăng nhập thành công');
    }
    else{
        alert('Đăng nhập thất bại');
    }
}

do{
    choice = +prompt(`1. Đăng kí.
2. Đăng nhập.
Nhập chức năng:`);

    switch (choice) {
        case 1:
            register(accounts);
            break;
        case 2:
            login(accounts);
            break;
        default:
            break;
    }
}
while(choice !== 3);
