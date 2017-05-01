import $ from 'jquery';

class MobileMenu {
	constructor() {
		this.siteHeader = $('.site-header');
		this.menuIcon = $('.site-header__menu-icon');
		this.menuContent = $('.site-header__menu-content');
		this.events();
	}

	events() { //bind fix the this. in toggle.. to point to toggle, not to site-header__menu
		this.menuIcon.click(this.toggleTheMenu.bind(this));
		console.log(this);
	}

	toggleTheMenu() {
		this.menuContent.toggleClass('site-header__menu-content--is-visible');
		this.siteHeader.toggleClass('site-header--is-expended');
		this.menuIcon.toggleClass('site-header__menu-icon--close-x')
		console.log(this)
	}
}

export default MobileMenu;