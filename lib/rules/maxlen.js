/**
 * @fileoverview Rule to check for max length on a line.
 * @author Matt DuVall <http://www.mattduvall.com>
 */


//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    var maxLength = context.options[0];

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------
    function checkProgramForMaxLength(node) {
        var lines = context.getSource(node).split("\n"),
            i,
            line;

        for (i = 0; i < lines.length; i++) {
            line = lines[i];

            if (line.length > maxLength) {
                context.report(node, "Line " + i + " exceeds the maximum line length of " + maxLength + ".");
            }
        }
    }


    //--------------------------------------------------------------------------
    // Public API
    //--------------------------------------------------------------------------

    return {
        "Program": checkProgramForMaxLength
    };

};
