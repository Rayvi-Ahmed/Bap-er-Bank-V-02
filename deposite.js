
// Deposite Portion//

document.getElementById('btn-deposite').addEventListener('click', function () {
    const depositField = document.getElementById('deposite-input');
    const newDepositeTotalString = depositField.value;
    const newDeposite = parseFloat(newDepositeTotalString);

    const depositeTotal = document.getElementById('deposite-total');
    const previousdepositeTotalString = depositeTotal.innerText;
    const previousDeposite = parseFloat(previousdepositeTotalString);


    const currentDeposite = newDeposite + previousDeposite;
    depositeTotal.innerText = currentDeposite;

    const balanceTotal = document.getElementById('balance-total');
    const newBalanceString = balanceTotal.innerText;
    const newBalance = parseFloat(newBalanceString);

    const currentBalanceTotal = newDeposite + newBalance;

    balanceTotal.innerText = currentBalanceTotal;

    depositField.value = '';
})

// Widthdraw portion/////
document.getElementById('btn-widthdraw').addEventListener('click', function () {
    const widthdrawfield = document.getElementById('widthfraw-input');
    const newWidthdrawString = widthdrawfield.value;
    const newWidthdraw = parseFloat(newWidthdrawString);

    const previousWidthdrawElement = document.getElementById('widthdraw-total');
    const previuousWidthdrawString = previousWidthdrawElement.innerText;
    const previousWidthdraw = parseFloat(previuousWidthdrawString);

    const currentWidthdraw = previousWidthdraw + newWidthdraw;

    previousWidthdrawElement.innerText = currentWidthdraw;


    const balanceTotal = document.getElementById('balance-total');
    const newBalanceString = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(newBalanceString);

    const newBalanceStatus = newBalanceTotal - newWidthdraw;
    balanceTotal.innerText = newBalanceStatus;

    widthdrawfield.value = '';



})





