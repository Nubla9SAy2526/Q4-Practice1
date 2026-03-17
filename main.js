function checkAge () {
    let age = Number(document.getElementById("age").value);
        
        if (age >= 18) {
            document.getElementById("status").innerHTML=
            "Status: You are eligible to vote.";
        }

        else {
            document.getElementById("status").innerHTML=
            "Status: You are not eligible to vote.";
        }
}

function checkAvg () {
    let grade = document.getElementById("avg").value;
        if (grade >= 94 && grade <= 100) {
            window.alert ("Excellent!");
        }

        else if (grade >= 87 && grade <= 93) {
            window.alert ("Above Standard!");
        }

        else if (grade >= 80 && grade <= 86) {
            window.alert ("Standard!");
        }

        else if (grade >= 75 && grade <= 79) {
            window.alert ("Needs Improvement!");
        }

        else {
            window.alert ("Failed!");
        }
}   