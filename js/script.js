document.getElementById("calculate").addEventListener("click", function () {
  const incomeField = document.getElementById("income-field");
  const incomeFieldAmountString = incomeField.value;
  const incomeFieldAmount = parseFloat(incomeFieldAmountString);

  const foodField = document.getElementById("food-field");
  const foodFieldAmountString = foodField.value;
  const foodFieldAmount = parseFloat(foodFieldAmountString);

  const rentField = document.getElementById("rent-field");
  const rentFieldAmountString = rentField.value;
  const rentFieldAmount = parseFloat(rentFieldAmountString);

  const clothesField = document.getElementById("clothes-field");
  const clothesFieldAmountString = clothesField.value;
  const clothesFieldAmount = parseFloat(clothesFieldAmountString);

  const totalCost = foodFieldAmount + rentFieldAmount + clothesFieldAmount;

  const totalExpenses = document.getElementById("total-expenses");
  const totalExpenseAmountString = totalExpenses.innerText;
  const totalExpenseAmount = parseFloat(totalExpenseAmountString);
  totalExpenses.innerText = totalCost - totalExpenseAmount;

  const restBalance = document.getElementById("rest-balance");
  const restBalanceAmountString = restBalance.innerText;
  const restBalanceAmount = parseFloat(restBalanceAmountString);
  restBalance.innerText = incomeFieldAmount - totalCost;
});

document.getElementById("save-btn").addEventListener("click", function (){
  const savingField = document.getElementById("saving-field");
const savingFieldAmountString = savingField.value;
const savingFieldAmount = parseFloat(savingFieldAmountString);
const savingFieldAmountDigits= savingFieldAmount/100;

const incomeField = document.getElementById("income-field");
const incomeFieldAmountString = incomeField.value;
const incomeFieldAmount = parseFloat(incomeFieldAmountString);


const savingAmount = document.getElementById("saving-amount");
const savingBalanceAmountString = savingAmount.innerText;
const savingBalanceAmount = parseFloat(savingBalanceAmountString);
const savingTotalAmount = incomeFieldAmount * savingFieldAmountDigits;
//----------------------------------------------------------------
savingAmount.innerText= savingTotalAmount;


const restBalance = document.getElementById("rest-balance");
  const restBalanceAmountString = restBalance.innerText;
  const restBalanceAmount = parseFloat(restBalanceAmountString);

  const remainingBalance = document.getElementById("remaining-balance");
  const remainingBalanceAmountString = remainingBalance.innerText;
  const remainingBalanceAmount = parseFloat(remainingBalanceAmountString);
  remainingBalance.innerText = restBalanceAmount - savingTotalAmount;
})





// savingField= incomeFieldAmount;