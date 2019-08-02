const fs=require('fs');
fs.mkdir('kimatia',(err)=>{
	if(err){
		console.log(err);
	}else{
		//create write file
fs.writeFile('./kimatia/kimatia.txt','My name is kimashia Daniel',(err)=>{
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
		console.log('Error occured while writting file');
	}
});
	}
});