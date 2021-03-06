/* -*- javascript -*- */
"use strict";

/**
 * Modal - http://semantic-ui.com/modules/modal.html
 */

import {constants} from '../constants';
import {bindable, customAttribute} from 'aurelia-framework';
import {UIAttribute} from '../ui-attribute';

@customAttribute( `${constants.attributePrefix}modal` )
export class UIModalAttribute extends UIAttribute {

	@bindable shown = false;


	attached() {
		$( this.element ).modal();
	}


	shownChanged( newValue, oldValue ) {
		this.logger.debug( "Shown attribute changed to: ", newValue );
		if ( newValue ) {
			this.show();
		} else {
			this.hide();
		}
	}


	show() {
		$( this.element ).modal( 'show' );
	}


	hide() {
		$( this.element ).modal( 'hide' );
	}


	refresh() {
		$( this.element ).modal( 'refresh' );
	}


	onShow( callback ) {
		$( this.element ).modal({ onShow: callback });
	}
	onVisible( callback ) {
		$( this.element ).modal({ onVisible: callback });
	}
	onHide( callback ) {
		$( this.element ).modal({ onHide: callback });
	}
	onHidden( callback ) {
		$( this.element ).modal({ onHidden: callback });
	}
	onApprove( callback ) {
		$( this.element ).modal({ onApprove: callback });
	}
	onDeny( callback ) {
		$( this.element ).modal({ onDeny: callback });
	}

}

