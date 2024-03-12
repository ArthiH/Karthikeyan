// function callbackFunction(){
//     console.log('I am  a callback function');
// }

// // higher order function
// function higherOrderFunction(func){
//     console.log('I am higher order function')
//     // func()
// }


// higherOrderFunction(callbackFunction());

// const x = document.getElementsByTagName("h1");
// console.log(x.innerHTML);
// document.getElementById("demo").innerHTML = 
// 'The first paragraph (index 0) with class="intro" is: ' + x.innerHTML;
// const a=[2,3,4]
// console.log(typeof a);


// const y =document.getElementsByClassName("intro")
// const y =document.querySelectorAll("#intro")
// const z=document.getElementById("demo")
// z.innerHTML="Otuput : just for chechking:"+y[2].innerHTML

// class name



// const a=document.createElement("div")
// a.id="just"
// document.getElementById("just").innerHTML="just for checking"
// // console.log(b);
// // b.innerHTML="just for checking"
// // a.append(b)
// document.body.appendChild(a)

// const b = document.createElement("div");
// b.id = "just";
// b.innerHTML="just for checking"
// b.style.height = "200px";
// b.style.width = "200px";
// b.style.backgroundColor = "red";
// // document.body.appendChild(b);

// const c = document.createElement("div");
// const para=document.createElement("p")
// para.id = "now";
// para.innerHTML="now try :"+b.innerHTML
// c.append(para)
// b.append(c)
// document.body.append(b)



let b=5;
// const a=prompt("enter a value")
const a=parseInt(prompt("enter a value"))
const c=parseInt(prompt("enter a value"))
console.log(typeof a);
b+=a
console.log(b);