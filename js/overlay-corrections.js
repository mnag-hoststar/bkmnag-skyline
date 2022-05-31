// ----------------------------------------
// Skyline: JS > Overlay Corrections
// ----------------------------------------

// Header
$( document ).ready(function() {
	var headerHeight = $(".bk-header").innerHeight();
	var featureOverlayTopDistance = $( ".widget.feature .widget-overlay" ).attr("style", "top: " + headerHeight +"px");
	var contentOverlayTopDistance = $( ".bk-pt-default .container" ).attr("style", "top: " + headerHeight +"px");

	$(window).resize(function() {
		var headerHeight = $(".bk-header").innerHeight();
		var featureOverlayTopDistance = $( ".widget.feature .widget-overlay" ).attr("style", "top: " + headerHeight +"px");
		var contentOverlayTopDistance = $( ".bk-pt-default .container" ).attr("style", "top: " + headerHeight +"px");
	});
});
