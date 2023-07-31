var scores = JSON.parse(localStorage.getItem("scores"))
var scoresUl = document.querySelector(".scoresUl")
var clearBtn = document.querySelector(".clearBtn")

if(scores) {
    for(let i = 0; i < scores.length; i++) {
        var scoreLi = document.createElement("li")
        scoreLi.innerHTML = scores[i].initial + "-" + scores[i].score
        scoresUl.append(scoreLi)
    }
}

clearBtn.addEventListener("click", function(event) {
    event.preventDefault
    localStorage.clear()
    window.location.reload()
})