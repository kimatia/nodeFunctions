


const fs=require('fs');
//with readStream, you read file in chunks hence buffer size is much smaller
//memory becomes efficient hence larger files are loaded than readfile
//readfile uses full buffer
const readStream=fs.createReadStream('./kimatia.txt','utf8');
	readStream.on('data',(chunk)=>{
      console.log(chunk);
	});

//with chunk you dont have to wait until the whole file is loaded until you manipulate
const readStream=fs.createReadStream('./kimatia.txt','utf8');
const writeStream=fs.createWriteStream('./dan.txt')
	readStream.on('data',(chunk)=>{
      writeStream.write(chunk);
	});
	//method two
	readStream.pipe(writeStream);