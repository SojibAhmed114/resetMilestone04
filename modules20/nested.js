const college ={
    name  : 'vnc',
    class : ["11", '12'],
    events : ['science fair', 'bijoy dibos', '21 feb'],
    unique: {
        color: 'blue',
        result :{
            gpa: 5,
            merit: 'top'
        }
    }
}

delete college.unique
console.log(college);
// output: {
//     name: 'vnc',
//     class: [ '11', '12' ],
//     events: [ 'science fair', 'bijoy dibos', '21 feb' ]
//   }

console.log(college.unique.result.gpa);
console.log(college.events[2]);