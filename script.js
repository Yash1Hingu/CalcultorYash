var button = document.querySelectorAll(".number");
var output = document.querySelector('.display');
var allCleanBtn = document.querySelector('.allClean');
var cancelBtn = document.querySelector('.cancel');
var opration = document.querySelectorAll('.opration');
var run = document.querySelector('.equal');
var rightbracket = document.querySelector('.rightbracket');
var leftbracket = document.querySelector('.leftbracket');

var oprationShow = (op)=>{
    if(op.classList.contains('Addition')) {
        output.value += '+';
    } else if(op.classList.contains('subtraction')) {
        output.value += '-';
    } else if(op.classList.contains('multiplaction')) {
        output.value += 'x';
    } else if(op.classList.contains('division')) {
        output.value += op.innerHTML;
    } else if (op.classList.contains('moduls')) {
        output.value += '%';
    } else if (op.classList.contains('point')) {
        output.value += '.';
    }
}
button.forEach(btn=>{
    btn.addEventListener('click',()=>{

        // output empty and btn value zero than no op.
        if(!(output.value == '' && btn.value == 0)) {
            output.value += btn.value;
        }
    })
})

allCleanBtn.addEventListener('click',()=>{

    output.value = '';
    bracketflag = true;
    
})

cancelBtn.addEventListener('click',()=>{

    let equation = output.value;

    if(equation.length > 0){

        equation = equation.substring(0,equation.length-1);
        output.value = equation;

    }
})

opration.forEach((op)=>{

    op.addEventListener('click',()=>{

        oprationShow(op);

    });
})

String.prototype.replaceAt = function (index,replacement) {

    return this.substring(0,index) + replacement + this.substring(index + 1);

}

run.addEventListener('click',()=>{

    if(output.value != '') {

        let stringAns = output.value;

        for(let i = 0;i < stringAns.length;i++) {

            if(stringAns[i] === "÷") {

                stringAns = stringAns.replaceAt(i,'/');


            } else if (stringAns[i] === 'x') {

                stringAns = stringAns.replaceAt(i,"*");

            }  else if(stringAns[i] === ")") {

                if((stringAns[i-1] > '0' & stringAns[i-1] < '9') & (stringAns[i+2] > '0' & stringAns[i+2] < '9') & (stringAns[i+1] === '(')) {

                    stringAns = stringAns.substring(0,i+1)+"*"+stringAns.substring(i+1);

                } else if((stringAns[i-1] > '0' & stringAns[i-1] < '9') & (stringAns[i+1] > '0' & stringAns[i+1] < '9')) {
                    
                    stringAns = stringAns.substring(0,i+1)+"*"+stringAns.substring(i+1);

                }

            } else if(stringAns[i] === "(") {

                if((stringAns[i-1] > '0' & stringAns[i-1] < '9') & (stringAns[i+1] > '0' & stringAns[i+1] < '9')) {

                    stringAns = stringAns.substring(0,i)+"*"+stringAns.substring(i);

                }
            }
        }

        let ans = eval(stringAns);
        output.value = ans;
    }
})


rightbracket.addEventListener('click',()=>{
    output.value +=  rightbracket.innerHTML;
})
leftbracket.addEventListener('click',()=>{
    output.value +=  leftbracket.innerHTML;
})
