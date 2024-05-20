//object

//task#1
type Employees={
  name:string;
  department:string;
  contact?:{
    phone:number;
    email:string;
  };
  role:"Manager"|"Engineer"|"inter";
  skills:string[]
}


let employees :Employees={
     
     name:"Imran",
     
     department:"Record management",
     
     
     role: "Manager",
     skills:["inventory","indexing","scanning","client services"]
     
};
let employees1= {
  name:"Abdullah",
     
  department:"Hr",
  
  
  role: "Manager",
  skills:["manage employee data","data entry","making salary","client services"],
  
  contact:{
     
    Phone:+92869010,
  email:"hr123@gmail.com",
  }
  
};

