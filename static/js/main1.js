$(function() {
    // gather all inputs of selected types
    var inputs = $('input, textarea, select, button'), inputTo;

    // bind on keydown
    inputs.on('keydown', function(e) {
        
        // if we pressed the tab
        if (e.keyCode == 9 || e.which == 9) {
            // prevent default tab action
            e.preventDefault();

            if (e.shiftKey) {
                // get previous input based on the current input
                inputTo = inputs.get(inputs.index(this) - 1);
            } else {
                // get next input based on the current input
                inputTo = inputs.get(inputs.index(this) + 1);
            }
            
            // move focus to inputTo, otherwise focus first input
            if (inputTo) {
                inputTo.focus();
            } else {
                inputs[0].focus();
            }
        }
    });
});
