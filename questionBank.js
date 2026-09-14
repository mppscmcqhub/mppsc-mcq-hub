window.questionBank = {};

// 10 Units × 20 Tests × 20 Questions = 200 Tests

for(let unit=1;unit<=10;unit++){

window.questionBank["unit"+unit]={};

for(let test=1;test<=20;test++){

let questions=[];

for(let q=1;q<=20;q++){

questions.push({

question:`Unit ${unit} | Test ${test} | प्रश्न ${q} / Question ${q}`,

options:[
"A. विकल्प 1 / Option 1",
"B. विकल्प 2 / Option 2",
"C. विकल्प 3 / Option 3",
"D. विकल्प 4 / Option 4"
],

answer:q%4,

explanation:`यह Unit ${unit}, Test ${test}, प्रश्न ${q} की व्याख्या है।`

});

}

window.questionBank["unit"+unit]["test"+test]=questions;

}

}
