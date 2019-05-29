<?
//$_SESSION["SELECTED_CITY"]["NAME_CITY_IN_CONTACT"]
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("description", "Интернет-аптека «Областного аптечного склада» — это быстро, выгодно и надежно! Оформите заказ через форму на сайте.");
$APPLICATION->SetPageProperty("title", "Интернет-аптека «Областной аптечный склад» в Челябинске");
$APPLICATION->SetPageProperty("keywords", "интернет аптека");
$APPLICATION->SetTitle("Интернет аптека, заказать и купить лекарства в онлайн аптеке с доставкой на дом");
$GLOBALS['CITY_FILTER'] = array("PROPERTY_LINK_CITY" => $_SESSION["SELECTED_CITY"]["ID"]);
?><div class="main_grey_wrap">
	<?$APPLICATION->IncludeComponent(
	"bitrix:search.title", 
	"xpage_search_title", 
	array(
		"NUM_CATEGORIES" => "2",
		"TOP_COUNT" => "500",
		"CHECK_DATES" => "N",
		"SHOW_OTHERS" => "N",
		"PAGE" => SITE_DIR."catalog/",
		"CATEGORY_0_TITLE" => "Товары",
		"CATEGORY_0" => array(
			0 => "iblock_1c_catalog",
		),
		"CATEGORY_1_iblock_catalog" => array(
			0 => "all",
		),
		"CATEGORY_OTHERS_TITLE" => "Прочее",
		"SHOW_INPUT" => "Y",
		"INPUT_ID" => "title-search-input",
		"CONTAINER_ID" => "search",
		"PRICE_CODE" => array(
            $_SESSION['SELECTED_CITY']['PRICE'],
		),
		"SHOW_PREVIEW" => "Y",
		"PREVIEW_WIDTH" => "100",
		"PREVIEW_HEIGHT" => "100",
		"CONVERT_CURRENCY" => "Y",
		"COMPONENT_TEMPLATE" => "xpage_search_title",
		"ORDER" => "rank",
		"USE_LANGUAGE_GUESS" => "N",
		"PRICE_VAT_INCLUDE" => "Y",
		"PREVIEW_TRUNCATE_LEN" => "",
		"CURRENCY_ID" => "RUB",
		"COMPOSITE_FRAME_MODE" => "A",
		"COMPOSITE_FRAME_TYPE" => "AUTO",
		"CATEGORY_0_iblock_1c_catalog" => array(
			0 => "all",
		),
		"CATEGORY_1_TITLE" => "",
		"CATEGORY_1" => array(
		),
        "STORE_XML_ID" => $_SESSION["SELECTED_CITY"]["SOTORE_XML_ID"],
	),
	false
);?>
	<?global $USER; if($USER->IsAdmin()){?>
	  
		<div class="banner-top__cont">
			<div class="center">
				<div class="banner-top">
					<div class="banner">
						<div class="banner-top__info">
							<div class="banner-top__title">Каталог товаров</div>
							<div class="banner-top__text">В нашем каталоге представлен самый большой в городе ассортимент медицинских товаров и лекарств</div>
							<div class="banner-top__btn">
								<a href="#" class="btn">Перейти</a>
							</div>
						</div>
					</div>

					<div class="slider-top">
						<?
                        global $arrFilterSale;
                        $arrFilterSale[">CATALOG_STORE_AMOUNT_".$_SESSION["SELECTED_CITY"]["SOTORE_INFO"]["ID"]] = 0;
                        $arrFilterSale['!CATALOG_PRICE_'.$_SESSION["SELECTED_CITY"]["ID_PRICE"]] = false;
                        $arrFilterSale['PROPERTY_STORES_FOR_SALE'] = $_SESSION['SELECTED_CITY']['SOTORE_XML_ID'];
                        ?>
                        <?$APPLICATION->IncludeComponent(
                        	"bitrix:catalog.section",
                        	"main-sale",
                        	Array(
                        		"ACTION_VARIABLE" => "action",
                        		"ADD_PICT_PROP" => "-",
                        		"ADD_PROPERTIES_TO_BASKET" => "Y",
                        		"ADD_SECTIONS_CHAIN" => "N",
                        		"ADD_TO_BASKET_ACTION" => "ADD",
                        		"AJAX_MODE" => "N",
                        		"AJAX_OPTION_ADDITIONAL" => "",
                        		"AJAX_OPTION_HISTORY" => "N",
                        		"AJAX_OPTION_JUMP" => "N",
                        		"AJAX_OPTION_STYLE" => "N",
                        		"BACKGROUND_IMAGE" => "-",
                        		"BASKET_URL" => "/personal/basket.php",
                        		"BROWSER_TITLE" => "-",
                        		"CACHE_FILTER" => "Y",
                        		"CACHE_GROUPS" => "Y",
                        		"CACHE_TIME" => "36000000",
                        		"CACHE_TYPE" => "A",
                        		"COMPONENT_TEMPLATE" => "main-sale",
                        		"CONVERT_CURRENCY" => "N",
                        		"DETAIL_URL" => "",
                        		"DISABLE_INIT_JS_IN_COMPONENT" => "N",
                        		"DISPLAY_BOTTOM_PAGER" => "Y",
                        		"DISPLAY_TOP_PAGER" => "N",
                        		"ELEMENT_SORT_FIELD" => "shows",
                        		"ELEMENT_SORT_FIELD2" => "id",
                        		"ELEMENT_SORT_ORDER" => "desc",
                        		"ELEMENT_SORT_ORDER2" => "desc",
                        		"FILTER_NAME" => "arrFilterSale",
                        		"HIDE_NOT_AVAILABLE" => "Y",
                        		"IBLOCK_ID" => "7",
                        		"IBLOCK_TYPE" => "1c_catalog",
                        		"INCLUDE_SUBSECTIONS" => "Y",
                        		"LABEL_PROP" => "-",
                        		"LINE_ELEMENT_COUNT" => "4",
                        		"MESSAGE_404" => "",
                        		"MESS_BTN_ADD_TO_BASKET" => "В корзину",
                        		"MESS_BTN_BUY" => "Купить",
                        		"MESS_BTN_DETAIL" => "Подробнее",
                        		"MESS_BTN_SUBSCRIBE" => "Подписаться",
                        		"MESS_NOT_AVAILABLE" => "Нет в наличии",
                        		"META_DESCRIPTION" => "-",
                        		"META_KEYWORDS" => "-",
                        		"OFFERS_LIMIT" => "0",
                        		"PAGER_BASE_LINK_ENABLE" => "N",
                        		"PAGER_DESC_NUMBERING" => "N",
                        		"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
                        		"PAGER_SHOW_ALL" => "N",
                        		"PAGER_SHOW_ALWAYS" => "N",
                        		"PAGER_TEMPLATE" => ".default",
                        		"PAGER_TITLE" => "Товары",
                        		"PAGE_ELEMENT_COUNT" => "12",
                        		"PARTIAL_PRODUCT_PROPERTIES" => "N",
                        		"PRICE_CODE" => array(0 => $arParams["PRICE_CODE"] ? : $GLOBALS["PRICE_CODE"],),
                        		"PRICE_VAT_INCLUDE" => "N",
                        		"PRODUCT_ID_VARIABLE" => "id",
                        		"PRODUCT_PROPERTIES" => "",
                        		"PRODUCT_PROPS_VARIABLE" => "prop",
                        		"PRODUCT_QUANTITY_VARIABLE" => "count",
                        		"PRODUCT_SUBSCRIPTION" => "N",
                        		"PROPERTY_CODE" => array(0=>"",1=>"",),
                        		"SECTION_CODE" => "",
                        		"SECTION_ID" => "",
                        		"SECTION_ID_VARIABLE" => "SECTION_ID",
                        		"SECTION_URL" => "",
                        		"SECTION_USER_FIELDS" => array(0=>"",1=>"",),
                        		"SEF_MODE" => "N",
                        		"SET_BROWSER_TITLE" => "N",
                        		"SET_LAST_MODIFIED" => "N",
                        		"SET_META_DESCRIPTION" => "N",
                        		"SET_META_KEYWORDS" => "N",
                        		"SET_STATUS_404" => "N",
                        		"SET_TITLE" => "N",
                        		"SHOW_404" => "N",
                        		"SHOW_ALL_WO_SECTION" => "Y",
                        		"SHOW_CLOSE_POPUP" => "N",
                        		"SHOW_DISCOUNT_PERCENT" => "N",
                        		"SHOW_OLD_PRICE" => "N",
                        		"SHOW_PRICE_COUNT" => "1",
                        		"TEMPLATE_THEME" => "blue",
                        		"USE_MAIN_ELEMENT_SECTION" => "Y",
                        		"USE_PRICE_COUNT" => "N",
                        		"USE_PRODUCT_QUANTITY" => "Y",
                                "STORE_XML_ID" => $arParams["STORE_XML_ID"],
                        	)
                        );?>
					</div>
				
				</div>
			</div>
		</div>
			     

	<?}?>
    <div class="m_two_bls">
    	<div class="clearfix">
    		<div class="m_two_bl_item m_two_bl_item_catalog">
    			<div class="m_two_bl_item_cont">
    				<div class="m_two_bl_item_link">
    					<a href="/catalog/">Каталог товаров</a>
    				</div>
    				<p><?$APPLICATION->IncludeComponent("bitrix:main.include","",Array("AREA_FILE_SHOW" => "file","PATH" => SITE_DIR."/.inc/main_panel_our_catalog.php"));?></p>
    			</div>
    		</div>
    		<div class="m_two_bl_item m_two_bl_item_load">
    			<div class="m_two_bl_item_cont">
    				<div class="m_two_bl_item_link">
    					<a href="#popup_load_recept" class="fancybox">Загрузите рецепт</a>
    				</div>
                    <p><?$APPLICATION->IncludeComponent("bitrix:main.include","",Array("AREA_FILE_SHOW" => "file","PATH" => SITE_DIR."/.inc/main_recipe_upload.php"));?></p>
    			</div>
    		</div>
    	</div>
    </div>
    <div class="m_bl_banners">
    	<div class="center clearfix">
            <?$APPLICATION->IncludeComponent(
            	"bitrix:news.list",
            	"main-small-banners",
            	Array(
            		"ACTIVE_DATE_FORMAT" => "d.m.Y",
            		"ADD_SECTIONS_CHAIN" => "N",
            		"AJAX_MODE" => "N",
            		"AJAX_OPTION_ADDITIONAL" => "",
            		"AJAX_OPTION_HISTORY" => "N",
            		"AJAX_OPTION_JUMP" => "N",
            		"AJAX_OPTION_STYLE" => "N",
            		"CACHE_FILTER" => "Y",
            		"CACHE_GROUPS" => "N",
            		"CACHE_TIME" => "36000000",
            		"CACHE_TYPE" => "A",
            		"CHECK_DATES" => "Y",
            		"COMPONENT_TEMPLATE" => "main-small-banners",
            		"DETAIL_URL" => "",
            		"DISPLAY_BOTTOM_PAGER" => "N",
            		"DISPLAY_DATE" => "N",
            		"DISPLAY_NAME" => "N",
            		"DISPLAY_PICTURE" => "Y",
            		"DISPLAY_PREVIEW_TEXT" => "Y",
            		"DISPLAY_TOP_PAGER" => "N",
            		"FIELD_CODE" => array(0=>"",1=>"",),
            		"FILTER_NAME" => "CITY_FILTER",
            		"HIDE_LINK_WHEN_NO_DETAIL" => "N",
            		"IBLOCK_ID" => "20",
            		"IBLOCK_TYPE" => "services",
            		"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
            		"INCLUDE_SUBSECTIONS" => "N",
            		"MESSAGE_404" => "",
            		"NEWS_COUNT" => "3",
            		"PAGER_BASE_LINK_ENABLE" => "N",
            		"PAGER_DESC_NUMBERING" => "N",
            		"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
            		"PAGER_SHOW_ALL" => "N",
            		"PAGER_SHOW_ALWAYS" => "N",
            		"PAGER_TEMPLATE" => ".default",
            		"PAGER_TITLE" => "",
            		"PARENT_SECTION" => "800",
            		"PARENT_SECTION_CODE" => "",
            		"PREVIEW_TRUNCATE_LEN" => "",
            		"PROPERTY_CODE" => array(0=>"HREF",1=>"IMAGES",2=>"",),
            		"SET_BROWSER_TITLE" => "N",
            		"SET_LAST_MODIFIED" => "N",
            		"SET_META_DESCRIPTION" => "N",
            		"SET_META_KEYWORDS" => "N",
            		"SET_STATUS_404" => "N",
            		"SET_TITLE" => "N",
            		"SHOW_404" => "N",
            		"SORT_BY1" => "SORT",
            		"SORT_BY2" => "ID",
            		"SORT_ORDER1" => "ASC",
            		"SORT_ORDER2" => "ASC"
            	)
            );?>
            <?\Bitrix\Main\Page\Frame::getInstance()->startDynamicWithID("areaBigBanners");?>
            <?$APPLICATION->IncludeComponent(
            	"bitrix:news.list",
            	"main-big-banners",
            	Array(
            		"ACTIVE_DATE_FORMAT" => "d.m.Y",
            		"ADD_SECTIONS_CHAIN" => "N",
            		"AJAX_MODE" => "N",
            		"AJAX_OPTION_ADDITIONAL" => "",
            		"AJAX_OPTION_HISTORY" => "N",
            		"AJAX_OPTION_JUMP" => "N",
            		"AJAX_OPTION_STYLE" => "N",
            		"CACHE_FILTER" => "Y",
            		"CACHE_GROUPS" => "N",
            		"CACHE_TIME" => "36000000",
            		"CACHE_TYPE" => "A",
            		"CHECK_DATES" => "Y",
            		"DETAIL_URL" => "",
            		"DISPLAY_BOTTOM_PAGER" => "N",
            		"DISPLAY_DATE" => "N",
            		"DISPLAY_NAME" => "N",
            		"DISPLAY_PICTURE" => "Y",
            		"DISPLAY_PREVIEW_TEXT" => "Y",
            		"DISPLAY_TOP_PAGER" => "N",
            		"FIELD_CODE" => array("",""),
            		"FILTER_NAME" => "CITY_FILTER",
            		"HIDE_LINK_WHEN_NO_DETAIL" => "N",
            		"IBLOCK_ID" => "20",
            		"IBLOCK_TYPE" => "services",
            		"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
            		"INCLUDE_SUBSECTIONS" => "N",
            		"MESSAGE_404" => "",
            		"NEWS_COUNT" => "10",
            		"PAGER_BASE_LINK_ENABLE" => "N",
            		"PAGER_DESC_NUMBERING" => "N",
            		"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
            		"PAGER_SHOW_ALL" => "N",
            		"PAGER_SHOW_ALWAYS" => "N",
            		"PAGER_TEMPLATE" => ".default",
            		"PAGER_TITLE" => "",
            		"PARENT_SECTION" => "801",
            		"PARENT_SECTION_CODE" => "",
            		"PREVIEW_TRUNCATE_LEN" => "",
            		"PROPERTY_CODE" => array("HREF","IMAGES","IMG_MOBILE"),
            		"SET_BROWSER_TITLE" => "N",
            		"SET_LAST_MODIFIED" => "N",
            		"SET_META_DESCRIPTION" => "N",
            		"SET_META_KEYWORDS" => "N",
            		"SET_STATUS_404" => "N",
            		"SET_TITLE" => "N",
            		"SHOW_404" => "N",
            		"SORT_BY1" => "SORT",
            		"SORT_BY2" => "ID",
            		"SORT_ORDER1" => "ASC",
            		"SORT_ORDER2" => "ASC",
                    "USER_DEVICE" => USER_DEVICE,
                    "USER_DEVICE_OS" => USER_DEVICE_OS,
            	)
            );?>
            <?\Bitrix\Main\Page\Frame::getInstance()->finishDynamicWithID("areaBigBanners", "");?>
        </div>
    </div>
    <?/*
    $APPLICATION->IncludeComponent(
    	"bitrix:catalog.section.list",
    	"main-popular",
    	array(
    		"ADD_SECTIONS_CHAIN" => "N",
    		"CACHE_GROUPS" => "Y",
    		"CACHE_TIME" => "36000000",
    		"CACHE_TYPE" => "N",
    		"COUNT_ELEMENTS" => "N",
    		"IBLOCK_ID" => "7",
    		"IBLOCK_TYPE" => "1c_catalog",
    		"SECTION_CODE" => "",
    		"SECTION_FIELDS" => array(
    			0 => "",
    			1 => "",
    		),
    		"SECTION_ID" => "",
    		"SECTION_URL" => "",
    		"SECTION_USER_FIELDS" => array(
    			0 => "UF_OFTEN_ASK",
    			1 => "",
    		),
    		"SHOW_PARENT_NAME" => "Y",
    		"TOP_DEPTH" => "",
    		"VIEW_MODE" => "LIST",
    		"COMPONENT_TEMPLATE" => "main-popular",
            "PRICE_CODE" => $GLOBALS["PRICE_CODE"],
            //"STORE_XML_ID" => $_SESSION["SELECTED_CITY"]["SOTORE_XML_ID"],
    	),
    	false
    );*/?>
    <?
    if(!$USER->IsAdmin()):
    $APPLICATION->IncludeComponent(
    	"bitrix:news",
    	"main",
    	array(),
    	false
    );
    endif;
    ?>
