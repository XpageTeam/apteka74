var slides = 4, resize_search_page = true, variable_width = false, goods_in_cat = 3;
$(window).on("resize", function(){
	if ($(window).width() < 1200){
		slides = 3;
		variable_width = true;
		goods_in_cat = 4;
		resize_search_page = false;
	}
});

$(window).on("load resize", function(){
	$(".inner_page #search").width($("#search").parent().width());
});

$(function(){
	// if ($("body").hasClass('admin'))
		$.smartbanner({
			title: "Областной аптечный склад",
			appStoreLanguage: "ru",
			button: "Установить",
			price: "",
			icon: "/local/templates/main/img/app-icon.png",
		});


	init_slick('.m_popular_products_cont_item:first-child .m_popular_products_carousel_one', '.m_popular_products_slide_one');
	// resize_slider('.m_popular_products_cont_item:first-child .m_popular_products_carousel_one .slick-track');


	$(".m_popular_products_slide_one .item_product_name").height(Math.max.apply(null, $(".m_popular_products_slide_one .item_product_name").map(function(){
		return $(this).height();
	})));

	$(".m_popular_products_slide_one .item_product_txt").height(Math.max.apply(null, $(".m_popular_products_slide_one .item_product_txt").map(function(){
		return $(this).height();
	})));
});

