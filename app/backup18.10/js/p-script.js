/* start HEADER MESSAGE */

function showHeaderMessage(message, status, delay) {

	window.hideHeaderMessageTimer = null;

	clearTimeout(window.hideHeaderMessageTimer);
	if (typeof(window.headerMessageTimer) != 'undefined' && window.headerMessageTimer !== null) {
		return;
	}
	if (!message) {
		return;
	}
	if (!status) {
		status = 'success';
	}
	messageClass = 'at_ok';
	if (status == 'success') {
		messageClass = 'at_ok';
	} else if (status == 'error' || status == 'at_error') {
		messageClass = 'at_error';
	}
	if (!delay) {
		delay = 2000;
	}
	$('.top-line-message-box').addClass(messageClass);
	$('.top-line-message-box .top-line-message-box-text').html(message);
	clearTimeout(window.headerMessageTimer);

	window.headerMessageTimer = setTimeout(function(){hideHeaderMessage();}, delay);
}

function hideHeaderMessage() {
	$('.top-line-message-box').removeClass(messageClass);
	$('.top-line-message-box .top-line-message-box-text').html("");
	clearTimeout(window.headerMessageTimer);
	window.headerMessageTimer = null;
} /* end HEADER MESSAGE */
/* start BASKET UPDATE */

function updateBasketLine(productInfo) {
	data = {};
	arProductInfo = [];
	if (Array.isArray(productInfo)) {
		arProductInfo = productInfo;
	} else {
		arProductInfo.push(productInfo);
	}
	data['ajax_command'] = 'update_basketline';
	data['PRODUCT'] = arProductInfo;
	$.ajax({
		url: '/local/php_interface/ajax/',
		type: 'post',
		data: data,
		dataType: "json",
		success: function(response) {
			if (typeof(response.bl_popup) != 'undefined') {
				$('.bl_popup').replaceWith(response.bl_popup);
                var countElementCart = $('#h_link_basket-count').val();
                if(typeof(countElementCart) != 'undefined')
                    $('.h_link_basket > span').replaceWith('<span>'+countElementCart+'</span>');
                else
                    $('.h_link_basket > span').replaceWith('<span>0</span>');
			}
		},
		error: function() {
			console.log("updateBasketLine() error");
		}
	});
} /* end BASKET UPDATE */
$(function() {
    /* start QUANTITY */
	$(document).on('click', '.bl_p_count .btn_ico_minus, .bl_p_count .btn_ico_plus, .product_count .product_count_minus, .product_count .product_count_plus', function(e) {
		var $input = $(this).closest('.product_add_to_cart_form').find('input[type="text"]');
		var input_val = parseFloat($input.val());
		var step = 1;
		if ($(this).is('btn_ico_plus, .product_count_plus')) {
			input_val += step;
		}
		if ($(this).is('btn_ico_minus, .product_count_minus')) {
			input_val -= step;
		}
		if (input_val <= 0) {
			input_val = 1;
		}
		$input.val(input_val);
		$input.trigger('change');
	}); /* end QUANTITY */

    $(document).on('change', 'input[name="QUANTITY"]', function(){
        var input_val = parseFloat($(this).val());
        var input_max = parseFloat($(this).attr('max'));
        if (input_max){
            if (input_val > input_max){
                input_val = input_max;
                //$(this).closest('.product').addClass('product--amount-limit');
                $(this).val(input_val);
                showHeaderMessage('Достигнуто предельное количество', 'at_error');
            }else{
                //$(this).closest('.product').removeClass('product--amount-limit');
            }
        }
    });

	/* start BASKET ADD */
	$(document).on('click', '.btn_basket', function(e) {
		$(this).closest('.bl_one_product_d_top_buy_btns').find('form').trigger('submit');
	});
	$(document).on('click', '.link_to_basket', function(e) {
		$(this).closest('.item_product_btns').find('form').trigger('submit');
	});
    /*
	$('.product_add_to_cart_form').submit(function(e) {
	   console.log('add to basket');
		e.preventDefault();
		max_quantity = $(this).find('input[name="QUANTITY"]').attr('max');
        if(max_quantity != 0){
            product_id = $(this).find('input[name="PRODUCT_ID"]').val();
            quantity = $(this).find('input[name="QUANTITY"]').val();

            obProductInfo = {
    			product_id: product_id,
    			quantity: quantity,
    		};
    		Add2BasketByProductID(obProductInfo);
        }else{
            showHeaderMessage('Товара нет в наличии, его нельзя добавить в корзину', 'at_error');
        }
	});
    */

	 /* end BASKET ADD */
    $(document).on('change', '#catalog_top_filter_form select', function(e) {
		$('#catalog_top_filter_form input[type="submit"]').click();
	});
});
jQuery(document).ready(function($) {});

