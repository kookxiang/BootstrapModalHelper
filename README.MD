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

// Use addContent to add more paragraph
newBootstrapModal()
	.setTitle('Offline Alert')
	.setContent('You have been disconnected as someone has signed in with your ID on another computer.')
	.addContent('Please note that if this was not intentional, someone may have stolen your password. Please <a href="">change your password</a>.')
	.addContent('For further questions, please <a href="">click here</a>.')
	.addButton('Sign in again', null, function(){
		// relogin();
	})
	.addButton('OK', 'primary')
	.show();
```