jQuery(document).ready(function() {

	$(".s_bl_menu").after($(".header_menu-forms").clone().addClass("js-moved"));

	if ($(window).width() < 1200){
		slides = 3;
		variable_width = true;
		goods_in_cat = 4;
		resize_search_page = false;
	}


	$(".bl_lk_zakaz_item_c_row > div").each(function(i, el){
		var $this = $(this);
		var index = $this.index(),
			$head = $this.closest(".bl_lk_zakaz_item_cont").find(".bl_lk_zakaz_item_c_head");

		$this.prepend("<div class='bl_lk_zakaz_item-hidden-title'>"+$head.find("div:eq("+index+")").text()+"</div>")

	});

	$('.bl_one_product_other_slide').slick({

		dots: false,

		infinite: true,

		speed: 600,

		slide: '.bl_product_other',

		slidesToShow: slides,

		adaptiveHeight: true,

		slidesToScroll: 1,

		touchMove: false,

		pauseOnHover: true,

		arrows: true,

		cssEase: 'linear',

		vertical: true,

		autoplay: true,

		variableWidth: variable_width,

		autoplaySpeed: 2000,
		//appendArrows: "<div class='arrows'><button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous" role="button"></button><button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button"></button></div>"
		responsive: [
			{
				breakpoint: 820,
				settings: {
					slidesToShow: 3,
					touchMove: true,
				}
			},
			
		]
	});

	

	$('.m_bl_banner_item_small_carousel').slick({

		dots: false,

		infinite: true,

		speed: 600,

		slide: '.m_bl_banner_item_small_slide',

		slidesToShow: 1,

		slidesToScroll: 1,

		touchMove: false,

		pauseOnHover: false,

		dots: true,

		arrows: false,

		fade: true,

		cssEase: 'linear',

		autoplay: true,

		autoplaySpeed: 2000,

		

	});


	/*$('.bl_one_product_container .m_bl_products_sales_new_cont_sale_carousel').slick({

		dots: false,

		infinite: true,

		speed: 600,

		slide: '.m_bl_products_sales_new_cont_sale_slide',

		slidesToShow: slides,

		variableWidth: variable_width,

		slidesToScroll: 1,

		touchMove: false,

		pauseOnHover: false,

		dots: false,

		autoplay: true,

		autoplaySpeed: 2000	

		

	});

	resize_slider(".bl_one_product_container .m_bl_products_sales_new_cont_sale_carousel .slick-track");	
	*/
	

	$('.m_bl_banner_item_big_carousel').slick({

		dots: false,

		infinite: true,

		speed: 600,

		slide: '.m_bl_banner_item_big_slide',

		slidesToShow: 1,

		slidesToScroll: 1,

		touchMove: false,

		pauseOnHover: false,

		dots: true,

		arrows: false,

		fade: true,

		cssEase: 'linear',

		autoplay: true,

		autoplaySpeed: 4000,

		

	});

	/*$('.m_bl_products_sales_new_cont_sale_carousel').slick({

		dots: false,

		infinite: true,

		speed: 600,

		slide: '.m_bl_products_sales_new_cont_sale_slide',

		slidesToShow: 4,

		slidesToScroll: 1,

		touchMove: false,

		pauseOnHover: false,

		dots: false,

		autoplay: true,

		autoplaySpeed: 2000,

		

	});*/

	//resize_slider('.m_bl_products_sales_new_cont_sale_carousel .slick-track');

	
	init_slick('.m_bl_products_sales_new_cont .active .m_bl_products_sales_new_cont_sale_carousel', 'div');
	resize_slider('.m_bl_products_sales_new_cont .active .slick-track');


	$('.s_btn_sale').on('click', function(){
		if($(this).hasClass('active'))
			return false;

		$(".m_bl_products_sale_href").addClass("active");
		$(".m_bl_products_new_href").removeClass("active");

		$(this).addClass('active');
		$('.s_btn_new').removeClass('active');

		$('.m_bl_products_sales_new_cont_sale').addClass('active');
		$('.m_bl_products_sales_new_cont_new').removeClass('active');

		$(".m_bl_products_sales_new_cont_new .slick-initialized").slick("unslick");
		init_slick('.m_bl_products_sales_new_cont_sale .m_bl_products_sales_new_cont_sale_carousel', '.m_bl_products_sales_new_cont_sale_slide');

		resize_slider(".m_bl_products_sales_new_cont_sale_carousel .slick-track");
	});

	$('.s_btn_new').on('click', function(){
		if($(this).hasClass('active'))
			return false;

		$(".m_bl_products_sale_href").removeClass("active");
		$(".m_bl_products_new_href").addClass("active");

		$(this).addClass('active');
		$('.s_btn_sale').removeClass('active');

		$('.m_bl_products_sales_new_cont_sale').removeClass('active');
		$('.m_bl_products_sales_new_cont_new').addClass('active');

		$(".m_bl_products_sales_new_cont_sale .slick-initialized").slick("unslick");
		init_slick('.m_bl_products_sales_new_cont_new .m_bl_products_sales_new_cont_sale_carousel', '.m_bl_products_sales_new_cont_sale_slide');
		resize_slider(".m_bl_products_sales_new_cont_sale_carousel .slick-track");
	});

	

	

	$('.bl_one_product_descr_head').on('click', function(){
		$(this).toggleClass('active');
		$('.bl_one_product_descr_cont').slideToggle();
	});

	
/*
$(document).on('mouseenter', '.h_link_basket, .bl_popup', function(){

		$('#main').addClass('popup_active');

		}).on('mouseleave', function(){

		$('#main').removeClass('popup_active');

		});
        */
if ($(window).width() >= 800){
	$(document).on('mouseenter', '.h_link_basket, .bl_popup', function(){

		if (+$(".h_link_basket span").html() == 0)
			return false;

		$('#main').addClass('popup_active');

		$(".bl_popup").css({left: $(".header_menu .center").offset().left})

	});

	$(document).on('mouseleave', '.h_link_basket, .bl_popup', function(){

		$('#main').removeClass('popup_active');

	});

}	

	$('.span_for_hide, .span_for_show').on('click', function(){

		

		$(this).parent().toggleClass('active');

		$(this).parent().prev('.bl_lk_zakaz_item_c_rows_hide').slideToggle();

		

		

	});

	

	

	$('.bl_articles_images_carousel').slick({

		dots: false,

		infinite: true,

		speed: 600,

		slide: '.bl_articles_images_slide',

		slidesToShow: 1,

		slidesToScroll: 1,

		touchMove: false,

		pauseOnHover: false,

		dots: false,

		

	});

	
$("header").on("click", ".h_city", function(){
	var $this = $(this);

	if ($this.hasClass("locked"))
		return false;

	$this.toggleClass("opened");

	$this.children(".h_city_list").slideToggle(500);

	if (!$this.hasClass("paned")){
		$this.addClass("paned");
		setTimeout(function(){
			$this.children(".h_city_list").jScrollPane();
			$("header").on("click", ".h_city .jspVerticalBar", function(){
				$(".h_city").addClass("locked");
				setTimeout(function(){
					$(".h_city").removeClass("locked");
				}, 10)
			});
		}, 500)
	}
});

$(".m_popular_products_head_cats span").on("click", function(){
	if ($(this).hasClass("active"))
		return false;

	//var $slick = $(".m_popular_products_container .slick-initialized");

	//$slick.slick("unslick");

	$(".m_popular_products_container .slick-initialized").slick("unslick");

	$(".m_popular_products_head_cats span.active").removeClass("active");
	$(this).addClass("active");

	$(".m_popular_products_container .active").removeClass("active");
	$(".m_popular_products_container #"+$(this).attr("data-view-id")).addClass("active");

	init_slick(".m_popular_products_container #"+$(this).attr("data-view-id")+" .m_popular_products_carousel_one", '.m_popular_products_slide_one');

	// resize_slider(".m_popular_products_container #"+$(this).attr("data-view-id")+" .m_popular_products_carousel_one .slick-track");
});

$(".left_catalog").on("click", function(){
	$(this).children(".left_catalog_c").slideToggle(500);
});

$(window).resize(function(){
	resize_search();
});

$("#popup_lk_enter .radio input").click(function(){
	$(window).resize();
});


//$(".fancybox").fancybox({
	//autoHeight : true,
	//autoResize: true
//});

$('.fancybox').fancybox({
    autoHeight : true,
	autoResize: true,
    beforeShow : function(){
        $('body').addClass('fancybox-active');
    },
    afterClose : function(){
        $('body').removeClass('fancybox-active');
    },
});
    

setTimeout(function(){

	if (!$(".search-page").length)
		resize_catalog_item();
	else
		resize_search_catalog_item();

}, 50)

$("#catalog-filter-form .hl_filter_item_htoggler a").click(function(){
	var $prev = $(this).parent("div").prev(".l_filter_item_cont_items");

	$(this).parent("div").children("a").fadeToggle(500);

	$prev.children(".f_checkbox:nth-child(n+6)").slideToggle(500);
});

$(".h_bl_search form > i, .bl_search_pole > i").click(function(){
	//var $this = $(this);

	//$this.closest("div").find("input[type=text]").val("");
    $('#title-search-input').val('');
    $('.title-search-result').css('display', 'none');
    $('body').removeClass('show-search-results');
});

if ($(".search-page").length && resize_search_page){
	$(".page_wr").css({"min-height": $(window).height() + "px"});
}

});

