


// // ex1

// console.log("test 1")
// console.log("test 2")
// setTimeout(()=>{
//     console.log("test 3")
// },2000)
 


// console.log("test 4")




// // ex2

// const timer =(ms)=>{
//     return new Promise((delay)=> setTimeout(delay, ms))
// }

// const iteraiwith = async (arr)=>{
//     for (var val of arr){
//         console.log(val)
//         await timer(2000)
//     }
// }

// iteraiwith(["fawzi" , "monir" , "Ryadh" ])



// ex3

const getData =()=>{
    return new Promise((delay)=>
     setTimeout(()=>{
        delay({data:"getting data from API"},1000)
     }) )
}

const awaitCall = async(arr)=>{
    try{
        const res = await getData()
        console.log(res.data)
    }       
    catch(err){
        console.error("API Error" , err)
    }
}

awaitCall()



// // ex3 Palrt 2

// async function asyncFunction1() {
//     return new Promise(res => {
//         setTimeout(() => {
//             console.log("Function 1 completed");
//             res();
//         }, 1000);
//     });
// }

// async function asyncFunction2() {
//     return new Promise(res => {
//         setTimeout(() => {
//             console.log("Function 2 completed");
//             res();
//         }, 1000);
//     });
// }

// async function asyncFunction3() {
//     return new Promise(res => {
//         setTimeout(() => {
//             console.log("Function 3 completed");
//             res();
//         }, 1000);
//     });
// }


// async function chainedAsync() {
//     await asyncFunction1();
//     await asyncFunction2();
//     await asyncFunction3();
// }


// chainedAsync();



async function concurentRequest1() {
    return new Promise(res => {
        setTimeout(() => {
            console.log("Repanse from API 1");
            res();
        }, 1000);
    });
}


async function concurentRequest2() {
    return new Promise(res => {
        setTimeout(() => {
            console.log("Repanse from API 2");
            res();
        }, 2000);
    });
}


async function ResultAPI() {
    await concurentRequest1();
    await concurentRequest2();
    
}


ResultAPI()




