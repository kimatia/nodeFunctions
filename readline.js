



const readLine=require('readline');
//readline
const rl = readLine.createInterface({input:process.stdin,output:process.stdout});
let num4=3;
let num5=4;
let ans=num4+num5;
rl.question(`What is ${num4} + ${num5}?`,(userInput)=>{
	//console.log(userInput);
	if(userInput.trim()==ans){
        rl.close();
	}else if(userInput.trim()!=ans){
		rl.setPrompt(`Fail!, ${userInput} is wrong\n`);
		rl.prompt();
		rl.on('line',(userInput)=>{
          if(userInput.trim()==ans){
          	rl.close();
          }else if(userInput.trim!=ans){
          	rl.setPrompt(`${userInput} is still wrong, please try again\n`);
          	rl.prompt();
          }
		});
	}
});
rl.on('close',()=>{
    console.log(`${ans} is correct\n`);
});