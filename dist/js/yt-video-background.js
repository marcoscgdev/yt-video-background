/*!
 * YT Video Background
 * Version: 1.0
 * Author: marcoscgdev@gmail.com
 *
 * License: Envato Regular License
 * Re-distribution of this script is not allowed.
 * https://codecanyon.net/user/marcoscgdev
*/
(function ($) {

	$.fn.youtubeBackground = function (options) {
		// Variables
		var isMob = isMobile();
		var container = $(this);
		var defaults = {
			videoId: '',
			backgroundColor: '#000000',
			backgroundImage: '',
			opacity: 0.7
		};
		var settings = $.extend({}, defaults, options);

		container.addClass('yt-video-background');

		if (settings.backgroundColor != '') {
			container.css({
				'background': settings.backgroundColor
			});
		}

		if (settings.backgroundImage != '' && (isMob || settings.videoId == '')) {
			container.append('<div class="yt-video-background-image" style="background-image: url(' + settings.backgroundImage + ');"></div>');
			container.find('.yt-video-background-image').css({
				'opacity': settings.opacity
			});
		}

		if (settings.videoId != '' && !isMob) {
			container.append('<iframe frameborder="0" src="https://youtube.com/embed/' + settings.videoId + '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&autohide=1&playlist=' + settings.videoId + '" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
			container.find('iframe').css({
				'opacity': settings.opacity
			});
		}

		return this;
	};

	function isMobile() {
		try {
			document.createEvent("TouchEvent");
			return true;
		} catch(e) {
			return false;
		}
	}

}(jQuery));
