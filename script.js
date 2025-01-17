// START //
// symbol/slogan & form from the starting menu
const heading = document.querySelector('#heading');
const slogan = document.querySelector('#slogan');
const form = document.querySelector('#capoot-form');
// help button, symbol(?) & box
const helpButton = document.querySelector('#help-button');
const helpQuestion = document.querySelector('#help-question');
const help = document.querySelector('#help');
// collection w/ the 2 mode buttons
const modes = document.querySelectorAll('input[name=mode]');
// user mode (classic vs. filtered)
let userMode = '';
// collection w/ the 12 button notes
const buttonNotes = document.querySelectorAll('#powerchords > input');
// user chords display
const inputDisplay = document.querySelector('#input-display');
// 'confirm' button
const confirm = document.querySelector('#confirm');
// 'reset' button
const reset = document.querySelector('#reset');

// RESULT //
// user chords display
const userDisplay = document.querySelector('#user-display');
// success vs. error views
const success = document.querySelector('#success');
const error = document.querySelector('#error');
// fret & capo notes display
const fret = document.querySelector('#fret');
const resultDisplay = document.querySelector('#result-display');
// 'menu' button
const menu = document.querySelector('#menu');

// array w/ the inserted notes
let userNotes = [];

// list of slogans & random select
const slogans = [
    "Add that extra flavor with a <span class='capo'>capo</span> and some open chords!", 
    "Grab your <span class='capo'>capo</span> and play like any good camper would!", 
    "Join the 'needs more <span class='capo'>capo</span>' revolution!", 
    "From power chords to open chords in 0.<span class='capo'>capo</span> seconds!",
    "Unlock campfire magic with your <span class='capo'>capo</span>!",
    "Because everything's better with a <span class='capo'>capo</span>!",
    "Your <span class='capo'>capo</span>: the ultimate chord cheat code!",
    "Strum smarter, not harder — use a <span class='capo'>capo</span>!"
]

function randomSlogan(){
    const randomIndex = Math.floor(Math.random() * slogans.length);

    slogan.innerHTML = slogans[randomIndex];
}

randomSlogan();

// show/hide help box
helpButton.addEventListener('click', function() {
    help.classList.toggle('d-none');
    helpQuestion.classList.toggle('help-clicked');
})

// each entered note will be displayed below
for (n of buttonNotes){
    const noteValue = n.value;
    n.addEventListener('click', function(){
        if (inputDisplay.childElementCount <= 8){
            let newNote = document.createElement('span');
            newNote.classList.add('note-user');
            newNote.textContent = noteValue;
            inputDisplay.appendChild(newNote);
            userNotes.push(noteValue)
        }
    })
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    if (userNotes.length >= 2){
        // update the RESULT user notes display
        userDisplay.innerHTML = inputDisplay.innerHTML;

        // update the userMode
        for (m of modes){
            if(m.checked){
                userMode = m.value;
            }
        };
        
        heading.classList.add('hide');
        form.classList.add('hide');

        const transp = transposer(userMode);

        if (transp){
            fret.innerHTML = `<span class="note-user note-user-extra">${transp.fret}</span>`;

            for(n of transp.notes){
                const capoNote = document.createElement('span');
                capoNote.innerHTML = `<span class="note-user note-user-extra">${n}</span>`;
                resultDisplay.append(capoNote);
            }

            success.classList.remove('hide');
        } else {
            error.classList.remove('hide');
        }

        result.classList.remove('hide');
    }
})

// reset the note display
reset.addEventListener('click', function(){
    while (inputDisplay.childElementCount){
        inputDisplay.removeChild(inputDisplay.lastElementChild);
    }
    userNotes = [];
})

// return to the starting menu view
menu.addEventListener('click', function(){
    // reset all displays
    inputDisplay.innerHTML = '';
    resultDisplay.innerHTML = '';
    fret.innerHTML = '';
    userNotes = [];
    
    randomSlogan();

    if (!success.classList.contains('hide')) success.classList.add('hide');
    if (!error.classList.contains('hide')) error.classList.add('hide');

    result.classList.add('hide');
    heading.classList.remove('hide');
    form.classList.remove('hide');
})

// CAPO CALCULATOR //

const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

// CDEFGAB
const rootNotes = ["C", "D", "E", "F", "G", "A", "B"];
const rootIndex = [
    {
        index: 0,
        note: "C"
    },
    {
        index: 2,
        note: "D"
    },
    {
        index: 4,
        note: "E"
    },
    {
        index: 5,
        note: "F"
    },
    {
        index: 7,
        note: "G"
    },
    {
        index: 9,
        note: "A"
    },
    {
        index: 11,
        note: "B"
    },
]

// CDEGA
const filteredNotes = ["C", "D", "E", "G", "A"];
const filteredIndex = [
    {
        index: 0,
        note: "C"
    },
    {
        index: 2,
        note: "D"
    },
    {
        index: 4,
        note: "E"
    },
    {
        index: 7,
        note: "G"
    },
    {
        index: 9,
        note: "A"
    }
]  

function isOption(input, options){
    // Checks if the <input> belongs to the valid <options>
    for (i of input){
        if (!options.includes(i)){
            return false;
        }
    }
    return true;
}

function transposer(mode){
    // Transpose the note progression until all notes are within a set of notes
    // - only checks until the 12h fret (including) -

    let checkNotes = [];
    if (mode === 'classic'){
        checkNotes = rootNotes;
    } else if (mode === 'filtered'){
        checkNotes = filteredNotes;
    }

    const userNotesIndex = userNotes.map(n => {return {index: notes.indexOf(n), note: n}}); //  Same format as rootNotes

    fretCounter = 0;
    while(true){
        fretCounter ++; // Update the counter (+1)
        
        for (n of userNotesIndex){
            n.index += 1;
            n.index %= notes.length; // Make the index stay within the list range
            n.note = notes[n.index]; // Update the note according to the new index
        }

        let capoNotes = userNotesIndex.map(n => n.note); // Array w/ just the transposed notes

        // Check if all the transposed notes are root notes (until the 12th fret)
        if (isOption(capoNotes, checkNotes)){
            return {
                fret: fretCounter,
                notes: capoNotes
            }
        } else if (fretCounter >= 12){
            return false
        }
    }
    
}