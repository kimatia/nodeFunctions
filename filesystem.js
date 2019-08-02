const fs=require('fs');
//create write file
fs.writeFile('kimatia.txt','My name is kimashia Daniel',(err)=>{
	if(!err){
		console.log('File written');
		fs.readFile('kimatia.txt','utf8',(err,file)=>{
			if(err){
				console.log(err);
			}else{
				console.log(file);
			}
		})
	}else if(err){
		console.log('Error occured while writting file')
	}
});
rename file
fs.rename('kimatia.txt','kimashia.txt',(err)=>{
	if(err){
		console.log(err);
	}else{
		console.log('Succesfully renamed');
	}
});
//append data
fs.appendFile('kimashia.txt',' appending joshua to file',(err)=>{
	if(err){
		console.log(err);
	}else{
		console.log('Succesfully appended data');
	}
});
//unlink file
fs.unlink('kimashia.txt',(err)=>{
	if(err){
		console.log(err);
	}else{
		console.log('Succesfully deleted');
	}
});
