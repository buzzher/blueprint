import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'; //waypoint package, very popu;ar

class RevealOnScroll {
	constructor(els, offset) {
		this.itemsToReveal = $('.testimonials, .arrow');
		this.hideInitially();
		this.creatWaypoints();
	}

	hideInitially() {
		this.itemsToReveal.addClass('reveal-item');
		console.log(this);
	}

	creatWaypoints() {
		this.itemsToReveal.each(function() {
			//alert('testing');
			var currentItem = this;
			new Waypoint({ //for scrolling to a point on the page
				element: currentItem,
				handler: function() {
					$(currentItem).addClass('reveal-item--is-visible')
				},
				offset: '50%'//custemize to triger earlier
			});
		});
	}
}

export default RevealOnScroll;