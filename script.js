const EventEmmiterr=require('events');
const readLine=require('readline');
//create new instance of eventEmmiter
const EventEmmiter= new EventEmmiterr();

//event emitter
//attach a listener to EventEmmiter object
EventEmmiter.on('tutorial',(num1,num2)=>{
	console.log(num1+num2);
});
EventEmmiter.emit('tutorial',2,4);

class Person extends EventEmmiterr{
	constructor (name){
		super();
		this._name=name;
	}
	get name(){
		return this._name;
	}
}
let dan= new Person('kimatia');
//add listener to dan object
dan.on('name',()=>{
	console.log('My name is ' + dan.name);
});
dan.emit('name');



