
console.log("Question 1");
// 1
    const number = "123";
    console.log(Number(number)+7);
// 1
console.log("Question 2");

// 2
    const checkNumber = 0;
    if(checkNumber>0 && Number.isInteger(checkNumber)){
        console.log('yes');
    }else{
        console.log('Invalid');
        
    }
// 2

console.log("Question 3");
// 3
    for(let i=0;i <=10;i++){
        if(i % 2 == 0) continue
            console.log(i);
    }
// 3

console.log("Question 4");
// 4
    const arrList  = [1,2,3,4,5];
    const arrNum = arrList.filter(num => num % 2 ===0);
 console.log(arrNum);
// 4

console.log("Question 5");
// 5
const x = [1,2,3]
const y = [4,5,6]
let z = [...x,...y]
console.log(z)
// 5

console.log("Question 6");
// 6
const day = 3;
switch(day){
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    case 5:
        console.log('thursday');
        break;
    case 6:
        console.log('friday');
        break;
    case 7:
        console.log('Saturday');
        break;    
    default:
        console.log('Erorr');
        break;                
}
// 6

console.log("Question 7");
// 7
    const word = ["a","ab","abc"];
    const lengths =  word.map((t)=>{
         
        return t.length;
    });
    console.log(lengths);
    
// 7

console.log("Question 8");
// 8
    function dividendNumber(n1){
        if(n1 % 5 == 0 && n1 % 3 == 0){
            console.log("Divisible by both");         
        }else{
            console.log("No Divisible by both");         
        }
    }
    dividendNumber(30);
// 8

console.log("Question 9");
// 9
let num = 5;
 const arroFunction = ()=>{
    console.log(num*5);
     
}
 arroFunction();
// 9

console.log("Question 10");
// 10
let person = {name:"john",age:25}
function objectPerson(){
console.log(`${person.name} is ${person.age} old`)
}
objectPerson()
// 10

console.log("Question 11");
// 11
function numberAddition(...numbers){
   let total = 0;
   for(let num of numbers){
    total +=num;
   }
   return total
}
console.log(numberAddition(1,2,3,4,5))
// 11
console.log("Question 12");
// 12
 function timeOute(callback){
    setTimeout(() => {
        console.log("Success");
        callback()
    }, 0);
}
timeOute(()=>{
    console.log(findMax(myNumber));
})
// 12


// 13
    function findMax(num,callback){
        console.log("Question 13");
        // callback()
        let largest = num[0];
        for(let i=1;i < num.length;i++){
            if(num[i] >largest){
                largest = num[i];
            }
        }
        return largest
    }
    let myNumber = [1,2,3,4,5]

// 13

// 14
    const objectList = {name:"john",age:25}
    function arrObject(){
    // 
    setTimeout(()=>{
  console.log("Question 14");
        let arrSingel1=objectList.name;
        let arrSingel2=objectList.age;
        let arr = String([arrSingel1,arrSingel2]); 
        console.log(arr);
    },2000)

    }
    arrObject();
// 14

// 15
    
    // const textSpace = "The quick brown fox";
    // function textSpaceF(){
    //    console.log("Question 15");
    //    setTimeout(()=>{
        
    //    },10000)
    // }
    // textSpaceF()

    function textSpaceF(){
     const textSpace = "The quick brown fox";
    setTimeout(()=>{
  console.log("Question 15");
        let arrS=textSpace.split(" ");
        console.log(arrS);
    },3000)

    }
    textSpaceF();
// 15



// part 2:Essay Questions
// 1 => forEach هي دالة تستخدم لتنفيذ دالة معينة على كل عنصر في المصفوفة. لا تعيد قيمة، وتستخدم عادةً للتكرار عبر العناصر وإجراء عمليات جانبية مثل الطباعة أو التعديل على العناصر.
// for...of هي دالة تستخدم لتنفيذ دالة معينة على كل عنصر في المصفوفة. تختلف عن forEach في أنها تعيد قيمة، وتستخدم عادةً للتكرار عبر العناصر وإجراء عمليات جانبية مثل الطباعة أو التعديل على العناصر.

// 2 => Hosting هو سلوك في JavaScript حيث يتم رفع تعريفات المتغيرات والدوال إلى أعلى نطاقها قبل تنفيذ الكود. هذا يعني أنه يمكن استخدام المتغيرات والدوال قبل تعريفها في الكود، مما قد يؤدي إلى سلوك غير متوقع إذا لم يتم فهمه بشكل صحيح.
// Temporal Dead Zone (TDZ) هو فترة زمنية في JavaScript حيث لا يمكن الوصول إلى المتغيرات المعلنة باستخدام let و const قبل أن يتم تعريفها. إذا حاولت الوصول إلى هذه المتغيرات قبل تعريفها، ستواجه خطأ ReferenceError. هذا يختلف عن var، حيث يمكن الوصول إلى المتغيرات المعلنة باستخدام var قبل تعريفها بسبب سلوك Hosting.

// 3 => === or ==   الثلاث علامات تساوي تستخدم للمقارنة بين القيم. الفرق بينهما هو أن == يقوم بالمقارنة بعد تحويل الأنواع إذا كانت مختلفة، بينما === يقوم بالمقارنة بدون تحويل الأنواع، مما يعني أنه يتحقق من القيمة والنوع معًا. على سبيل المثال، 5 == "5" سيكون صحيحًا، بينما 5 === "5" سيكون خطأ

// 4 => try-cach هي عبارة عن بنية في JavaScript تُستخدم للتعامل مع الأخطاء أثناء تنفيذ الكود. يتم وضع الكود الذي قد يسبب خطأ داخل كتلة try، وإذا حدث خطأ، يتم الانتقال إلى كتلة catch حيث يمكن التعامل مع الخطأ بشكل مناسب، مثل تسجيله أو عرض رسالة للمستخدم. هذا يسمح للبرنامج بالاستمرار في العمل بدلاً من التوقف فجأة عند حدوث خطأ.

// 5 => type Conversion في JavaScript هو عملية تحويل قيمة من نوع بيانات إلى نوع بيانات آخر. يمكن أن تكون هذه التحويلات صريحة، حيث يقوم المطور بتحويل القيمة باستخدام دوال مثل Number() أو String()، أو ضمنية، حيث يقوم JavaScript بتحويل القيم تلقائيًا عند الحاجة، مثل عند استخدام العمليات الحسابية أو المقارنات بين أنواع مختلفة.
// type Coercion في JavaScript هو عملية تحويل نوع البيانات تلقائيًا من قبل المحرك عند التعامل مع أنواع بيانات مختلفة في العمليات. على سبيل المثال، عند جمع رقم مع سلسلة نصية، يقوم JavaScript بتحويل الرقم إلى سلسلة نصية تلقائيًا. هذا يمكن أن يؤدي إلى نتائج غير متوقعة إذا لم يكن المطور على دراية بكيفية عمل type coercion.