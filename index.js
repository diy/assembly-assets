/**
 * Given transloadit assembly.results object this will return a json object
 * that can be sent along to the api to be stored for various asset fields.
 *
 * @authod Derek Reynolds <drk@diy.org>
 * @package diy-assembly-assets
 */

/**
 * Exports
 *
 * @param  {object} results
 * @return {object}
 */
module.exports = function (results) {
    var assets = {};

    for (var type in results) {
        if (results.hasOwnProperty(type)) {
            assets[type] = results[type];
        }
    }

    return assets;
};
