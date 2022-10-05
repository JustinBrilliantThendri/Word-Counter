function count1(){
    let val = 0;
    for(i = 0; i < arguments.length; i++){
        val++;
    }
    return val;
}

function count2(){
    let val = 0;
    for(i = 0; i < arguments.length; i++){
        if(arguments[i] != ""){
            val++;
        }
    }
    return val;
}

function count(){
    let text = document.getElementById("text").value;
    let arr_characters = text.split("");
    let arr_words = text.replace(/\n/g, " ").split(" ");
    let characters = count1(...arr_characters);
    let words = count2(...arr_words);
    console.log(arr_words);
    document.getElementById("counter").innerHTML = `${characters} Characters | ${words} Words`;
}