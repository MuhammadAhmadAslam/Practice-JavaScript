let arr = ['ahmed','hammad',1,'3',5,'hammad','hammad',5,1,'3']
let arr1 = []
for (let i = 0; i < arr.length; i++) {
    let flag = false
    for (let j = 0; j < arr1.length; j++) {
        if (arr[i] === arr[j]) {
            flag = true
            
        }
        
    }
    if (flag == false) {
        arr1.push(arr[i])
    }
}
console.log(arr1);


let numArray = [-1,4,7,-2,3,3,-1,-6]
for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] <= 0) {
        console.log(numArray[i]);
       
        break
    }
    
} 


for (let i = 1; i <= 3; i++) {
    for (let j = 0; j <= 10; j++) {
       console.log(`${i} X ${j} = ${i*j}`);
        
    }
    
}

let word = 'Hello World'
console.log(word);
let vowels = ['a','e','i','o','u']
var count = 0
for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        if (word[i].toLowerCase() == vowels[j]) {
            count++
        }
        
    }
    
}
console.log(count);





let str = ''

for (let i = 0; i < word.length; i++) {
    char = word.charAt(i)
    console.log(char);
    if (char === char.toLowerCase()) {
        str +=  char.toUpperCase()
    }else{
        str += char.toLowerCase()
    }
}
console.log(str);



word = 'Hello How Are You? I am fine'
let replace = 'h'
let target = 'o'
let newString = ''
for (let i = 0; i < word.length; i++) {
        if (word.charAt(i) == target) {
            newString += replace
        }else{
            newString += word.charAt(i)
        }
    
}
console.log(newString);


let random = Math.ceil(Math.random() * (30-20+1))+20
// console.log(random);


// This is number of days calculated
var now = new Date()
var now1 = new Date(`07 Feb 2007`)
var cal = Math.floor((now - now1) / (1000*60*60*24))
console.log(cal);

// This is converted in milliseconds to seconds 
var now = new Date();
var now1 = new Date('07 Feb 2007');
var differenceInMs = now - now1;
var differenceInSeconds = Math.floor(differenceInMs/1000); // Convert milliseconds to seconds
console.log(differenceInSeconds);



// This converted millisecnds to minutes 
var now = new Date();
var now1 = new Date('07 Feb 2007');
var differenceInMs = now - now1;
var differenceInMinutes = Math.floor(differenceInMs / (1000 * 60)); // Convert milliseconds to minutes
console.log(differenceInMinutes);



let monthArray = ['January','Feburary','March','April','May','June','July','August','October','November','December']
let format1 = `${now.getDate()}-${monthArray[now.getMonth()]}-${now.getFullYear()}`
console.log(format1);
let format2 = `${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()}`
console.log(format2);


