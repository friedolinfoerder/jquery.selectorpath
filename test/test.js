var assert = function(elementPath) {
    var $element = $(elementPath),
        selectorPath = $element.selectorPath();
    if($element[0] !== $(selectorPath)[0]) {
        console.warn('Not equal!', elementPath);
    } else {
        console.info('OK', selectorPath);
    }
};

assert('#identified');
assert('span');