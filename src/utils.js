export const jsonToString = (json) => {
    return JSON.stringify(json);
}

export const stringToBuffer = (string) => {
    return new Buffer.from(string);
}

export const jsonToBuffer = (json) => {
    let string = jsonToString(json);
    let buffer = stringToBuffer(string);
    return buffer
}


export const deepCopy = (json) => {
    return JSON.parse(JSON.stringify(json));
}

export const getCurrentFolder = file => {
    let regexCapture = file.Key.match(/(approved|under_review|rejected|withdrawn|draft)\//ig)
    if(regexCapture) {
        return regexCapture[0];
    } else {
        return "";
    }
}