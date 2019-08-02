

const fs=require('fs');
const zlib=require('zlib');
const gzip=zlib.createGzip();
const readStream=fs.createReadStream('./kimatia.txt','utf8');
const writeStream=fs.createWriteStream('./dan.txt.gz')
readStream.pipe(gzip).pipe(writeStream);