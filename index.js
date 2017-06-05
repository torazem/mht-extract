let path = require('path');
let parser = require('mhtml-parser');
let decoder = require('base64js');

exports.extractEncodedFiles = (inputPath, options) => {
    options = options || {};

    let outputPath = options.outputPath || "";

    parser.loadFile(inputPath, {
        charset: options.charset || "gbk"
    }, function(err, data) {
        if (err) throw err;

        let keys = Object.keys(data);

        let base64keys = keys.filter(function(key){
            return data[key].encoding == "base64";
        });

        base64keys.forEach(function(key){
            decoder.decode(data[key].data, path.join(outputPath, key), onError);
        });
    });

    function onError(err) {
        if (err) throw err;
    }
}
