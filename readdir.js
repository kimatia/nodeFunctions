

const fs=require("fs");
fs.readdir('./kimatia',(err,files)=>{
	if (err) {
		console.log(err);
	}else{
		for(let file of files){
			fs.unlink(`./kimatia/`+file,(err)=>{
				if(err){
					console.log(err);
				}else{
					console.log('Sucessfully deleted files');
				}
			})
		}
	}
})