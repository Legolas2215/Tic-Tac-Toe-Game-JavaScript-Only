// 1. Click will change image of cross or circle
// 2. Even clicks will give circle and odd cross
// 3. Can be changed only once, either circle or cross
// 4. Outcome: Draw,X win,O win

var buttons = document.querySelectorAll("button").length;

for(var i=0; i<buttons; i++){
    document.querySelectorAll("button")[i].addEventListener("click",ticTac);
}

var count =1;
var arr = [2,2,2,2,2,2,2,2,2];

function ticTac(){
    
    var check = count%2;
    var identify = this.classList[0];
    var i = classToIndex(identify);
    if(check === 0){
        document.querySelectorAll("button")[i].classList.add("circle");
        arr[i] = 0;
    }
    else{
        document.querySelectorAll("button")[i].classList.add("cross");
        arr[i] = 1;   
    }
    document.querySelectorAll("button")[i].removeEventListener("click",ticTac);
    resultCheck();
    


    count+=1;
    

    
}

function classToIndex(identify){
    switch (identify){
        case "a": return 0;
        case "b": return 1;
        case "c": return 2;
        case "d": return 3;
        case "e": return 4;
        case "f": return 5;
        case "g": return 6;
        case "h": return 7;
        case "i": return 8;
    }
}


// Outcome
function resultCheck(){
    if((arr[0]===0) &&(arr[1]===0) && (arr[2]===0)){
        alert("Circle won");
        location.reload(true);
    }
    else if((arr[3]===0) && (arr[4]===0) && (arr[5]===0)){
        alert("Circle won");
        location.reload(true);
    }
    else if((arr[6]===0) && (arr[7]===0) && (arr[8]===0)){
        alert("Circle won");
        location.reload(true);
    }
    else if((arr[0]===0) && (arr[3]===0) && (arr[6]===0)){
        alert("Circle won");
        location.reload(true);
    }
    else if((arr[1]===0) && (arr[4]===0) && (arr[7]===0)){
        alert("Circle won");
        location.reload(true);
    }
    else if((arr[2]===0) && (arr[5]===0) && (arr[8]===0)){
        alert("Circle won");
        location.reload(true);
    }
    else if((arr[0]===0) && (arr[4]===0) && (arr[8]===0)){
        alert("Circle won");
        location.reload(true);
    }
    else if((arr[2]===0) && (arr[4]===0) && (arr[6]===0)){
        alert("Circle won");
        location.reload(true);
    }
    else if((arr[0]===1) &&(arr[1]===1) && (arr[2]===1)){
        alert("X won");
        location.reload(true);
    }
    else if((arr[3]===1) && (arr[4]===1) && (arr[5]===1)){
        alert("X won");
        location.reload(true);
    }
    else if((arr[6]===1) && (arr[7]===1) && (arr[8]===1)){
        alert("X won");
        location.reload(true);
    }
    else if((arr[0]===1) && (arr[3]===1) && (arr[6]===1)){
        alert("X won");
        location.reload(true);
    }
    else if((arr[1]===1) && (arr[4]===1) && (arr[7]===1)){
        alert("X won");
        location.reload(true);
    }
    else if((arr[2]===1) && (arr[5]===1) && (arr[8]===1)){
        alert("X won");
        location.reload(true);
    }
    else if((arr[0]===1) && (arr[4]===1) && (arr[8]===1)){
        alert("X won");
        location.reload(true);
    }
    else if((arr[2]===1) && (arr[4]===1) && (arr[6]===1)){
        alert("X won");
        location.reload(true);
    }
    else{
        var p =0;
        for(var k=0;k<9;k++){
            if(arr[k]!==2){
                p+=1;
            }
        }
        if(p===9){
            alert("Match Draw");
            location.reload(true);
        }
    }
}
