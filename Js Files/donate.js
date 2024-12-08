document.getElementById('noakhali-donate-btn').addEventListener('click',function(event){
  event.preventDefault();
  const donatedMoney = getValueFromInputFieldById('input-field-noyakhali');
  
  const currentBalance = getValueById('donated-current-balance');

  const currentNavbarBalance = getValueById('navBarBalance')

  const newBalance = currentBalance + donatedMoney;
  const newNavbarBalance = currentNavbarBalance - donatedMoney;
  document.getElementById('navBarBalance').innerText = newNavbarBalance;
  document.getElementById('donated-current-balance').innerText = newBalance;
})


document.getElementById('feni-donate-btn').addEventListener('click',function(event){
  event.preventDefault();
  const donatedMoney = getValueFromInputFieldById('input-field-feni');
  
  const currentBalance = getValueById('donated-current-balance-feni');

  const currentNavbarBalance = getValueById('navBarBalance')

  const newBalance = currentBalance + donatedMoney;
  const newNavbarBalance = currentNavbarBalance - donatedMoney;
  document.getElementById('navBarBalance').innerText = newNavbarBalance;
  document.getElementById('donated-current-balance-feni').innerText = newBalance;
})


document.getElementById('quota-donate-btn').addEventListener('click',function(event){
  event.preventDefault();
  const donatedMoney = getValueFromInputFieldById('input-field-quota');
  
  const currentBalance = getValueById('donated-current-balance-quota');

  const currentNavbarBalance = getValueById('navBarBalance')

  const newBalance = currentBalance + donatedMoney;
  const newNavbarBalance = currentNavbarBalance - donatedMoney;
  document.getElementById('navBarBalance').innerText = newNavbarBalance;
  document.getElementById('donated-current-balance-quota').innerText = newBalance;
})
