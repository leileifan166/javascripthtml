function strlen(str){
    var len;
    var i;
    len = 0;
    for(i = 0; i < str.length; i++){
        if(str.charCodeAt(i) > 255) len += 2;
        else len ++;
    }
    return len;
}

loop:for(var j = 1; j < 6; j++){
    if (j == 2) continue loop;
    document.write("<br>" + j);
}