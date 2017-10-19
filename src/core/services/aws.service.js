import AWS from 'aws-sdk';
AWS.config.setPromisesDependency(Promise);
let s3;

class AWSService {

    updateLogin = (key, secret) => {
        AWS.config.update({
            region: 'us-east-1',
            accessKeyId: key,
            secretAccessKey: secret
        })
        s3 = new AWS.S3({
            params: {
                Bucket: "app-publishing-internalQA"
            }
        })
    }

    getFiles = (folder = 'under_review/') => {
        return s3.listObjects({ Prefix: 'partialsave-data-firstnet/' + folder }).promise()
            .then((data, err) => {
                if (err) {
                    console.log('There was an error logging you in: ' + err.message)
                    return false;
                } else {
                    return data;
                }
            });
    }

    getFile = (file) => {
        return s3.getObject({ Key: file }).promise()
            .then((data) => {
                let binary = data.Body;
                let string = binary.toString('utf-8');
                let json = JSON.parse(string);
                console.log(data.Body, json)
                return json;
            })
    }

}

export const awsService = new AWSService();