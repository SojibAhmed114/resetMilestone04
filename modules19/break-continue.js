// break 
// for (let i = 0; i < 150; i++){
//     console.log(i);
//     if (i >= 10){
//         break;
//     }
// }

//while
// let marks = 1;
// while (marks <= 20){
//     console.log(marks);
//     if (marks >= 10){
//         break;
//     }
//     marks++;
// }



//  continue
// for (let n = 1; n <= 20; n++){
//     if (n % 2 !== 0) {
//         continue;
//     }
//     console.log(n);
// }

let myMarks = 0;
while (myMarks < 50) {
    myMarks++;
    if (myMarks % 5 !== 0) {
        continue;
    }
    console.log(myMarks);
}