function loadFortune() {
    var rand = getRand(0, 8);

    switch (rand) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            fortunetext.innerHTML = loadProphecy();
            break;
        case 5:
        case 6:
        case 7:
            fortunetext.innerHTML = loadRambling();
            break;
        case 8:
            fortunetext.innerHTML = loadConfucious();
            break;
        default:
            var message = "number " + rand + " not handled";
            alert(message);
            return;
    }

    updateNumbers();
}

function loadProphecy() {
    var subject = getProphecySubject();
    var message = subject + " " + getProphecyVerb(subject);
    message += " " + getProphecyPredicate() + ".";

    return message;
}

function loadRambling() {
    return getRamblingSubject() + " " + getRamblingVerb() + " " + getRamblingPredicate() + ".";
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

    var rand = getRand(0, choices.length - 1);

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
    ];

    var rand = getRand(0, choices.length - 1);

    return choices[rand];
}

function getProphecyVerb(subject) {
    const choices = [
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

    var rand = getRand(0, choices.length - 1);

    var choice = choices[rand];

    var isFutureTense = getRand(0, 1);
    if (isFutureTense === 1) {
        choice = "will " + choice;
    }

    if ((subject === "You") || (isFutureTense === 1)) {
        if (choice.substring(choice.length - 3, 3) === "ses") {
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
        , "vacation plans"
        , "a new addition to the family"
        , "a welcome change"
        , "a much-needed rest"
        , "a deep-rooted secret"
    ];

    var rand = getRand(0, choices.length - 1);

    return choices[rand];
}

function getRamblingSubject() {
    const choices = [
        "Patience"
        , "Self-discovery"
    ];

    var rand = getRand(0, choices.length - 1);

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

    var rand = getRand(0, choices.length - 1);

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

    var rand = getRand(0, choices.length - 1);

    return choices[rand];
}

function updateNumbers() {
    var allowed = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26
        , 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52];
    var count;
    var returned = [];
    for (count = 0; count < 6; count++) {
        var i = getRand(0, allowed.length - 1);
        returned.push(allowed[i]);
        allowed.splice(i, 1);
    }

    numberstext.innerHTML = getNumericDisplay(returned[0])
        + "-" + getNumericDisplay(returned[1])
        + "-" + getNumericDisplay(returned[2])
        + "-" + getNumericDisplay(returned[3])
        + "-" + getNumericDisplay(returned[4])
        + "-" + getNumericDisplay(returned[5]);
}

function getNumericDisplay(what) {

    var temp = '' + what;

    if (temp.length === 2)
    {
        return temp;
    }

    temp = '0' + temp;
    return (temp).substring(temp.length - 2, 2);
}

// JavaScript feature fulfillment:
// Create a JavaScript function that performs some form of mathematical operation 
// (calculates something) and displays the result on your page or otherwise uses 
// that value to do something on the site.
function getRand(lower = 0, upper = 1) {
    var seed = new Date().getMilliseconds() * Math.random();
    return Math.floor(Math.round((seed / 1000) * (upper - lower) + lower + 0.4));
}

window.onload = function () {
    loadFortune();
};