function resize_catalog_item(){
	var title_max_height = 0, 
		max_text_height = 0;

	$(".catalog_cont_products .catalog_c_item:nth-child("+goods_in_cat+"n + 1)").each(function(i, el){
		var $item = $(this).children(".item_product"), 
			$next_1 = $(this).next(".catalog_c_item").children(".item_product"), 
			$next_2 = $(this).next(".catalog_c_item").next(".catalog_c_item").children(".item_product");

		var title_height = [$item.children(".item_product_name").height(), 
						 ($next_1.children(".item_product_name").height() ? $next_1.children(".item_product_name").height() : $item.children(".item_product_name").height()), 
						  ($next_2.children(".item_product_name").height() ? $next_2.children(".item_product_name").height() : $item.children(".item_product_name").height())
						 ].sort(function(a, b){return a - b}),
			text_height = [$item.children(".item_product_txt").height(), 
							($next_1.children(".item_product_txt").height() ? $next_1.children(".item_product_txt").height() : $item.children(".item_product_txt").height()), 
							($next_2.children(".item_product_txt").height() ? $next_2.children(".item_product_txt").height() : $item.children(".item_product_txt").height())
						  ].sort(function(a, b){return a - b});

		$item.children(".item_product_name").height(title_height[2]);
		$next_1.children(".item_product_name").height(title_height[2]);
		$next_2.children(".item_product_name").height(title_height[2]);

		$item.children(".item_product_txt").height(text_height[2]);
		$next_1.children(".item_product_txt").height(text_height[2]);
		$next_2.children(".item_product_txt").height(text_height[2]);
	});
		
}

