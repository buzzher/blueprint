import $ from 'jquery';

class Modal {
	constructor() {
		this.openModalButton = $('.open-modal');
		this.modal = $('.modal');
		this.modalX = $('.modal__x');
		this.event();
	}

	event() {
		//clicking the openModal button
		this.openModalButton.click(this.openModal.bind(this));
		//clicking the close modal button
		this.modalX.click(this.closeModal.bind(this));
		//clicking the esc key
		$(document).keyup(this.KeyPressHendler.bind(this));
		console.log(this);
	}

	KeyPressHendler(e) {
		if(e.keyCode === 27) {
			this.closeModal();
		}
	}

	openModal() {
		this.modal.addClass('modal--is-visible');
		console.log(this);
	}

	closeModal() {
		this.modal.removeClass('modal--is-visible');
		console.log(this);
	}
}

export default Modal;