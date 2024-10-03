// Cấu trúc điều khiển If
//Dạng 1: If đơn
    // Cú pháp:
    // if(condition-expression){
    //     block CSSLayerStatementRule;
    // }

//VD: cho số num; kiểm tra số num có là số dương
num = 10;
if(num > 0){
    console.log(num, "là số dương");
}
//nếu num > 0 thì gán lại giá trị num = -100
if(num > 0){
    num = -100;
    console.log(num);
}

//Dạng 2: If...size
num = 12;
//kiểm tra xem số num là chẵn hay lẻ
if(num%2==0){
    console.log(num, "là số chẵn");
}else{
    console.log(num, "là số lẻ");
}

//Dạng 3: If bậc thang - If...Else if
//Kiểm tra số num là số dương, âm hay số 0
if(num>0){
    console.log(num, "là số dương");
}else if(num<0){
    console.log(num, "là số âm");
}else{
    console.log(num, "là số 0");
}

//Dạng 4: Nested If
num1 = 12;
num2 = 15;
//nếu num1 là số chẵn; kiểm tra nếu num2 là số lẻ thì tính res = num1 + num2
if(num2 % 2 == 0){
    if(num2 % 2 == 1){
        res = num1 + num2;
        console.log(res);
    }
}else{
    if(num2 % 2 == 1){
        res = num1 - num2;
        console.log(res);
    }
}

//luyện tập 1: Giải phương trình bậc 1: ax+b=0

if(a==0){
    if(b==0){
        console.log("phương trình vô số nghiệm");
    }else{
        console.log("phương trình vô nghiệm");
    }
}else{
    res = -b / a;
    console.log(res);
}

//luyện tập 2: Giải phương trình bậc 2: ax^2+bx+c=0

if(a==0){
    
}
