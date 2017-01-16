$(function () {
	resetcalc();
	$('#total').on("change", function () {
		if ($('#total').val() < 1 || $('#total').val() > 99)
			{ resetcalc() } else { $('#calc').prop('disabled', false); }
	});
	$('#calc').click(function () {
		CoinsCalc($('#total').val())
	})
});