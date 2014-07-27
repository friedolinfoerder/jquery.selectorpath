jquery.selectorpath
===================

Get a distinct path to an jquery element.

There are many situation where this could be useful:
* persist a position of an element in order to use this element later on
* select the same element on different browsers
* save the position before making an page refresh

The plugin can be used like this:

    var $element = $('#persistantObject');
    
    // get the selector path
    var path = $element.selectorPath();
    
    // select the element (e.g. after an page refresh)
    var $foundElement = $(path);
    
    console.log($foundElement.is($element)); // outputs true
