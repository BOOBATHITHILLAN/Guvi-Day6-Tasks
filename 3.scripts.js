// (1) Fix the code to get the largest of three
let aa = (f,s,t) => {
    
    console.log(f,s,t);
    if(f>s &&f>t){
        console.log(f)}
    else if(s>f && s>t){
        console.log(s)}
    else{
        console.log(t)}
};
aa(1,2,3);

//(2) Fix the code to Sum of the digits present in the number
let n = 123;
console.log(add(n));
function add(n)
{
  let sum =0;
  let Out=n;
    while(Out>0){
    let  num=Out%10;
    Out=Math.floor(Out/10);
    sum=sum+num;
 } return sum;
}

//(3) Fix the code to Sum of all numbers using IIFE function
var arr = [9,8,5,6,4,3,2,1];
(function(arr) {
let sum = 0;
for (var i = 0; i < arr.length; i++){
    sum += arr[i];
}
console.log(sum);

})(arr);

//(4) Fix the code to gen Title caps
var arr = ["guvi", "geek", "zen", "fullstack"];
var ano = function(arro) {
 for (let i = 0; i < arro.length; i++) {
 console.log(arro[i][0].toUpperCase() + arro[i].substr(1));}
}
ano(arr);

//(5) Fix the code to return the Prime numbers
const newArray=[1,3,2,5,10,11];
const myPrime=newArray.filter(num=>{
    let count=0;
    for(let i=1;i<=num;i++){
        if(num%i===0)
        {
            count+=1;
        }
    }
    if(count===2){
        return true;
    }else{
     return num===1;   
    }
 
});
console.log(myPrime);

//(6) Fix the code to sum the number in that array
const num = [10, 20, 30, 40,50,60,70,80,90,100];
const sum = (a) =>{
 let Sum=0;
 for(let i of a){
     Sum=Sum+i;
 }
 return Sum;
};
console.log(sum(num));

//(7) Fix the code to rotate an array by k times and return rotated array using IIFE function
let InputArr=[1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13]; ;
let K=3;
let RotateArray= function(e,k){
    k=k%e.length;
    let Remove=e.splice(-k);
    e.unshift(...Remove);
    return e;
    
 }
console.log(RotateArray(InputArr,K))

//(8) print all odd numbers in an array using IIFE function
var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function(arr) {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 !== 0) {
 console.log(arr[i]);
 }}
})(arr);

//(9) Fix the code to reverse.
(function(str){
    str1 = str.split("").reverse().join("");
    console.log(str1); 
   })("abcd");

//(10) Fix the code to find Sum of odd numbers in an array
var as=[12,34,5,6,2,56,6,2,1];
var s=as.reduce(function(a,c){
 if(c%2!=0)
 {
 return a+c;
 }
 return a;},0);
console.log(s);


