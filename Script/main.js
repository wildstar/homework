$(function () {
	resetcalc();
	$('#total').on('change mouseup keyup', function () {
		if ($('#total').val() < 1 || $('#total').val() > 99) { resetcalc() }
		else { $('#total').val(parseInt($('#total').val()));$('#calc').prop('disabled', false); }
	});
	$('#calc').click(function () {
		CoinsCalc($('#total').val())
	})
});
function resetcalc() {
	$('#total').val(0);
	$('#calc').prop('disabled', true);
	$('.count').addClass("hidelabel");
}
function CoinsCalc(total) {
	var coins = [];
	var coinCount = [];
	for (i = 0; i < 4; i++) {
		coins[i] = parseInt($('#cointxt' + i).val());
	}
	var remainAmount = total;
	for (i = 0; i < 4; i++) {
		var thislbl = $("#coinlbl" + i)
		coinCount[i] = parseInt(remainAmount / coins[i]);
		thislbl.html(coinCount[i]);
		if (coinCount[i] > 0) { thislbl.parent().removeClass("hidelabel"); }
		else { thislbl.parent().addClass("hidelabel"); };
		remainAmount = remainAmount % coins[i];
	}
}