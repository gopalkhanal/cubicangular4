export interface IEmployee {
    // interface is a specification with some properties and methods. 
    // Any class implementing this interface comits to implementing the specification 
    // interfaces are generallay used as data types 

    Id: number;
    Name: String;
    Email : String;
    PhoneNumber : Number;
    Status : String;
    Grade: Number;
    Salary : number;
    imageUrl : string;
}