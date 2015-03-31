jQuery.fn.selectorPath = function() {
    var path = [],
        $current = this;

    while(true) {        
        // if it's not defined stop
        if(!$current.length) {
            break;
        }

        // if it's the body add it to the path and stop
        if($current.is('body')) {
            path.push('body');
            break;
        }
        // if the id is defined stop the path
        var id = $current.attr('id');
        if(id) {
            path.push('#' + id);
            break;
        }

        var nodeName = $current[0].nodeName.toLowerCase(),
            index = $current.index(nodeName);

        path.push(nodeName + ':eq(' + index + ')');

        $current = $current.parent();
    }

    return path.reverse().join(' > ');
};

jQuery.fn.selectorPaths = function() {
    var output = [];

    this.each(function() {
        output.push($(this).selectorPath());
    });

    return output;
};