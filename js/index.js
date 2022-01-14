var pressCount = 0

function increaseButtonCounter() {
    pressCount+=1;

    document.getElementById("press_counter_description").innerHTML = "You have pressed the button " + pressCount + " times";
}

let wordList = [
    'dirt',
    'drain',
    'school',
    'clay',
    'craftsman',
    'solid',
    'beer',
    'session',
    'tropical',
    'stunning',
    'enhance',
    'present',
    'predict',
    'assignment',
    'debt',
]

function getRandomWord() {
    return wordList[Math.floor(Math.random() * wordList.length)]
}

function fillWordList() {
    document.getElementById("random_word_list").querySelectorAll("*").forEach(function(node) {
        node.innerHTML = getRandomWord();
    })
}