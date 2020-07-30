
export const createHash = (acao, input) => {

    switch (acao) {
        //encode
        case 'base64':
            let buffEncode = new Buffer(input);
            return buffEncode.toString('base64');
        case 'md5':
            let MD5 = require("crypto-js/md5");
            return MD5(input);
        case 'sha1':
            let SHA1 = require("crypto-js/sha1");
            return SHA1(input);
        case 'sha256':
            let SHA256 = require("crypto-js/sha256");
            return SHA256(input);
        //decode
        case 'dbase64':
            let buffDecode = new Buffer(input, 'base64');
            return buffDecode.toString('utf-8');
        default:
            return "";
    }
}