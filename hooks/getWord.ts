interface Dictionary {
    [key: string]: any;
}

const dictionary: Dictionary = {
    '1': require('@/wordlist/1-100.json'),
};


const getWord = (difficulty: number) => {

    // Get random number from 1 to difficulty
    const randomIndex = Math.floor(Math.random() * difficulty) + 1;

    // Use that number to pick wordlist from dictionary
    const wordList = dictionary[randomIndex.toString()];

    // Get random word from json list
    const randomWordIndex = Math.floor(Math.random() * wordList.length);
    const randomWord = wordList[randomWordIndex];

    return randomWord
}

export default getWord