</div>
<?$APPLICATION->IncludeComponent("bitrix:catalog.sections.top", "main-sale-new", array(
	"ACTION_VARIABLE" => "action",
		"BASKET_URL" => "/personal/basket.php",
		"CACHE_FILTER" => "Y",
		"CACHE_GROUPS" => "N",
		"CACHE_TIME" => "36000000",
		"CACHE_TYPE" => "A",
		"CONVERT_CURRENCY" => "N",
		"DETAIL_URL" => "",
		"DISPLAY_COMPARE" => "N",
		"ELEMENT_COUNT" => "8",
		"ELEMENT_SORT_FIELD" => "sort",
		"ELEMENT_SORT_FIELD2" => "id",
		"ELEMENT_SORT_ORDER" => "asc",
		"ELEMENT_SORT_ORDER2" => "desc",
		"FILTER_NAME" => "arrFilter",
		"HIDE_NOT_AVAILABLE" => "Y",
		"IBLOCK_ID" => "7",
		"IBLOCK_TYPE" => "1c_catalog",
		"LINE_ELEMENT_COUNT" => "4",
		"PRICE_CODE" => array(
			0 => $GLOBALS["PRICE_CODE"],
		),
		"PRICE_VAT_INCLUDE" => "N",
		"PRODUCT_ID_VARIABLE" => "id",
		"PRODUCT_PROPERTIES" => "",
		"PRODUCT_PROPS_VARIABLE" => "prop",
		"PRODUCT_QUANTITY_VARIABLE" => "quantity",
		"PROPERTY_CODE" => array(
			0 => "sale",
			1 => "new",
			2 => "__2",
			3 => "__5",
			4 => "can_order",
			5 => "",
		),
		"SECTION_COUNT" => "2",
		"SECTION_FIELDS" => array(
			0 => "",
			1 => "",
		),
		"SECTION_ID_VARIABLE" => "SECTION_ID",
		"SECTION_SORT_FIELD" => "sort",
		"SECTION_SORT_ORDER" => "desc",
		"SECTION_URL" => "",
		"SECTION_USER_FIELDS" => array(
			0 => "",
			1 => "",
		),
		"SHOW_PRICE_COUNT" => "1",
		"USE_MAIN_ELEMENT_SECTION" => "N",
		"USE_PRICE_COUNT" => "N",
		"USE_PRODUCT_QUANTITY" => "N",
		"COMPONENT_TEMPLATE" => "main-sale-new",
        "STORE_XML_ID" => $_SESSION["SELECTED_CITY"]["SOTORE_XML_ID"],
	),
	false,
	array(
	"ACTIVE_COMPONENT" => "N"
	)
);?>
<?$APPLICATION->IncludeComponent(
	"bitrix:news.list",
	"main-news",
	Array(
		"ACTIVE_DATE_FORMAT" => "d.m.Y",
		"ADD_SECTIONS_CHAIN" => "N",
		"AJAX_MODE" => "N",
		"AJAX_OPTION_ADDITIONAL" => "",
		"AJAX_OPTION_HISTORY" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "N",
		"CACHE_FILTER" => "Y",
		"CACHE_GROUPS" => "N",
		"CACHE_TIME" => "36000000",
		"CACHE_TYPE" => "A",
		"CHECK_DATES" => "Y",
		"COMPONENT_TEMPLATE" => "main-news",
		"DETAIL_URL" => "",
		"DISPLAY_BOTTOM_PAGER" => "N",
		"DISPLAY_DATE" => "N",
		"DISPLAY_NAME" => "Y",
		"DISPLAY_PICTURE" => "Y",
		"DISPLAY_PREVIEW_TEXT" => "N",
		"DISPLAY_TOP_PAGER" => "N",
		"FIELD_CODE" => array(0=>"",1=>"",),
		"FILTER_NAME" => "",
		"HIDE_LINK_WHEN_NO_DETAIL" => "N",
		"IBLOCK_ID" => "1",
		"IBLOCK_TYPE" => "news",
		"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
		"INCLUDE_SUBSECTIONS" => "Y",
		"MESSAGE_404" => "",
		"NEWS_COUNT" => "4",
		"PAGER_BASE_LINK_ENABLE" => "N",
		"PAGER_DESC_NUMBERING" => "N",
		"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
		"PAGER_SHOW_ALL" => "N",
		"PAGER_SHOW_ALWAYS" => "N",
		"PAGER_TEMPLATE" => ".default",
		"PAGER_TITLE" => "",
		"PARENT_SECTION" => "",
		"PARENT_SECTION_CODE" => "",
		"PREVIEW_TRUNCATE_LEN" => "",
		"PROPERTY_CODE" => array(0=>"",1=>"",),
		"SET_BROWSER_TITLE" => "N",
		"SET_LAST_MODIFIED" => "N",
		"SET_META_DESCRIPTION" => "N",
		"SET_META_KEYWORDS" => "N",
		"SET_STATUS_404" => "N",
		"SET_TITLE" => "N",
		"SHOW_404" => "N",
		"SORT_BY1" => "SORT",
		"SORT_BY2" => "ACTIVE_FROM",
		"SORT_ORDER1" => "ASC",
		"SORT_ORDER2" => "DESC"
	)
);?>
<div class="center">
<?$APPLICATION->IncludeComponent(
	"bitrix:main.include",
	"",
	Array(
		"AREA_FILE_SHOW" => "file",
		"AREA_FILE_SUFFIX" => "inc",
		"COMPOSITE_FRAME_MODE" => "Y",
		"COMPOSITE_FRAME_TYPE" => "STATIC",
		"EDIT_TEMPLATE" => "",
		"PATH" => "/.inc/main_text.php"
	)
);?>
</div>
<br /><br />
<?$APPLICATION->IncludeComponent(
	"bitrix:news.list",
	"main-menu2",
	array(
		"ACTIVE_DATE_FORMAT" => "d.m.Y",
		"ADD_SECTIONS_CHAIN" => "N",
		"AJAX_MODE" => "N",
		"AJAX_OPTION_ADDITIONAL" => "",
		"AJAX_OPTION_HISTORY" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "N",
		"CACHE_FILTER" => "N",
		"CACHE_GROUPS" => "N",
		"CACHE_TIME" => "36000000",
		"CACHE_TYPE" => "A",
		"CHECK_DATES" => "Y",
		"DETAIL_URL" => "",
		"DISPLAY_BOTTOM_PAGER" => "N",
		"DISPLAY_DATE" => "N",
		"DISPLAY_NAME" => "Y",
		"DISPLAY_PICTURE" => "Y",
		"DISPLAY_PREVIEW_TEXT" => "N",
		"DISPLAY_TOP_PAGER" => "N",
		"FIELD_CODE" => array(
			0 => "",
			1 => "",
		),
		"FILTER_NAME" => "",
		"HIDE_LINK_WHEN_NO_DETAIL" => "N",
		"IBLOCK_ID" => "23",
		"IBLOCK_TYPE" => "services",
		"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
		"INCLUDE_SUBSECTIONS" => "Y",
		"MESSAGE_404" => "",
		"NEWS_COUNT" => "4",
		"PAGER_BASE_LINK_ENABLE" => "N",
		"PAGER_DESC_NUMBERING" => "N",
		"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
		"PAGER_SHOW_ALL" => "N",
		"PAGER_SHOW_ALWAYS" => "N",
		"PAGER_TEMPLATE" => ".default",
		"PAGER_TITLE" => "",
		"PARENT_SECTION" => "",
		"PARENT_SECTION_CODE" => "",
		"PREVIEW_TRUNCATE_LEN" => "",
		"PROPERTY_CODE" => array(
			0 => "HREF",
			1 => "",
		),
		"SET_BROWSER_TITLE" => "N",
		"SET_LAST_MODIFIED" => "N",
		"SET_META_DESCRIPTION" => "N",
		"SET_META_KEYWORDS" => "N",
		"SET_STATUS_404" => "N",
		"SET_TITLE" => "N",
		"SHOW_404" => "N",
		"SORT_BY1" => "SORT",
		"SORT_BY2" => "ACTIVE_FROM",
		"SORT_ORDER1" => "ASC",
		"SORT_ORDER2" => "DESC",
		"COMPONENT_TEMPLATE" => "about-menu2"
	),
	false
);?>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>