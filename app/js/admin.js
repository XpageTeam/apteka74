// подключается в init.php в BeforeProplog
$(function(){
    $(document).on('submit', 'form', function(e){
        if (
            $(this).find('[name="ORDER[RESPONSIBLE_ID]"]').length &&
            !+$(this).find('[name="ORDER[RESPONSIBLE_ID]"]').val()
        ) {
            e.preventDefault();
            e.stopPropagation();
            alert("Укажите ответственное лицо!");
            setTimeout(
                function(){
                    $('.adm-btn-load').removeAttr('disabled');
                    $('.adm-btn-load').removeClass('adm-btn-load');
                    $('.adm-btn-load-img-green, .adm-btn-load-img').remove();
                },
                500
            );
            return false;
        }
    });
    if ($('#save_status_button').length) {
        var onclickStr = $('#save_status_button').attr('onclick');
        $('#save_status_button').attr('onclick2', onclickStr);
        $('#save_status_button').attr('onclick', 'xpageOnSaveStatusButton(this)');
    }
})

function xpageOnSaveStatusButton (el)
{
    var isResponsibleId = !!$('#order_additional_info_responsible').text().trim();
    if (!isResponsibleId) {
        alert("Укажите ответственное лицо!");
    }
    else if($(el).attr('onclick2')) {
        eval($(el).attr('onclick2'));
    }
}
