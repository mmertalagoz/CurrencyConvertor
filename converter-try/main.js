const elementUSD = document.getElementById('USD');
const elementEUR = document.getElementById('EUR');
const elementTRY = document.getElementById('TRY');
const elementUAH = document.getElementById('UAH');
const startinput = document.getElementById('input');
const resultinput = document.getElementById('result');

const api =
	'https://openexchangerates.org/api/latest.json?app_id=33ce5fc5c47d4fccabe4d514e1460dbf';

getCurriens();

async function getCurriens() {
	const result = await fetch(api);
	const data = await result.json();
	let rate = data.rates;
	console.log('uah', rate);
	elementUSD.textContent = rate.USD.toFixed(2);
	elementEUR.textContent = rate.EUR.toFixed(2);
	elementTRY.textContent = rate.TRY.toFixed(2);
	elementUAH.textContent = rate.UAH.toFixed(2);

	let translate = () => {
		resultinput.value = parseFloat(
			startinput.value * rate[select.value]
		).toFixed(2);
	};

	let finish = () => {
		resultinput.value = parseFloat(
			resultinput.value * rate[select.value]
		).toFixed(2);
	};
	startinput.addEventListener('input', translate);
	resultinput.addEventListener('input', finish);
}
