const message1 = [
    "Good morning,",
    "Goodbye,",
    "How are you?"
];

const message2 = [
    "which building are you studying in today,",
    "I heard you were sick,",
    "do you want to grab something to eat later,"
];

const message3 = [
    "I want to discuss a few things with you.",
    "see you later",
    "have a great day"
];

const randomIndex = arr => Math.floor(Math.random() * arr.length);
// console.log(randomIndex(message2));
// console.log(message2[randomIndex(message2)]);

const getRandomElement = arr => arr[randomIndex(arr)];

const getRandomMessage = (greeting, content, ending) => {
    return `${getRandomElement(greeting)} ${getRandomElement(content)} ${getRandomElement(ending)}`
};

console.log(getRandomMessage(message1, message2, message3));