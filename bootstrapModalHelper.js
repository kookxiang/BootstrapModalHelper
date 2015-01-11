/*
 * Name:	Bootstrap Modal Helper
 * Version:	1.0.0 (2015-01-12)
 * Author:	kookxiang (http://ikk.me)
 * License:	http://www.apache.org/licenses/LICENSE-2.0
 */
function newBootstrapModal(){
	var modal = {};
	// Event
	modal.beforeClose = function(){};
	modal.beforeShow = function(){};

	// Method
	modal.setTitle = function(title){
		titleElement.innerHTML = '<p>' + title + '</p>';
		return this;
	};
	modal.setContent = function(content){
		bodyElement.innerHTML = '<p>' + content + '</p>';
		return this;
	};
	modal.addContent = function(content){
		bodyElement.innerHTML += '<p>' + content + '</p>';
		return this;
	};
	modal.hide = function(content){
		modal.beforeClose();
		$(mainElement).modal('hide');
		return this;
	};
	modal.show = function(){
		document.body.appendChild(mainElement);
		$(mainElement).on('hidden.bs.modal', function(){
			$(mainElement).remove();
		});
		modal.beforeShow();
		$(mainElement).modal('show');
		return this;
	}
	modal.addButton = function(text, cssClass, callback){
		var btn = document.createElement('button');
		btn.className = cssClass == null ? 'btn' : 'btn btn-' + cssClass;
		btn.innerHTML = text;
		btn.onclick = function(){
			if(typeof callback == 'function')
				callback();
			modal.hide();
		};
		footerElement.appendChild(btn);
		return this;
	}

	// Create DOM
	var mainElement = document.createElement('div');
	mainElement.className = 'modal fade';
	mainElement.tabIndex = '-1';
		var dialogElement = document.createElement('div');
		dialogElement.className = 'modal-dialog';
			var contentElement = document.createElement('div');
			contentElement.className = 'modal-content';
				var headerElement = document.createElement('div');
				headerElement.className = 'modal-header';
					var closeButton = document.createElement('button');
					closeButton.type = 'button';
					closeButton.className = 'close';
					closeButton.setAttribute('aria-hidden', 'true');
					closeButton.innerHTML = '&times;';
					closeButton.onclick = modal.hide;
					var titleElement = document.createElement('h4');
					titleElement.className = 'modal-title';
				headerElement.appendChild(closeButton);
				headerElement.appendChild(titleElement);
				var bodyElement = document.createElement('div');
				bodyElement.className = 'modal-body';
				var footerElement = document.createElement('div');
				footerElement.className = 'modal-footer';
			contentElement.appendChild(headerElement);
			contentElement.appendChild(bodyElement);
			contentElement.appendChild(footerElement);
		dialogElement.appendChild(contentElement);
	mainElement.appendChild(dialogElement);
	return modal;
}