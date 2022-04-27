class Person{
    static companyName="Accenture"; //static member
    constructor(name,age,address){
        //set values for 3 properties 
        this.name=name;
        this.age=age;
        this.address=address;
    }

    //instance method
    getDetails(){
        let persondata=
        `
        Name: ${this.name} 
        Age: ${this.age} 
        Address: ${this.address}
        `;
        console.log(persondata);
    }

    //static method
    static getCompanyName(){
        console.log(`company Name: ${this.companyName}`);
    } 
}

class Employee extends Person{
    static companyNew="Google";
    constructor(name,age,address,designation,salary){
        super(name,age,address);
        this.designation=designation;
        this.salary=salary;
    }

    //instance method
    getDetails(){
        let employeedata=
        `
        Name: ${this.name} 
        Age: ${this.age} 
        Address: ${this.address}
        Designation: ${this.designation}
        Salary: ${this.salary}
        `;
        console.log(employeedata);
    }

    //static method
    static getCompanyName(){
        console.log(Person.companyName);
        console.log(Employee.companyNew);
    } 
}

//create an object for employee
let employee1= new Employee("keerthi","22","hyderabad","MERN developer","1000000");
employee1.getDetails();
Employee.getCompanyName();

//create an object for person class
let person1=new Person("ramidi","30","bangalore");
//accessing instance method
//when you call instance always use reference of the object
person1.getDetails();
//calling static method
//when you call static method use class
Person.getCompanyName();