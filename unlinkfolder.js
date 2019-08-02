const fs=require('fs');
//unlink file first then delete folder to avoid deleting folder which isnt empty
fs.unlink('./kimatia/kimatia.txt',(err)=>{
	if(err){
		console.log(err);
	}else{
		//delete folder
fs.rmdir('kimatia',(err)=>{
	if(err){
		console.log(err);
	}else{
		console.log('Folder sucessfuly deleted');
	}
});
	}
});

