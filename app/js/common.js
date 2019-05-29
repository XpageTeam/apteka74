'use strict';

$(function () {

	$('.faq__item-title').click(function () {

		var $this = $(this);

		if ($this.closest('.faq__item').hasClass("js__open")) {
			$('.faq__item-info').slideUp(300);
			$('.faq__item').removeClass('js__open');
		} else {
			$('.faq__item-info').slideUp(300);
			$('.faq__item').removeClass('js__open');
			$this.next('.faq__item-info').slideDown(300).closest('.faq__item').addClass('js__open');
		}
	});

	$('.basket-delivery__top .radio__input').click(function () {

		var $this = $(this);

		$('.radio').each(function (i, el) {
			var $this = $(el);

			$this.removeClass('selected');
		});

		if ($this.prop("checked")) {
			$this.closest('.radio').addClass('selected');
		}
	});

	$(".bl_one_product_descr_cont, .bl_one_product_descr_cont_1").each(function (i, el) {
		var $this = $(el);

		if ($this.find(".text-page").length) return;

		$this.html('<div class="text-page">' + $this.html() + '</div>');
	});

	$(".bl_one_product_descr_cont, .bl_one_product_descr_cont_1").each(function (i, el) {
		var $this = $(el),
		    text = $this.text();

		var anotherSplitedText = text.split(new RegExp(/\n/));

		$this.text("");

		var tmpText = "",
		    isUlOpened = false;

		for (var _i = 0; _i < anotherSplitedText.length; _i++) {
			var abz = anotherSplitedText[_i];

			var link = abz.match(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/) ? abz.match(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/).input : false;

			if (link) {
				var links = link.split(" ");

				for (var j = 0; j < links.length; j++) {
					abz = abz.replace(links[j], "<a href='" + links[j] + "'>" + links[j] + "</a>");
				}
			}

			if (abz.match(new RegExp(/^-|• .*/))) {
				if (!isUlOpened) {
					tmpText += "<ul>";
					isUlOpened = true;
				}

				abz = abz.replace(/^-|• /, "");

				tmpText += "<li>" + abz + "</li>";
			} else {
				if (isUlOpened) {
					isUlOpened = false;
					tmpText += "</ul>";
				}

				tmpText += "<p>" + abz + "</p>";
			}
		}

		$this.html(tmpText);
	});
});
//# sourceMappingURL=common.js.map
