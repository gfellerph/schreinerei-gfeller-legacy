var domready  = require('domready');
var ClassList = require('classlist');

/**
 * Check if some input has content or not
 * and add respective classes
 * @param  {Object} event Native event object
 * @return {void}
 */
function toggleHasContent (event) {
    var element = event.currentTarget;
    var classes = ClassList(element);

    if (element.value.length > 0) {
        classes.add('has-content');
    } else {
        classes.remove('has-content');
    }
}

// Initialize & bind event handlers
domready(function () {
    var elements = document.querySelector('.check-content');

    elements.addEventListener('blur', toggleHasContent);
});