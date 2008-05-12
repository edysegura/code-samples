Bingo. Use the code from I believe it's post 371:

Open up your lightbox.js and make the following additions:

Line ~314 right before "hideSelectBoxes();"

Add:
// hides flash movies that peek through the overlay
var objects = document.getElementsByTagName('object');
for (i = 0; i != objects.length; i++) {
objects[i].style.visibility = 'hidden';
}

var embeds = document.getElementsByTagName('embed');
for (i = 0; i != embeds.length; i++) {
embeds[i].style.visibility = 'hidden';
}

var iframes = document.getElementsByTagName('iframe');
for (i = 0; i != iframes.length; i++) {
iframes[i].style.visibility = 'hidden';
}

and ~ line 558 right before "showSelectBoxes();"
add:
// show flash movies again
var objects = document.getElementsByTagName('object');
for (i = 0; i != objects.length; i++) {
objects[i].style.visibility = 'visible';
}

var embeds = document.getElementsByTagName('embed');
for (i = 0; i != embeds.length; i++) {
embeds[i].style.visibility = 'visible';
}

var iframes = document.getElementsByTagName('iframe');
for (i = 0; i != iframes.length; i++) {
iframes[i].style.visibility = 'visible';
}