function resize_search_catalog_item(){
	var title_max_height = 0, 
		max_text_height = 0;

	$(".search-page .catalog_cont_row > div .catalog_c_item:nth-child("+goods_in_cat+"n+1)").each(function(i, el){
		var $item = $(this).children(".item_product"), 
			$next_1 = $(this).next(".catalog_c_item").children(".item_product"), 
			$next_2 = $(this).next(".catalog_c_item").next(".catalog_c_item").children(".item_product");
			$next_3 = $(this).next(".catalog_c_item").next(".catalog_c_item").next(".catalog_c_item").children(".item_product");


		var title_height = [$item.children(".item_product_name").height(), 
						  ($next_1.children(".item_product_name").height() ? $next_1.children(".item_product_name").height() : $item.children(".item_product_name").height()), 
						  ($next_2.children(".item_product_name").height() ? $next_2.children(".item_product_name").height() : $item.children(".item_product_name").height()), 
						  ($next_3.children(".item_product_name").height() ? $next_3.children(".item_product_name").height() : $item.children(".item_product_name").height())
						  ].sort(function(a, b){return a - b}),
			text_height = [$item.children(".item_product_txt").height(), 
							($next_1.children(".item_product_txt").height() ? $next_1.children(".item_product_txt").height() : $item.children(".item_product_txt").height()), 
							($next_2.children(".item_product_txt").height() ? $next_2.children(".item_product_txt").height() : $item.children(".item_product_txt").height()), 
							($next_3.children(".item_product_txt").height() ? $next_3.children(".item_product_txt").height() : $item.children(".item_product_txt").height())
						  ].sort(function(a, b){return a - b});


		$item.children(".item_product_name").height(title_height[3]);
		$next_1.children(".item_product_name").height(title_height[3]);
		$next_2.children(".item_product_name").height(title_height[3]);
		$next_3.children(".item_product_name").height(title_height[3]);

		$item.children(".item_product_txt").height(text_height[3]);
		$next_1.children(".item_product_txt").height(text_height[3]);
		$next_2.children(".item_product_txt").height(text_height[3]);
		$next_3.children(".item_product_txt").height(text_height[3]);
	});
		
}

function resize_search(){
	$(".h_bl_search #search").width($(".h_bl_search form").width());
}



$(window).on("scroll load", function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 20) {
        $('.inner_page header').addClass('scroll_header');
        //$(".bl_popup.inner_bl_popup").css({top: "7px"});
    } else {
        $('.inner_page header').removeClass('scroll_header');
        $(".bl_popup.inner_bl_popup").css({top: "50px"});
    }
});



$( document ).ready(function() {
  var hamburger = $('#hamburger-icon');
  hamburger.click(function() {
	 hamburger.toggleClass('active');
	 $('#main').toggleClass('sidebar_active')
	 return false;
  });


});

$(document).on('click', '.btn-discleimer, .close-button', function(){
    $('body').removeClass('discleimer-open');
    Cookies.set('DISCLEIMER-SHOWED', true, { expires: 7 });
});

if (window.frameCacheVars !== undefined) 
{
    BX.addCustomEvent("onFrameDataReceived" , function(json) {
        var userDevice = $('#userDevice').data('user-device');
        init_slick('.m_popular_products_cont_item.active .m_popular_products_carousel_one', '.m_popular_products_slide_one');
    	// resize_slider('.m_popular_products_cont_item.active .m_popular_products_carousel_one .slick-track');
    
    	init_slick('.m_bl_products_sales_new_cont .active .m_bl_products_sales_new_cont_sale_carousel', 'div');
    	resize_slider('.m_bl_products_sales_new_cont .active .slick-track');

    	$(".item_product_name").each(function(){
    		var $this = $(this);
    		if ($this.width() < $this.find("a").width()) $this.find("a").css({"word-break": "break-word"})
    	});

    	resize_search();
    	resize_search_catalog_item();
    	resize_catalog_item();

    	$(window).on("resize", function(){
    		resize_search();
	    	resize_search_catalog_item();
	    	resize_catalog_item();
    	});    	
        
        var countElementCart = $('#h_link_basket-count').val();
        if(typeof(countElementCart) != 'undefined')
            $('.h_link_basket > span').replaceWith('<span>'+countElementCart+'</span>');
        else
            $('.h_link_basket > span').replaceWith('<span>0</span>');
    });
}else{
    BX.ready(function() {
        var userDevice = $('#userDevice').data('user-device');
        var countElementCart = $('#h_link_basket-count').val();
        if(typeof(countElementCart) != 'undefined')
            $('.h_link_basket > span').replaceWith('<span>'+countElementCart+'</span>');
        else
            $('.h_link_basket > span').replaceWith('<span>0</span>');
    });
}

