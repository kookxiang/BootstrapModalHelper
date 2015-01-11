# BootstrapModalHelper
The fastest way to create a bootstrap-styled modal (within one line)

## Usage
```javascript
// Simple tips with one close button
newBootstrapModal().setTitle('System message').setContent("You'd login successfully").addButton('OK', 'primary').show();

// A bootstrap-styled modal with two buttons (with optional callback parameter)
newBootstrapModal()
	.setTitle('The title of this modal')
	.setContent("Here's the content of the modal")
	.addButton('Confirm', 'primary', function(){
		alert("You'd click this~");
	})
	.addButton('Cancel')
	.show();
```
