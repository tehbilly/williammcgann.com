$(window).load(function() {


	//PRELOADER
	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.


	$('#wrapper').bind('easytabs:after', function() {

		// PORTFOLIO ISOTOPE
		$(".portfolio_items").isotope({
			itemSelector: '.single_item',
			layoutMode: 'fitRows',
			columnWidth: '.col-sm-3'
		});

		// isotope click function

		$('.portfolio_filter ul li').click(function(){
			$(".portfolio_filter ul li").removeClass("select-cat");
			$(this).addClass("select-cat");

			var selector = $(this).attr('data-filter');
			$(".portfolio_items").isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false,
				}
		});
			return false;
		});


		// MAGNIFIC POPUP FOR PORTFOLIO PAGE
		$('.image-link').magnificPopup({
			type:'image',
			gallery:{
				enabled:true
		    }
		});





	});


});

/* Contact Form JS*/
(function($){
   'use strict';

   $(".contact-form").on('submit', function(e){
        e.preventDefault();

        var uri = $(this).attr('action');
        $("#con_submit").val('Wait...');
        var con_name = $("#con_name").val();
        var con_email = $("#con_email").val();
        var con_message = $("#con_message").val();

        var required = 0;
        $(".requie", this).each(function() {
            if ($(this).val() == '')
            {
                $(this).addClass('reqError');
                required += 1;
            }
            else
            {
                if ($(this).hasClass('reqError'))
                {
                    $(this).removeClass('reqError');
                    if (required > 0)
                    {
                        required -= 1;
                    }
                }
            }
        });
        if (required === 0)
        {
            $.ajax({
                type: "POST",
                url: 'https://calm-mountain-15353.herokuapp.com/sendEmail',
                data: {con_name: con_name, con_email: con_email, con_message: con_message},
                success: function(data)
                {
                    $(".contact-form input, .contact-form textarea").val('');
                    $("#con_submit").val('Done!');
                }
            });
        }
        else
        {
            $("#con_submit").val('Failed!');
        }
   });
   $(".requie").on('keyup', function() {
        $(this).removeClass('reqError');
    });

})(jQuery);
