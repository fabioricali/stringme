/**
 * Convert also undefined and null to string
 * @param {*} val Anything you want stringify
 * @param {object} [opt] Options
 * @param {boolean} [opt.quotes=true] If false remove quotes
 * @returns {string}
 * @constructor
 */
function Stringme(val, opt) {

    if (val === undefined) {
        val = '"undefined"';
    } else if (val === null) {
        val = '"null"';
    } else {
        val = JSON.stringify(val);
    }

    if (opt && opt.quotes === false && !/(^{|\[).*?([}\]])$/gm.test(val))
        val = val.slice(1, val.length - 1);

    return val;
}

if (typeof window !== 'undefined')
    window.stringme = Stringme;

if (typeof module !== 'undefined')
    module.exports = Stringme;