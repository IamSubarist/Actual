function addTag(open, close) {
	var control = $('#control')[0];
	var start = control.selectionStart;
	var end = control.selectionEnd;
	if (start != end) {
		var text = $(control).val();
		$(control).val(text.substring(0, start) + open + text.substring(start, end) + close + text.substring(end));
		$(control).focus();
		var sel = end + (open + close).length;
		control.setSelectionRange(sel, sel);
	}
	return false;
}
 
// Жирный
$('#button-b').click(function(){
	return addTag('<b>', '</b>');
});
 
// Курсив
$('#button-i').click(function(){
	return addTag('<i>', '</i>');
});
 
// Подчеркнутый
$('#button-u').click(function(){
	return addTag('<u>', '</u>');
});
 
// Зачеркнутый
$('#button-s').click(function(){
	return addTag('<strike>', '</strike>');
});
 
// Ссылка
$('#button-a').click(function(){
	return addTag('<a href="' + prompt('Введите адрес', '') + '">', '</a>');
});
 
// При клике на кнопки не снимаем фокус с textarea.
$('a').on('mousedown', function() {
	return false;
});