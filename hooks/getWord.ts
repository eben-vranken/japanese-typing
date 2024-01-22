const wordList = [
    { japanese: 'こんにちは', english: 'Hello' },
    { japanese: 'ありがとう', english: 'Thank you' },
    { japanese: 'おはようございます', english: 'Good morning' },
    { japanese: 'こんばんは', english: 'Good evening' },
    { japanese: 'はい', english: 'Yes' },
    { japanese: 'いいえ', english: 'No' },
    { japanese: 'おねがいします', english: 'Please' },
    { japanese: 'すみません', english: 'Excuse me / I\'m sorry' },
    { japanese: 'いただきます', english: 'Bon appétit (said before meals)' },
    { japanese: 'さようなら', english: 'Goodbye' },
    { japanese: 'ありがとうございます', english: 'Thank you very much' },
    { japanese: 'おつかれさまです', english: 'Thank you for your hard work' },
    { japanese: 'ごめんなさい', english: 'I\'m sorry' },
    { japanese: 'おげんきですか', english: 'How are you?' },
    { japanese: 'はじめまして', english: 'Nice to meet you' },
];

const getWord = () => {
    const randomElement = wordList[Math.floor(Math.random() * wordList.length)]

    return randomElement;
}

export default getWord