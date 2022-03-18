var flagList = [
	"https://flagcdn.com/16x12/us.png",
	"https://flagcdn.com/16x12/eu.png",
	"https://flagcdn.com/16x12/gb.png"
];

var moeda = atualizaMoeda();
var elemento = document.getElementById("valor");
elemento.focus();

function atualizaMoeda() {
	let select = document.querySelector("#seletorMoeda");
	let opçãoMoeda = select.options[select.selectedIndex];

	moeda = opçãoMoeda.value;
 	return moeda;
  //flag.innerHTML = `<img src="${flagList[moeda-1]}" >`
}

function Converter() {
	if (elemento.value==""||elemento.value==null){
		alert("Por favor, adicionar um valor válido.");
		elemento.focus();
	}
	else {
		switch (moeda) {
			case "1":
				converterUs();
				break;
			case "2":
				converterEu();
				break;
			case "3":
				converterGb();
				break;
		}
	}
	elemento.focus();
}

function converterUs() {
	var input = parseFloat(elemento.value);
	var output = input / 5.1;

	const formatter = new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 2
	});

	document.getElementById("valorConvertido").value = formatter.format(output);
}

function converterEu() {
	var input = parseFloat(elemento.value);
	var output = input / 5.6;

	const formatter = new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "EUR",
		minimumFractionDigits: 2
	});

	document.getElementById("valorConvertido").value = formatter.format(output);
}

function converterGb() {
	var input = parseFloat(elemento.value);
	var output = input / 6.7;

	const formatter = new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "GBP",
		minimumFractionDigits: 2
	});

	document.getElementById("valorConvertido").value = formatter.format(output);
}

function Limpar (){
	window.location.href = window.location.href;
}