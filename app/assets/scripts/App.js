import MobileMenu from './modules/MobileMenu'; //MobileMenu its var of the path
import RevealOnScroll from './modules/RevealOnScroll';
//import $ from 'jquery'; for having more then one item to reveal
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();
var revealOnScroll = new RevealOnScroll();
//new RevealOnScroll($('.testimonials'), '50%'); 
//new RevealOnScroll($('.arrow'), '10%');
var stickyHeader = new StickyHeader();
var modal = new Modal();