
export const createHash = (acao, input) => {

    console.log(acao);

    var output = "";

    switch (acao) {
        //encode
        case 'base64':

            var buffencode = new Buffer(input);
            output = buffencode.toString('base64');

            break;

        case 'md5':

            var MD5 = require("crypto-js/md5");

            output = MD5(input);

            break;

        case 'sha1':

            var SHA1 = require("crypto-js/sha1");

            output = SHA1(input);

            break;

        case 'sha256':

            var SHA256 = require("crypto-js/sha256");

            output = SHA256(input);

            break;

        //decode
        case 'dbase64':


            var buffdecode = new Buffer(input, 'base64');
            output = buffdecode.toString('utf-8');

            break;

        default:

            output = "";

            break;
    }

    return output;

}