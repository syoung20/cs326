var highlight = function() {
    var regexInput = document.getElementById("regex").value;
    var textInput = document.getElementById("text").value;
    var resultPanel = document.getElementById("resultpanel");
    var par = document.getElementById("result");
    var regerror = document.getElementById("regerror");
    var texterror = document.getElementById("texterror");
    if (regexInput.length > 0) {
        regerror.style.display = "none";
        if (textInput.length > 0) {
            texterror.style.display = "none";
            resultPanel.style.display = "block";
            resultPanel.scrollIntoView();
            var regexObj = RegExp(regexInput, 'g');
            var match = textInput.matchAll(regexObj);
            var text = "";
            var pos = 0;
            for (var m of match) {
                var start = m.index;
                var end = m.index + m[0].length;
                text += (textInput.slice(pos, start) + '<span>' + textInput.slice(start, end) + '</span>');
                var pos = end;
                console.log(text);
            }
            text += textInput.slice(pos, textInput.length);
            par.innerHTML = text;
        } else {
            texterror.style.display = "block";
            par.innerHTML = "";
        }
    } else {
        regerror.style.display = "block";
        par.innerHTML = "";
    }
    
};