$(document).on("click", function(){
    $(function() {
		$('[name="REGISTER[PERSONAL_PHONE]"], [name="PERSONAL_PHONE"], [name="ORDER_PROP_3"], [type="phone"], input.phone').inputmask('+7 (999) 999-99-99');
	});
});

$(function(e){
	//$('#catalog_top_filter_form select').change(function(e){
		//$('#catalog_top_filter_form input[type="submit"]').click();
	//});

	if($('.catalog_container .catalog_product_item').length) {
		$('.catalog_top_filter').removeClass('hidden');
	}
});

$(document).ready(function(){$("a#href_privacy").fancybox();});

$(document).on('submit', '.product_add_to_cart_form', function(e){
    //$('body').addClass('f_cursor_wait');
    //console.log('add to basket');
	e.preventDefault();
	max_quantity = $(this).find('input[name="QUANTITY"]').attr('max');
    if(max_quantity != 0){
        product_id = $(this).find('input[name="PRODUCT_ID"]').val();
        quantity = $(this).find('input[name="QUANTITY"]').val();

        obProductInfo = {
			product_id: product_id,
			quantity: quantity,
		};
		Add2BasketByProductID(obProductInfo);
        //$('body').removeClass('f_cursor_wait');
    }else{
        showHeaderMessage('Товара нет в наличии, его нельзя добавить в корзину', 'at_error');
        //$('body').removeClass('f_cursor_wait');
    }
});

function Add2BasketByProductID(productInfo) {
	data = {};
	arProductInfo = [];
	if (Array.isArray(productInfo)) {
		arProductInfo = productInfo;
	} else {
		arProductInfo.push(productInfo);
	}
	data['ajax_command'] = 'addtocart';
	data['PRODUCT'] = arProductInfo;
	$.ajax({
		url: '/local/php_interface/ajax/',
		type: 'post',
		data: data,
        dataType : 'json',
		success: function(response) {
			updateBasketLine();
            showHeaderMessage(response.message, response.message_type);
            /*
            var priceTotal = $('.basket_total_price').html();
            priceTotal = parseFloat(priceTotal);
            if(priceTotal < 500)
            {
                var text
            }
            console.log(priceTotal);
            */

		},
		//error: function() {
			//showHeaderMessage('Возникла ошибка. Попробуйте еще раз!', "error");
		//},
	});
}
//проверка полей формы
$(document).on('focus', '.input--phone', function(){$(this).inputmask('+7 (999) 999-99-99');});
function checkForm(formName){
    var formValid = true;
    var parentDiv = $('form[name='+formName+']').parent('div');

    $('form[name='+formName+']').find(':input').each(function(){
        if(this.checkValidity()){
            //$(this).siblings(".forms__error-message").html('&nbsp;');
            //$(this).siblings(".forms__error-message").css("display", "none");
            $(this).removeClass('forms__input_error');
            $(this).closest('.form_row').removeClass('error');
        }else{
            var errorMessage = '';
            var inputValue = $(this).val();
            if(inputValue == '')
                errorMessage = 'Обязательное поле';
            else
                errorMessage = 'Поле заполнено неправильно';
            $(this).addClass('forms__input_error');
            $(this).closest('.form_row').addClass('error');
            //$(this).siblings(".forms__error-message").html(errorMessage+'<i class="forms__error-message-icon"></i>');
            //$(this).siblings(".forms__error-message").css("display", "block");
            formValid = false;
        }
    });
    if(formValid){
        parentDiv.addClass('f_cursor_wait');
        parentDiv.find(':input').each(function(){$(this).attr('readonly', 'readonly');});
        parentDiv.find('input[type="submit"]').each(function(){$(this).addClass('disabled');});
        parentDiv.find('input[type="submit"]').each(function(){$(this).attr('onclick', 'return false;');});
        BX.addCustomEvent('onAjaxSuccess', function(){parentDiv.removeClass('f_cursor_wait');});
        yaCounter20887588.reachGoal(formName);
        return true;
    }else{
        return false;
    }
}
