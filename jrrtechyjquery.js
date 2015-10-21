
	var navigator = $('#topnav');
	$(#menu).on("click", function(event){
		navigator.show();
	});
	var tube = [];
$(document).ready(function() {
    $('object[type="application/x-shockwave-flash"]').each(function (){
        tube.push({
            element: $(this),
            height: $(this).attr('height'),
            width: $(this).attr('width')
        });
    });
});
$(window).resize(function() {
    clearTimeout(rebuild);
    rebuild = setTimeout(function() {
        $.each(tube, function (i, value) {
            tube[i].element.height(tube[i].element.width() / tube[i].width * tube[i].height);
        });
    }, 100);
});



