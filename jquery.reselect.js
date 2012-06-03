/*
 * jQuery Reselect plugin 1.0
 *
 * Copyright (c) 2012 Denis Batura
 *
 * Licensed under GPL license:
 *   http://www.gnu.org/licenses/gpl.html
 *
 */
(function($) {
	$.fn.reselect = function(options) {

		options = $.extend({
			name:'sel_emul_' + new Date().getTime(),
			placeholder: 'Type your own text here...'
		}, options);

		return this.each(function() {
			var sel_options = '', select = $(this);
			$(this).hide().children('option').each(function() {
				sel_options += '<div class="sel_option" data-value="' + $(this).val() + '">' + $(this).text() + '</div>';
			});

			var template = '<div class="sel_emul">\
	 			                <div class="sel_selected">\
	 			                    <input name="' + options.name + '" placeholder="'+options.placeholder+'" class="selected-text" type="text"/>\
	 			                    <div class="sel_arrow"></div>\
	 			                    <div class="sel_options">' + sel_options + '</div>\
	 			                </div>\
	 			            </div>';

			select.before(template);
			var select_emulate = select.prev('.sel_emul');
			select_emulate.on('click', function() {
				select_emulate.find('.sel_options').toggle();
			});

			select_emulate.find('.selected-text').on('keyup', function(){
				($(this).val() == '') ? select_emulate.find('.sel_options').show() : select_emulate.find('.sel_options').hide();
			});
			select_emulate.find('.sel_option').on('click', function() {
				var current_text = $(this).text();
				select_emulate.find('input.selected-text').val(current_text);

				$(this).addClass('sel_ed').siblings('.sel_option').removeClass('sel_ed');

				var current_val = $(this).data('value');
				current_val = typeof(current_val) != 'undefined' ? current_val : current_text;
				select.find('option').attr('selected', false);
				select.find('option[value="' + current_val + '"]').attr('selected', 'select');
			});
			return this;
		});
	};
})(jQuery);