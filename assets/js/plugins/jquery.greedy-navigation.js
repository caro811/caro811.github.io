/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');
var wholeWidth = $vlinks.width();

var breaks = [];

function updateNav(){
    var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

    if(wholeWidth > availableSpace){
    // The visible list is overflowing the nav

        // Hide all elements
        while($vlinks.children().length > 0){
            // Record the width of the list
            breaks.push($vlinks.width());

            // Move item to the hidden list
            $vlinks.children().last().prependTo($hlinks);
        }

        // Show the dropdown btn
        if($btn.hasClass('hidden')) {
            $btn.removeClass('hidden');
        }
    }else{
    // The visible list is not overflowing

        while($hlinks.children().length > 0){
            // Move the item to the visible list
            $hlinks.children().first().appendTo($vlinks);
            breaks.pop();
        }

        // Hide the dropdown btn because hidden list is empty
        $btn.addClass('hidden');
        $hlinks.addClass('hidden');
    }

    // Keep counter updated
    $btn.attr("count", breaks.length);

    /*
    // Recur if the visible list is still overflowing the nav
    if(wholeWidth > availableSpace) {
        updateNav();
    }
    */
}

// Window listeners

$(window).resize(function() {
    updateNav();
});

$btn.on('click', function() {
    $hlinks.toggleClass('hidden');
    $(this).toggleClass('close');
});

updateNav();

