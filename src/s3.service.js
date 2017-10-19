var S3 = require('s3');


var login = function(key, secret) {
    let s3Client = S3.createClient({
        s3Options: {
            accessKeyId: 'AKIAJXDYXM4XSJOYS3VQ',
            secretAccessKey: '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',
            region: "us-east-1"
        }
    })
    var params = {
        Bucket: "app-publishing-internalQA",
        MaxKeys: 2
    }
    console.log("---------------------------", params.Bucket)
    let files = s3Client.listObjects(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(9, data);           // successful response
    });
}

module.exports = {
    login: login
}