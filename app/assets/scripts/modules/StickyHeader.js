import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
	constructor() {
		this.siteHeader = $('.site-header');
		this.headerTriggerElement = $('.main-section__title');
		this.pageSection = $('.page-section');
		this.headerLinks = $('.primary-nav a'); //target all the links in primary-nav
		this.arrowLink = $('.arrow__link');
		this.createHeaderWaypoint();
		this.createPageSectionWaypoint();
		this.smoothScrolling();
		this.arrowClicked()
	}

	smoothScrolling() {
		this.headerLinks.smoothScroll();
		
	}

	arrowClicked() {
		this.arrowLink.smoothScroll();
		this.arrowLink.click(function() {
		this.headerLinks.removeClass();
		});
	}

	createHeaderWaypoint() {
		var that = this; 
		new Waypoint({ //this doesnt pointed to our class stick.. from inside waypoints, that why we changing it to var that
			element: this.headerTriggerElement[0], //native js
			handler: function(direction) {
				if(direction === 'down') {
					that.siteHeader.addClass('site-header--dark');
				} else {
					that.siteHeader.removeClass('site-header--dark')
				}
			}
		});
	}

	createPageSectionWaypoint() {
		var that = this; 
		this.pageSection.each(function() {
			var currentPageSection = this;
			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if(direction === 'down') {
						var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
						that.headerLinks.removeClass()
						$(matchingHeaderLink).addClass('is-current-link');
					}
				},
				offset: '18%'
			});

			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if(direction === 'up') {
						var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
						that.headerLinks.removeClass()
						$(matchingHeaderLink).addClass('is-current-link');
					}
				},
				offset: '-10%'
			});

		});
	}
}

export default StickyHeader;