'use strict'; //forces all variables to be declared

function loadFortune() {
    let rand = getRand(0, 8);

    //choose Prophecy 5 of 9 times, Rambling 3 of 9 times, and Confucious 1 of 9 times
    switch (rand) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            document.getElementById("fortunetext").textContent = loadProphecy();
            break;
        case 5:
        case 6:
        case 7:
            document.getElementById("fortunetext").textContent = loadRambling();
            break;
        case 8:
            document.getElementById("fortunetext").textContent = loadConfucious();
            break;
        default:
            let message = "number " + rand + " not handled";
            alert(message);
            return;
    }

    updateNumbers();
}

function loadProphecy() {
    let subject = getProphecySubject();

    return `${subject} ${getProphecyVerb(subject)} ${getProphecyPredicate()}.`;
}

function loadRambling() {
    return `${getRamblingSubject()} ${getRamblingVerb()} ${getRamblingPredicate()}.`;
}

function loadConfucious() {

    // JavaScript feature fulfillment:
    // Create and populate a JavaScript array with one or more values and
    // display the contents of some or all of the array on your page
    const choices = [
        "Man who stands on toilet is high on pot."
        , "Man who fall into an upholstery machine, eventually be fully recovered."
        , "Man who fall in vat of molten glass make spectacle of self."
        , "Dry cleaner who is in a hurry, will be pressed for time."
        , "Never tell a secret to a pig... it may squeal."
        , "Man who run in front of car get tired. Man who run behind car get exhausted."
        , "Man who sit on tack get point!"
        , "Man who sneezes without tissue takes matters in own hands."
        , "Man who cut self while shaving, lose face."
    ]

    let rand = getRand(0, choices.length - 1);

    return choices[rand];
}

function getProphecySubject() {
    const choices = [
        "You"
        , "You"
        , "A family member"
        , "A personal friend"
        , "A confidant"
        , "Your significant other"
        , "A loved one"
        , "A business associate"
        , "A long-time acquaintance"
        , "A neighbor"
        , "A recent dream"
        , "A stranger"
    ];

    let rand = getRand(0, choices.length - 1);

    return choices[rand];
}

function getProphecyVerb(subject) {

    let adverb = "";

    let rand = getRand(0, 10);
    if (rand > 9)  //randomize if adverb will be used
    {
        const adverbs = [
            "subtlely"
            , "unexpectedly"
            , "graciously"
            , "repeatedly"
        ];
        rand = getRand(0, adverbs.length - 1);
        adverb = adverbs[rand];
    }

    //now get verb

    const verbs = [
        "finds"
        , "shares"
        , "reveals"
        , "confides"
        , "accepts"
        , "receives"
        , "recounts"
        , "expresses"
        , "suggests"
    ];

    rand = getRand(0, verbs.length - 1);

    let choice = verbs[rand];
    if (adverb !== "")
        choice = adverb + " " + choice;

    let isFutureTense = getRand(0, 1);
    if (isFutureTense === 1) {
        choice = "will " + choice;
    }

    if ((subject === "You") || (isFutureTense === 1)) {
        if (getRightChars(choice, 3) === "ses") {
            choice = choice.substring(0, choice.length - 2);
        }
        else {
            choice = choice.substring(0, choice.length - 1);
        }
    }


    return choice;
}

function getProphecyPredicate() {
    const choices = [
        "a worthwhile treasure"
        , "a positive outlook"
        , "inner peace"
        , "the meaning of life"
        , "plans for a vacation"
        , "a new addition to the family"
        , "a welcome change"
        , "a much-needed rest"
        , "a deep-rooted secret"
        , "a pleasant memory"
        , "unresolved issues"
        , "absolutely nothing"
    ];

    let rand = getRand(0, choices.length - 1);

    return choices[rand];
}

function getRamblingSubject() {
    const choices = [
        "Patience"
        , "Self-discovery"
        , "Modesty"
        , "Humility"
    ];

    let rand = getRand(0, choices.length - 1);

    return choices[rand];
}

function getRamblingVerb() {
    const choices = [
        "garners"
        , "evokes"
        , "embodies"
        , "yields"
        , "emboldens"
    ];

    let rand = getRand(0, choices.length - 1);

    return choices[rand];
}

function getRamblingPredicate() {
    const choices = [
        "virtue"
        , "spirit"
        , "mind"
        , "clarity"
        , "peace"
    ];

    let rand = getRand(0, choices.length - 1);

    return choices[rand];
}

function getRightChars(what, howMany) {
    if (!isNumeric(howMany)) {
        let message = "parameter howMany must be a number";
        alert(message);
        return "";
    }

    if (what.length < howMany) {
        let message = "length of string is shorter than howMany parameter";
        alert(message);
        return "";
    }

    return what.substring(what.length - howMany, what.length);
}
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}


function updateNumbers() {
    let candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26
        , 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52];
    let count;
    let returned = [];
    for (count = 0; count < 6; count++) {
        let i = getRand(0, candidates.length - 1);
        returned.push(candidates[i]);
        candidates.splice(i, 1);
    }

    document.getElementById("numberstext").textContent =
        ` ${getNumericDisplay(returned[0])}
        - ${getNumericDisplay(returned[1])}
        - ${getNumericDisplay(returned[2])}
        - ${getNumericDisplay(returned[3])}
        - ${getNumericDisplay(returned[4])}
        - ${getNumericDisplay(returned[5])} `;
}

function getNumericDisplay(what) {
    //forces a (minimum) 2-char representation of a number

    let temp = what.toString();

    if (temp.length > 1) {
        return temp;
    }

    temp = '00' + temp;
    return (temp).substring(temp.length - 2, temp.length);
}

// JavaScript feature fulfillment:
// Create a JavaScript function that performs some form of mathematical operation 
// (calculates something) and displays the result on your page or otherwise uses 
// that value to do something on the site.
function getRand(lower = 0, upper = 1) {
    let seed = Math.random()
    return Math.floor(Math.round(seed * (upper - lower) + lower + 0.5));

    //let seed = new Date().getMilliseconds() * Math.random();
    //return Math.floor(Math.round((seed / 1000) * (upper - lower) + lower + 0.5));
}

window.onload = function () {
    loadFortune();
};
