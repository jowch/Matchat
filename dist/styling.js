//https://www.webdesignerdepot.com/2013/03/how-to-create-a-color-picker-with-html5-canvas/
let canvas = document.getElementById('canvas_picker').getContext('2d');


	// create an image object and get it’s source
	let img = new Image();
	img.src = 'image.jpg';

	// copy the image to the canvas
	$(img).load(function(){
	  canvas.drawImage(img,0,0);
	});

	// http://www.javascripter.net/faq/rgbtohex.htm
	function rgbToHex(R,G,B) {return toHex(R)+toHex(G)+toHex(B)}
	function toHex(n) {
	  n = parseInt(n,10);
	  if (isNaN(n)) return "00";
	  n = Math.max(0,Math.min(n,255));
	  return "0123456789ABCDEF".charAt((n-n%16)/16)  + "0123456789ABCDEF".charAt(n%16);
	}
	$('#canvas_picker').click(function(event){
	  // getting user coordinates
	  var x = event.pageX - this.offsetLeft;
	  var y = event.pageY - this.offsetTop;
	  // getting image data and RGB values
	  var img_data = canvas.getImageData(x, y, 1, 1).data;
	  var R = img_data[0];
	  var G = img_data[1];
	  var B = img_data[2];  var rgb = R + ',' + G + ',' + B;
	  // convert RGB to HEX
	  var hex = rgbToHex(R,G,B);
	  // making the color the value of the input
	  $('#rgb input').val(rgb);
	  $('#hex input').val('#' + hex);
	});
