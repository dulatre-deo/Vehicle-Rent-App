const $ = (id) => document.getElementById(id);

function number(id) {
  const value = Number($(id).value);
  return Number.isFinite(value) ? Math.max(0, value) : 0;
}

function php(value, decimals = 0) {
  return new Intl.NumberFormat('en-PH', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(Number.isFinite(value) ? value : 0);
}

function calculate() {
  const distance = number('trip-distance');
  const efficiency = number('efficiency');
  const gasPrice = number('gas-price');
  const liters = efficiency > 0 ? distance / efficiency : 0;
  const fuelCost = liters * gasPrice;
  const otherCosts = number('toll-cost') + number('driver-cost') + number('rental-cost');

  $('fuel-liters').textContent = php(liters, 2);
  $('fuel-equation').textContent = `${php(distance, distance % 1 ? 1 : 0)} km ÷ ${php(efficiency, 1)} km/liter`;
  $('fuel-cost').textContent = `₱${php(fuelCost)}`;
  $('other-costs').textContent = `₱${php(otherCosts)}`;
  $('total-cost').textContent = php(fuelCost + otherCosts);
}

function resetValues() {
  $('trip-distance').value = '0';
  $('efficiency').value = '7';
  $('gas-price').value = '0';
  $('toll-cost').value = '0';
  $('driver-cost').value = '0';
  $('rental-cost').value = '0';
  calculate();
  $('trip-distance').focus();
}

document.querySelectorAll('#trip-distance, #efficiency, #gas-price, #toll-cost, #driver-cost, #rental-cost')
  .forEach((input) => input.addEventListener('input', calculate));
$('reset-values').addEventListener('click', resetValues);
calculate();
