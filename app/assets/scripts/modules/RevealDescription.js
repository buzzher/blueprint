import $ from 'jquery';

class RevealDescription {
	constructor() {
		this.title = $('.section__area__title');
		this.description = $('.section__area__description');
		
		this.events();
		this.hideItem();
		this.showDescription();
	}

	hideItem() {
		this.description.addClass('reveal-item');
	}

	events() {
		//this.title.mouseover(this.showDescription.bind(this));
		this.title.mouseleave(this.hideDescription.bind(this));
	}

	showDescription() { //cant do like hideDescription()
		var description = this.description; //diff func, need var
		this.title.mouseover(function() { //mouseover
			var data_id = $(this).data('id'); //Attribute
			description.each(function() {
				var currentDescription = this;
				if($(currentDescription).attr('id') === data_id) {
					$(currentDescription).addClass('reveal-item--is-visable');
				}

			});
		})
	}

	hideDescription() {
		this.description.removeClass('reveal-item--is-visable');
	}
}

export default RevealDescription;