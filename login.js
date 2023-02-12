document.getElementById('btn-submit').addEventListener('click', function () {
    const setUserName = document.getElementById('mail-vaalue');
    const email = setUserName.value;

    const setPassword = document.getElementById('pass-value');
    const password = setPassword.value;

    if (email === 'salman.khan@gmail.com' && password === '654321') {
        window.location.href = 'deposit.html'
    }
    else {
        alert('Invalid Password or user ! please try again')
    }


});