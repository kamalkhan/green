/**
 * Neatly construct nodejs console arguments as an object.
 * - Works recursively.
 *  - example -
 *  - node source.js -h world -t -foo bar -z -b 32
 *  - will produce the following object as args
 *      {
 *          h   : 'world',
 *          t   : true,
 *          foo : 'bar',
 *          z   : true,
 *          b   : 32
 *      }
 *  - integer and string parsing is maintained
 *  - use -option without post value to set it to true.
 *
 * @param   int              Iterator
 * @return  bool|string|int  Arg value on each recursion
 */
(function bubble(i){
    if(!module.exports.args) module.exports.args = {};
    if(i >= process.argv.length) return true;
    var c = process.argv[i].match(/^-{1}(.+)$/);
    if(!c){
        bubble(i+1);
        var v = process.argv[i];
        return (!isNaN(v) && parseInt(v) == v)
        ? parseInt(v) : v;
    }
    module.exports.args[c[1]] = bubble(i+1);
    return true;
})(2);