// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
var synth = window.speechSynthesis;
var textToSpeak = '';
var storyParts = ['', '', '', '', '']; // Array to hold parts of the sentence
var speakButton = document.querySelector('#speak-btn');

// Arrays for random words
var nouns = ['The dog', 'A cat', 'The car', 'A tree', 'The house'];
var verbs = ['runs', 'jumps', 'flies', 'eats', 'sleeps'];
var adjectives = ['quickly', 'happily', 'slowly', 'sadly', 'excitedly'];
var moreNouns = ['a bone', 'some food', 'a book', 'a toy', 'a ball'];
var places = ['in the park', 'at the beach', 'at home', 'in the forest', 'in the yard'];

/* Functions
-------------------------------------------------- */
function speakNow(string) {
    var utterThis = new SpeechSynthesisUtterance(string);
    synth.speak(utterThis);
}

function pickRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function updateStory() {
    document.getElementById('story-text').textContent = storyParts.join(' ') + '.';
}

function addWordToStory(array, index) {
    storyParts[index] = pickRandomWord(array);
    updateStory();
}

function generateRandomStory() {
    storyParts[0] = pickRandomWord(nouns);
    storyParts[1] = pickRandomWord(verbs);
    storyParts[2] = pickRandomWord(adjectives);
    storyParts[3] = pickRandomWord(moreNouns);
    storyParts[4] = pickRandomWord(places);
    updateStory();
}

function resetStory() {
    textToSpeak = '';
    storyParts = ['', '', '', '', ''];
    updateStory();
}

/* Event Listeners
-------------------------------------------------- */
document.getElementById('noun-btn').addEventListener('click', function() {
    addWordToStory(nouns, 0);
});

document.getElementById('verb-btn').addEventListener('click', function() {
    addWordToStory(verbs, 1);
});

document.getElementById('adj-btn').addEventListener('click', function() {
    addWordToStory(adjectives, 2);
});

document.getElementById('noun2-btn').addEventListener('click', function() {
    addWordToStory(moreNouns, 3);
});

document.getElementById('place-btn').addEventListener('click', function() {
    addWordToStory(places, 4);
});

speakButton.onclick = function() {
    textToSpeak = storyParts.join(' ') + '.';
    speakNow(textToSpeak);
};

document.getElementById('random-story-btn').addEventListener('click', function() {
    generateRandomStory();
});

document.getElementById('reset-btn').addEventListener('click', function() {
    resetStory();
});
