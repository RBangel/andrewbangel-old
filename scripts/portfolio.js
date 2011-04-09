
function formatTitle(title, currentArray, currentIndex, currentOpts) {
    return '<div><span id="media-title">' + (title && title.length ? '<b>' + title + '</b>' : '' ) + '</span></div>';
}
;
$(document).ready(function() {
	$(function() {
		$("#resume .summary").hide();
		$("#resume .experience").show();
		$("#resume .education").hide();
		$("#resume .activities").hide();

		$("#resumeMenu").hide();
		$("#worksMenu").hide();

		$("#about").hide();
		$("#contact").hide();
		$("#works").hide();
		$("#resume").hide();
		$("#demo").show();
	});
	
	$(".tagImage").fancybox({
		'transitionIn'	: 'elastic',
		'transitionOut'	: 'elastic',
		'titlePosition'	: 'inside',
		'autoscale'		: 'true',
		'titleFormat'   : formatTitle,
		'overlayColor'  : '#222',
		'overlayOpacity': 0.5
	});
	
	$(".tagVideo").click(function() {
		$.fancybox({
				'autoScale'			: false,
				'transitionIn'		: 'elastic',
				'transitionOut'		: 'elastic',
				'titleFormat'       : formatTitle,
				'title'				: this.title,
				'titlePosition'		: 'inside',
				'overlayColor'      : '#222',
				'overlayOpacity'    : 0.5,
				'href'				: this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
				'type'				: 'swf',
				'swf'				: {
					'wmode'				: 'transparent',
					'allowfullscreen'	: 'true'
									}
			});

		return false;
	});
	
	$(".menuOption").click( function() {
		var choice = $(this).attr("choice");
		$("#about").hide();
		$("#contact").hide();
		$("#works").hide();
		$("#resume").hide();
		$("#demo").hide();

		$('#' + choice).show();
		
		if( choice == "works" )
			$("#worksMenu").show();
		else
			$("#worksMenu").hide();

		if( choice == "resume" )
			$("#resumeMenu").show();
		else
			$("#resumeMenu").hide();
	});
	
	$("#worksMenu .tagOption").click( function() {
		var choice = $(this).attr("choice");
		var lowopacity = 0.15;
		
		$(".ani").css('opacity', lowopacity);
		$(".mod").css('opacity', lowopacity);
		$(".lig").css('opacity', lowopacity);
		$(".rig").css('opacity', lowopacity);
		
		$('.' + choice).css('opacity', '1.0');
	});
	
	$("#resumeMenu .tagOption").click( function() {
		var choice = $(this).attr("choice");
		
		$("#resume .summary").hide();
		$("#resume .experience").hide();
		$("#resume .education").hide();
		$("#resume .activities").hide();
		
		$('#resume .' + choice).show();
	});
});
