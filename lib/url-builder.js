'use strict';

/**
 * urlBuilder
 *
 * @param  params           {Object}
 * @param  params.base      {String} the base url
 * @param  params.libraries {Array}  an array of the libraries to be requested
 * @param  params.callback  {String} the callback function
 *
 * @return {String}
 */
function urlBuilder(params) {
    var builtUrl = params.base;

    builtUrl += '?';

    if (params.libraries.length > 0) {
        builtUrl += 'libraries=';

        params.libraries.forEach(function(library, index) {
            builtUrl += library;

            if (index !== params.libraries.length - 1) {
                builtUrl += ',';
            }
        });

        builtUrl += '&';
    }

    builtUrl += 'callback=' + params.callback;

    if(params.language) {
        builtUrl += '&language=' + params.language;
    }
    if(params.sensor) {
        builtUrl += '&sensor=' + params.sensor;
    }

    return builtUrl;
}

module.exports = urlBuilder;
