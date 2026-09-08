
function add(a,b){
    return a+b

}
console.log("sum:"+add(34,4));

ll even numbers from 1 to n.
let n=20;
function print_number()
{
    for(let i=1;i<n;i++)
    {
        if(i%2==0)
        {
            console.log("even No:"+i);
            
        }
    }
}

print_number();

let fact=1;
let number=5;
let print_fact=()=>
{
    for(let i=1;i<=number;i++)
    {
        fact*=i;
        
        
    }
    console.log("factorial of ",number+":"+fact);
}
print_fact();

var  name1= "hari";
let  name2= "kadhir";
const name3 = "shriram";

console.log(name1);
console.log(name2);
console.log(name3);


function F_scop() {
   
    var  movie_name= "sura";
    let  movie_name2= "the lion king";
    const movie_name3 = "leo";

    
    console.log(movie_name);
    console.log(movie_name2);
    console.log(movie_name3);
}

F_scop();


if (true) {
    var  phone_name= "lavaZ66";
    let  phone_name2= "vivo";
    const phone_name3 = "redmi";

    console.log(phone_name);
    console.log(phone_name2);
    console.log(phone_name3);   

    
}

console.log(phone_name);
console.log(" out side the function didnt print the let and const ");
console.log("but phone1 lava Z66 print because it using var ");

console.log(a);
var a = 10;

console.log(b);
let b = 20;

onsole.log(c);
const c = 30;

hello();

function hello() {
    console.log("Hello");
    
}