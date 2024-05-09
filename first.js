// let show = document.querySelector('.show');
let rows = window.prompt("enter a number of rows");
//outer loop define how many rows in our pattern
for (let i = 1; i <= rows; i++) {

    //inner loop to print number
    for (let num = 1; num <= i; num++) {
        document.write(num)
    }
    //inner loop to print *
    for (let j = 1; j <= rows - i; j++) {
        document.write('*');
    }

    document.write('<br>');
    // console.log('loop is running');    
}

document.write('<br>');

//2nd approach triangle pattern
for (let i = 1; i <= rows; i++) {

    for (let num = 1; num <= i; num++) {
        document.write(i)
    }
    document.write('<br>');
}

document.write('<br>');


//3rd approach every times print a new character
let a = 1;
//outer loop is responsible for number of rows
for (let i = 1; i <= rows; i++) {

    for (let num = 1; num <= i; num++) {
        document.write(a);
        a++;
    }

    document.write('<br>');

}

document.write('<br>');

//4th approach is the reverse of 3rd approach

for (let i = 1; i <= rows; i++) {
    let b = 1;
    for (let num = rows; num >= i; num--) {
        document.write(b);
        b++;

    }
    document.write('<br>');
}

document.write('<br>');

//5th approach draw a pyramid with odd numbers

//// Define the number of rows for the pattern

for (let i = 1; i <= rows; i++) {
    let c = 1;
    for (let p = 1; p <= i; p++) {
        document.write(c);
        c += 2;
    }
    document.write('<br>');
}

document.write('<br>');


//6th approach to draw a pyramid
for (let i = 1; i <= rows; i++) {
    for (let space = rows; space > i; space--) {
        document.write('* ');
    }
    for (let alphabate = 1; alphabate <= ((2 * i) - 1); alphabate++) {
        document.write('A');
    }
    document.write('<br>');

}

document.write('<br>');
//7th approach print the previous using number system 
for (let i = 1; i <= rows; i++) {
    let a = 1;
    for (let star = rows; star > i; star--) {
        document.write('*');
    }
    for (let number = 1; number <= ((2 * i) - 1); number++) {
        document.write(a);
        a += 2;
    }
    document.write('<br>');
}


document.write('<br>');
//8th approach using serial number system like 12345 
let f = 1;
for (let i = 1; i <= rows; i++) {
    for (let star = rows; star > i; star--) {
        document.write('*');
    }
    for (let number = 1; number <= ((2 * i) - 1); number++) {
        document.write(f);
        f++;
    }
    document.write('<br>');
}


document.write('<br>');
//9th approach square star pattern
for (let i = 1; i <= rows; i++) {
    for (let star = 1; star <= rows; star++) {
        document.write('*');
    }
    document.write('<br>');
}


document.write('<br>');
//10th approach square border with star pattern
for (let i = 1; i <= rows; i++) {
    for (let print = 1; print <= rows; print++) {
        if (i == 1 || i == rows) {
            document.write('*')
        } else {
            if (print == 1 || print == rows) {
                document.write('*');
            }else{
                document.write('&nbsp&nbsp');
            }
        }
    }
    document.write('<br>');
}

document.write('<br>');

//1th approach 
for (let i = 1; i <=rows; i++) {
     for (let space = rows; space > i ; space--) {
           document.write('&nbsp&nbsp');  
     }
     for (let star = 1; star <= i ; star++) {
            document.write('*');
        
     }
     document.write('<br>');
    
}

document.write('<br>');

//12th approach for pyramid pattern with *
for (let i = 1; i <= rows; i++) {
   for (let space = rows; space>i; space--) {
     document.write('&nbsp&nbsp');
   } 
   for (let star = 1; star <= ((2*i)-1) ; star++) {
       document.write('*');
   }
   document.write('<br>');
} 

document.write('<br>');
//13th approach start from 5 to 1
for (let i = rows; i >= 1 ; i--) {
    for (let num = rows; num > rows-i; num--) {
       document.write(num);
    }
    document.write('<br>');
}
document.write('<br>');

//14th approach 
for (let i = rows; i >= 1; i--) {
    for (let num = rows; num > rows-i; num--) {
         document.write(num);
    }
    document.write('<br>');
    rows--;
    
}
 document.write('<br>');
