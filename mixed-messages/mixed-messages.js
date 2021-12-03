// This is a random love message generator set to woo your lover or significant other
// Format: "${pet name}, ${love message} and ${reassuring phrase}"

// Arrays to store message components
const petNames = ['sweetie', 'honey', 'darling', 'baby', 'babe', 'sweetheart', 'princess',
    'beautiful', 'cutiepie', 'precious', 'sunshine', 'love', 'amore', 'bella', 'queen',
    'peach', 'goddess', 'angel', 'apple of my eye', 'marshmallow'
];

const messages = ['I Love You', 'You are the Love of My Life', 'I will always Love You',
    'I am not going to stop loving you', 'You are the most precious person in my life',
    'You complete me', 'I do not know what I would do without you', 'I would be lost without you',
    'I have fallen in love with you', 'I am falling in love with you', 'Loving you is easy',
    'I am in love with you', 'I cannot imagine my life without you', 'You are my life partner',
    'You are my soulmate', 'You are my everything', 'I simply adore you', 'I love everything you do',
    'I love you just the way you are', 'You are perfect', 'I would not change anything about you',
    'I would do anything for you', 'I would take a bullet for you', 'You are so adorable',
    'You have my heart', 'You hold the keys to my heart', 'You are so sexy', 'You have the best smile',
    'You are my best friend', 'You are my sunshine', 'You light up my darkest days',
    'You are the moon and the stars', 'You light up the darkest nights', 'You are my guiding light',
    'You feel like home', 'You take my breath away', 'You make my heart flutter',
    'I love you even more than I love pizza', 'You make me so happy', 'Seeing you makes my day',
    'You are my paradise', 'Te Amo mi Amor', 'Ti Amo', 'You are my one and only' 
];

const reassurances = ['I am serious about this', 'I swear', 'I promise', 'I am not going anywhere',
    'I want to spend the rest of my life with you', 'I am not going to give up on us',
    'we can make it work', 'I am in it for the long run', 'I mean every word', 'this is not a joke',
    'I Love You'
];

const punctiation = ['.', '!'];

function generatePetName() {
    return petNames[Math.floor(Math.random() * petNames.length)];
}

function generateMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

function generateReassurance() {
    return reassurances[Math.floor(Math.random() * reassurances.length)];
}

