/*
jQuery.Quantitizr
Copyright © 2011 Raphael @ UGLYMAN
http://www.uglyman.com.br

What this plugin do?_______________________________________________

Puts a two links after a text field for increase and decrease the number on it.

* Requires jQuery 1.5 or newer // The lower versions was never tested.

How to use?________________________________________________________

 - Put this on your html head tag:

<script type="text/javascript" src="js/jquery.quantitizr/jquery.quantitizr.js"></script>
<link rel="stylesheet" href="js/jquery.quantitizr/jquery.quantitizr.js" type="text/css" />


 - Call the function on document ready on bottom of your code, before the body end tag:

<script type="text/javascript">
	$(document).ready(function() {
		$(".qnt").quantitizr();
	});
</script>


Tips and recomendations_____________________________________________ 

- Always use a class for many fields, like a shop cart
- Always verify if all links (include images links in css file) are correct
- Always debug your code before you publicate your code.
- If you find any bug, please go to my website and send me a message, only that way i will be able to deal with him.

License:
MIT License - http://www.opensource.org/licenses/mit-license.php

Sorry about my english!
Enjoy!

*/

(function( $ ){
	$.fn.quantitizr = function( ) {

		this.each(function() {
			var thisname = $(this).attr('name');
			$('input[name="'+thisname+'"]').after('<span class="bts_qnttzr"><a href="#" class="addqnt" title="'+thisname+'">add</a> <a href="#" class="rmqnt" title="'+thisname+'">rm</a></span>');
		});

		$("a.addqnt").live('click', function () {
			var thisname = $(this).attr('title');
			var nowval = parseFloat($('input[name="'+thisname+'"]').val());
			if(nowval==' ' or nowval=='NaN'){
				nowval = 0;
			}
			var resultado = (nowval+1);
			$('input[name="'+thisname+'"]').val(resultado);
			console.log(thisname + " / " + nowval + " / " + resultado);
			return false;
		});

		$("a.rmqnt").live('click', function () {
			var thisname = $(this).attr('title');
			var nowval = parseFloat($('input[name="'+thisname+'"]').val());
			var resultado = (nowval-1);
			if(resultado<0){
				resultado = 0;
			}
			$('input[name="'+thisname+'"]').val(resultado);
			console.log(thisname + " / " + nowval + " / " + resultado);
			return false;
		});
	};
})( jQuery );