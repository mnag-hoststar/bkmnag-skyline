// ----------------------------------------
// Skyline: JS > Language Selector
// ----------------------------------------

$(document).ready(function() {
	
	// ------------------------------
	// Changes to the header when a language selector is present.
	// ------------------------------
	
	function languageSelector() {
    	if ($('.language-selector')) {
    	    var languageSelectorHeight = $('.language-selector').outerHeight();
    	    
			$('.widget.extendednavigation a.pull').css('margin-top', languageSelectorHeight+'px');
			$('.bk-header').css('margin-top', languageSelectorHeight+'px');
    	}
	}

	// ------------------------------
    // Changes by the editor are saved in the style elmement with the class js-compiled-styles.
	// ------------------------------
	
	languageSelector();
	
    $(document).bind("DOMSubtreeModified",function(){
		languageSelector();
		$(window).resize(function() {
			languageSelector();
		});
    });
});