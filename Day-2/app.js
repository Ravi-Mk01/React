
/*
=====================================================
PRACTICE 1: JSX
=====================================================
*/

const name = "Ravi";
const age = 22;
const city = "Indore";

function Example() {

    return (
        <div>
            <h2>JSX Practice</h2>
            <p>Name : {name}</p>
            <p>Age  : {age > 18 ? 'Adult' : 'Minor'}</p>
            <p>Address : {city}</p>
            <p>
                Uppercase Name: {name.toUpperCase()}
            </p>
        </div>
    );
}
const a = 10;
const b = 30;
function Caculate() {
    return (
        <div>
            <p>Addition:{a + b} </p>
            <p>Division: {a / b}</p>
            <p> Subtraction: {a - b}</p>
        </div>
    );
}

//JSX Lists----

const skills = ["Java", "Spring Boot", "MySQL", "React"];
function Skills() {
    return (
        <>
        <h1>Skills ---</h1>
        <ul>
            {skills.map(skill => (
                <li key={skill}>{skill}</li>
            ))}
        </ul>
        </>
    );
}

const fruits = ["Apple", "Mango", "Banana", "Orange"];
function Fruits(){
    return (
        <>
        <h1>List of Fruits---</h1>
        <h1></h1>
        <ul>
            {fruits.map(fruit =>(
                <li key={fruit}>{fruit}</li>
            ))}
        </ul>
        </>
    );
}

const students = [
    { name: "Ravi", age: 22 },
    { name: "Amit", age: 23 },
    { name: "Rahul", age: 21 }
];

function Students(){
    return(
        <>
         <h3>--List Of Students---</h3>
         {
            students.map(student => (
                  <li key={student.name}>{student.name} - {student.age}</li>
            ))
         }
        </>
    );
}

// Student Card

const student = {
    name: "Ravi",
    age: 22,
    course: "Java Full Stack",
    city: "Indore"
};

function StudentCard(){
    return(
        <>
          <h2>Student Profile</h2>
          <br></br>
          <p>Name : {student.name}</p>
          <p>Age :  {student.age}</p>
          <p>Course : {student.course}</p>
          <p>City : {student.city}</p>
        </>
    );

}


// Product Card

// const product = {
//     name: "Laptop",
//     price: 50000,
//     available: false
// };

// function ProductCard(){
//     return(
//     <>
//       <h2>Product Details..</h2>
//       <p>{product.name}</p>
//       <p>{product.price}</p>
//       <p>{product.available ? "Available" : "Unavailable"}</p>
      
//     </>
//     );
// }

// Student Dashboard----
const studentDetail = {
    name: "Ravi",
    age: 22,
    course: "Java Full Stack",
    skills: ["Java", "Spring Boot", "MySQL", "React"],
    isPlaced: false
};

function StudentDashBoard(){
    return(
        <>
        <h1>Student Dashboard</h1>
        <ul>
            <li>Student Name : {studentDetail.name}</li>
            <li>Age          : {studentDetail.age}</li>
            <li>Course       : {studentDetail.course}</li>
            <li>
                Skills
                <ul>
               {
                 studentDetail.skills.map(skill =>(
                    <li key={studentDetail.name}>{skill}</li>
                 ))
               } 
            </ul></li>
            <li>{studentDetail.isPlaced ? "Placed" : "Not Placed "}</li>
        </ul>
        </>
    );
}

/*
=====================================================
PROPS WITH JSX
=====================================================
*/


function ProductCard(props){
    return(
    <>
      <h2>Product Details..</h2>
      <p>{props.name}</p>
      <p>{props.price}</p>
      <p>{props.available ? "Available" : "Unavailable"}</p>
      
    </>
    );
}

// Employee Props Destructuring

function Employee({name,role,salary,experience}){
    return(
       <>
         <h1>Employee Details</h1>
         <p>Name : {name}</p>
         <p>Role : {role}</p>
         <p>Salary : {salary}</p>
         <p>Experience : {experience}</p>
       </>
    );
}

// 
// As an Objcte
const employee = {
    name: "Amit",
    role: "Java Developer",
    salary: 30000,
    experience: 2
};




function App() {

    return (

        <div className="container">

            <h1>React Lecture 02 Practice</h1>

            {/* <Example />
            <Caculate />
            <Skills />
            <Fruits /> 
            <StudentCard/>
            <StudentDashBoard/>*

            <ProductCard name= "Laptop" price= {50000} available={false} />

              <Employee
            name="Amit"
            role="Java Developer"
            salary={30000}
            experience={2}
        />*/}


        <Employee
            name={employee.name}
            role={employee.role}
            salary={employee.salary}
            experience={employee.experience}
        />

        </div>

    );
}








/*
=====================================================
RENDER APP
=====================================================
*/

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(<App />);
