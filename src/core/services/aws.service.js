import AWS from 'aws-sdk';

import * as utils from '../../utils';
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
                Bucket: "app-publishing-poc"
            }
        })
    }

    getFiles = (folder = '') => {
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
                return json;
            })
    }

    uploadFile = (file, fileName, folder) => {
        if(!file || !fileName || !folder) {
            console.log("You need to specify a file, a fileName and a folder to upload with awsService.putFile");
            console.log("File: ", file);
            console.log("FileName: ", fileName);
            console.log("Folder:", folder);
            return;
        }
        let newPath = folder + "/" + fileName;
        let newBody = utils.jsonToBuffer(file);
        return s3.upload({Key: newPath, Body: newBody}).promise()
            .then(data => {
                console.log("upload successful", data);
                return data;
            })
            .catch(err => {
                console.log("upload error", err)
                return new Error(err);
            })

    }

    deleteFile = (fileName, folder) => {
        if(!fileName || !folder) {
            console.log("You need to specify both a file name and a folder to upload with awsService.putFile");
            console.log("File: ", fileName);
            console.log("Folder:", folder);
            return;
        }
        let newPath = folder + "/" + fileName;        
        return s3.deleteObject({Key: newPath}).promise()
            .then(data => {
                console.log("delete data successful", data);
                return data;
            })
            .catch(err => {
                console.log("delete error", err);
                return new Error(err);
            })
    }

}

export const awsService = new AWSService();