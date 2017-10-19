export const jsonToString = (json) => {
    return JSON.stringify(json);
}

export const stringToBuffer = (string) => {
    return new Buffer.from(string);
}

export const jsonToBuffer = (json) => {
    let string = jsonToString(json);
    return stringToBuffer(string);
}

export const bufferToString = buffer => {
    return buffer.toString('utf-8');
}

export const stringToJson = string => {
    return JSON.parse(string);
}

export const bufferToJson = buffer => {
    let string = bufferToString(buffer);
    return stringToJson(string);
}


export const deepCopy = (json) => {
    return JSON.parse(JSON.stringify(json));
}

export const getCurrentFolder = file => {
    console.log(file, file)
    let regexCapture = file.match(/(approved|under_review|rejected|withdrawn|draft)\//ig)
    if(regexCapture) {
        return regexCapture[0];
    } else {
        return "";
    }
}