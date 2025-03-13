// (function (exports, require, module, __filename, __dirname){

    console.log(__filename);
    console.log(__dirname)

    var url = 'https://www.tech.home/log'

    function log(message){
        console.log(message)
    }

    module.exports.log = log;
    exports.log = log;