/**
* Функция изменения высоты слайдера
* Принимает строку или объект JQuery
*/
function resize_slider(obj){
	$(obj).each(function(i,el){
		var title_max_height = 0, 
			max_text_height = 0,
			count = $(this).children(".slick-slide").length, 
			children = $(this).children(".slick-slide");

		$(this).children(".slick-slide").each(function(i, el){
			if ($(this).children(".item_product").children(".item_product_name").height() > title_max_height)
				title_max_height = $(this).children(".item_product").children(".item_product_name").height();

			if ($(this).children(".item_product").children(".item_product_txt").height() > max_text_height)
				max_text_height = $(this).children(".item_product").children(".item_product_txt").height();

			if (count-1 == i){
				children.children(".item_product").children(".item_product_name").height(title_max_height);
				children.children(".item_product").children(".item_product_txt").height(max_text_height);
			}
		});
	});
}

/**
* Функция, инициализирующая слик для нужного блока
* Принимает объекст JQuery или строку (obj) - слайдер, строку (_slide) - слайд
*/
function init_slick(obj, _slide){
	$(obj).slick({
		speed: 600,
		slide: _slide,
		// slidesToShow: slides,
		slidesToShow: 4,
		slidesToScroll: 1,
		// variableWidth: variable_width,
		touchMove: false,
		pauseOnHover: false,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 660,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
}
setInterval(function(){
	$(".popup_basket_product .p_bsket_product_status").each(function(){
		$(this).find("img").each(function(){
			var $this = $(this);

			switch ($this.attr("alt")){
				case "по рецепту":

					$this.parent().append("<div class='item_label_recept'><div>"+$this.attr("data-title")+"</div></div>");
				break;

				case "под заказ":
					$this.parent().append("<div class='item_label_time'><div>"+$this.attr("data-title")+"</div></div>");
			}

			$this.remove();
		})
	})
}, 100);


var poll;

$(function(){

	/** Баннер чат-бота*/
	if (Cookies.get("AdminBanner") == 1 /*|| Cookies.get("chatBotBannerShowed") != "true" */)
		showBanner("#chatBotBanner", "chatBotBannerShowed")
	/*!* Баннер чат-бота !*/

	$(".chatBotBanner-btn, .app-btns").click(function(){
		$.fancybox.close();
	});

	/**Опрос*/
    /*
	if (Cookies.get("AdminPool") == 1){
		if ($("#poll").length){
			$.fancybox({
				href: "#poll-popup"
			});
            
			Vue.component("poll-template", {
				props: {
					variants: {
						type: Array,
						default: []
					},
					viewMethod: {
						type: String,
						default: "list"
					},
					curVariant: {
						type: String,
						default: null
					}
				},
				data: function(){ 
					return {
						viewMethodText: "",
						totalVots: 0,
						votes: 0 + "голосов",
					}
				},
				mounted: function(){
					$(".poll-btns .btn--reverse").click(function(){
						$.fancybox.close();
					});

					if (this.viewMethod == "list")
						this.viewMethodText = "Смотреть результаты";
					else if (this.viewMethod == "results")
						this.viewMethodText = "Перейти к голосованию";

					for (var i in this.sortedVariants){
						var variant = this.sortedVariants[i];
						this.totalVots += variant.count;
					}

					this.buildWord();
				},
				update: function(){
					// console.log(this);
				},
				computed: {
					sortedVariants: function(){
						return this.variants.sort(function(a, b){
							var compA = parseInt(a),
									compB = parseInt(b);

							return (compA < compB) ? -1 : (compA > compB) ? 1 : 0
						});
					}
				},
				methods: {
					changeViewMethod: function(){
						this.viewMethod = (this.viewMethod == "list" ? "results" : "list");
						this.viewMethodText = (this.viewMethodText == "Смотреть результаты" ? "Перейти к голосованию" : "Смотреть результаты");

						$.fancybox.update();

						return false;
					},
					calcWidth: function(count){
						return "width: "+this.getPersents(count)+"; "
					},
					getPersents: function(count){
						return (count / this.totalVots * 100).toFixed(2) + "%";
					},
					buildWord: function(){
						var word = "голос", end = "", 
							tmpVotes = this.totalVots+"";

						switch (tmpVotes[tmpVotes.length - 1]){
							case "2":
							case "3":
							case "4":
								end = "а";

							break;
							case "0":
							case "5":
							case "6":
							case "7":
							case "8":
							case "9":
								end = "ов";
						}

						this.votes = this.totalVots + " "+word+end;
					}
				}
			});

			poll = new Vue({
				el: "#poll",
				mounted: function(){
					console.log("poll mounted");
				}
			});
            
		}
	}
    */
	/**!Опрос!*/

});


//крыл 16.04
// плохо "крыто": функция закомментирована, а вызов - нет
// в итоге в консоли: showBanner is no defined

function showBanner(id, cookieName){
	// $.fancybox({
	// 	href: id,
	// 	beforeShow: function(){
	// 		$('body').addClass('fancybox-active');
	// 		$("body").addClass("js-chatBotBanner-show");
	// 	},
	// 	afterClose: function(){
	// 		$("body").removeClass("fancybox-active");
	// 		$("body").removeClass("js-chatBotBanner-show");
	// 		Cookies.set(cookieName, true, {expires: 1});
	// 	}
	// });
}

var userDevice = "desktop";

if (window.frameCacheVars !== undefined){
	BX.addCustomEvent("onFrameDataReceived" , function(json) {
		userDevice = Cookies.get("BITRIX_SM_USER_DEVICE") || "desktop";

		$("body").addClass(userDevice);

		// mobileBanner()
	})
}else{
	BX.ready(function(){
		userDevice = Cookies.get("BITRIX_SM_USER_DEVICE") || "desktop";

		$("body").addClass(userDevice);

		// mobileBanner()
	})
}

function mobileBanner(){

	/** Баннер приложения */
	if (Cookies.get("AdminAppBanner") == 1 
		|| Cookies.get("appBotBannerShowed") != "true" 
		&& !Cookies.get("AdminPool")
		&& (!$("body").hasClass("mobile"))
		&& $("#appBanner").length)
		showBanner("#appBanner", "appBotBannerShowed")
	/** !Баннер приложения! */
	
	$(".new-banner").click(function(){
		$.fancybox.close();
	})
	
	if ($("body").hasClass("mobile") && !Cookies.get("mobileBannerShowed")){
		$.fancybox({
			href: "#appBanner",
			// closeBtn: false,
			beforeShow: function(){
				$('body').addClass('fancybox-active').addClass("app-banner");
			},
			afterClose: function(){
				$("body").removeClass("fancybox-active").removeClass("app-banner");
				Cookies.set("mobileBannerShowed", 1, {
					expires: 1
				});

				$(".m_popular_products_slide_one .item_product_name, .m_popular_products_slide_one .item_product_txt").removeAttr("style");

				setTimeout(function(){
					$(".m_popular_products_slide_one .item_product_name").height(Math.max.apply(null, $(".m_popular_products_slide_one .item_product_name").map(function(){
						return $(this).height();
					})));

					$(".m_popular_products_slide_one .item_product_txt").height(Math.max.apply(null, $(".m_popular_products_slide_one .item_product_txt").map(function(){
						return $(this).height();
					})));
				}, 2000)
			}
		});

		$(".mobile-banner__close").click(function(){
			$.fancybox.close();
		})
	}
}