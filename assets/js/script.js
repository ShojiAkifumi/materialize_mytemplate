
$('.collapsible').collapsible();

$(".dropdown-trigger").dropdown({ 'coverTrigger': false });

$('.sidenav').sidenav();

//***************** header **********************/
$('.slider').slider();

function toasts() {
    const toast = '<i class="small material-icons">sentiment_very_satisfied</i>画像を押しましたね？';
    M.toast({html:toast});
}

$('.datepicker').datepicker();

$('.timepicker').timepicker();

function OutputForm() {
    let formValue = 'お名前：' + document.getElementById("name").value + '<br>';
    formValue += '連絡先：' + document.getElementById("tel").value + '<br>';
    formValue += 'メール：' + document.getElementById("email").value + '<br>';
    formValue += '送信はしていません';
    M.toast({html:formValue});
}