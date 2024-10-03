//Toán tử, toán hạng, kiểu thực, câu lệnh, khối lệnh
//1. toán tử_số học:"+,-,*,/,%"
var num1, num2;
//gán giá trị
num1="12";
num2="25";
//thực hiện các phép tính toán số học
res=num1 * num2;
console.log(num1, "*", num2, "=", res);
res=num1 / num2;
console.log(num1, "/", num2, "=", res);
res=num1 + num2;
console.log(num1, "+", num2, "=", res);
res=num1 - num2;
console.log(num1, "-", num2, "=", res);
res=num1 % num2;
console.log(num1, "%", num2, "=", res);

//2. phép toán ss trả về giá trị kiểu boolen (true/fale)
//<,<=,>,>=,==,===,!=,!==
res = num1 > num2;
console.log(num1, ">", num2, "=", res);
res = num1 < num2;
console.log(num1, "<", num2, "=", res);
res = num1 >= num2;
console.log(num1, ">=", num2, "=", res);
res = num1 <= num2;
console.log(num1, "<=", num2, "=", res);
res = num1 == num2;
console.log(num1, "==", num2, "=", res);
res = num1 === num2;
console.log(num1, "===", num2, "=", res);

num1 = "12";
num2 = "12";
res = num1 == num2;
console.log(num1, "==", num2, "=>", res);
res = num1 === num2;
console.log(num1, "===", num2, "=>", res);

//3. toán tử logic - thập phân (and &&, or ||, not !)
num1 = "12";
num2 = "15";
res = (num1>10) && (num2<10)
console.log("(num1>10) && (num2<10)=>",res);
res = (num1>10) || (num2<10)
console.log("(num1>10) || (num2<10)=>",res);

//4. toán tử đặc biệt
res = (num1>10)?"Giá trị lớn hơn":"nhỏ hơn";
console.log(res);
res = (num2 % 2 == 0)?"số chẵn":"Số lẻ";
console.log(num2,"là",res);

// typeof
res = typeof(num1); //number
console.log("typeof(num1):",res);

num1 = "123456";
res = typeof(num1); //string
console.log("typeof(num1):",res);