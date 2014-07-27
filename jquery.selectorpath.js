jQuery.fn.selectorPath = function() {
    var path = [],
        $current = this;

    while(!$current.is('body')) {
        var index = $current.index();

        path.push(':eq(' + index + ')');

        $current = $current.parent();
    }
    path.push('body');

    return path.reverse().join(' > ');
};

jQuery.fn.selectorPaths = function() {
    var output = [];

    this.each(function() {
        output.push($(this).selectorPath());
    });

    return output;
};