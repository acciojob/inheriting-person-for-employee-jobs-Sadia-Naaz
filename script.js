// complete this js code
function Person(name, age) {
	this.name=name;
	this.age=age;
greet(){
	console.log("hello my name is ${name},i am ${age} years old.")
}
}

function Employee(name, age, jobTitle) {
	this.name=name;
	this.age=age;
	this.jobTitle=jobTitle;
	__prototype__:Person(name,age);
	jobGreet()
	{
		console.log("hello my name is ${name},i am ${age} years old ,and  my job title is ${jobTitle}");
	}
}

// Do not change code below this line

window.Person = Person;
window.Employee = Employee;
