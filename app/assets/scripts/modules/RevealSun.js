import $ from 'jquery';

class RevealSun {
	constructor() {
		this.cyrcle = $('.section__cyrcle');
		this.sunOuter = $('.sun-outer');
		this.events();
	}

	events() {
		this.cyrcle.click(this.revealSun.bind(this));
	}

	revealSun() {
		this.sunOuter.toggleClass('sun-outer--is-visible');
	}
}

export default RevealSun;