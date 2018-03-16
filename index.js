/**
 * Convert also undefined and null to string
 * @param {*} val Anything you want stringify
 * @param {object} [opt] Options
 * @param {boolean} [opt.quotes=true] If false remove quotes
 * @param {function|array|string|number} [opt.replace=null] Replace (JSON.stringify 2# param)
 * @param {number|string} [opt.space=0] Space (JSON.stringify 3# param)
 * @link https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
 * @returns {string}
 * @constructor
 */
function Stringme(val, opt) {

    if (val === undefined) {
        val = '"undefined"';
    } else if (val === null) {
        val = '"null"';
    } else {
        var replace = opt && opt.replace ? opt.replace : null;
        var space = opt && opt.space ? opt.space : null;
        val = JSON.stringify(val, replace, space);
    }

    if (opt && opt.quotes === false && !/(^{|\[).*?([}\]])$/gm.test(val))
        val = val.slice(1, val.length - 1);

    return val;
}

if (typeof window !== 'undefined')
    window.stringme = Stringme;

if (typeof module !== 'undefined')
    module.exports = Stringme;