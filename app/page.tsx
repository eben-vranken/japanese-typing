'use client';

// React
import { useEffect, useState } from 'react';

// Custom Hooks
import getWord from '@/hooks/getWord'

// Components
import LoadingSpinner from '@/components/LoadingSpinner';

// Interface
interface Word {
  japanese: String;
  english: string;
}

export default function Home() {
  const [wordData, setWordData] = useState<Word | null>();
  const [input, setInput] = useState<String[]>([]);

  // Handle word fetch
  useEffect(() => {
    const word: Word = getWord();

    setWordData(word);
  }, [])


  // Handle user input
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const newInput = e.target.value.split('');
    setInput(newInput);

    // Check if the user has correctly typed the current word
    const isWordCompleted = newInput.join('') === wordData?.japanese;

    if (isWordCompleted) {

      setTimeout(() => {
        // Fetch a new word when the current word is correctly typed
        const newWord: Word = getWord();
        setWordData(newWord);

        // Clear the input for the new word
        setInput([]);

        e.target.value = '';
      }, 250);
    }
  };

  return (
    <main className="flex flex-1 justify-center items-center relative">
      {/* Input */}
      <input name="typingPractice" type='search' className='opacity-0 absolute w-full h-full z-10' onChange={handleInput} autoFocus />

      {/* Word */}
      {wordData ?
        // Display word properties
        (
          <main className='flex flex-col items-center gap-y-2 animate-fade'>
            {/* English translation */}
            <span className='text-lg font-medium opacity-30'>
              {wordData.english}
            </span>

            <span className='opacity-10 font-extrabold -my-2'>
              ー
            </span>

            {/* Japanese word */}
            <span className='text-4xl font-semibold text-white/50 '>
              {wordData.japanese.split('').map((char: String, id) => {
                return (
                  <span key={`${char}${id}`} className={`px-1 box-content ${char === input[id] ? 'text-green-500' : input.length > id ? 'text-red-500' : ''} ${id === input.length ? 'border-l-[1px]' : ''}`}>{char}</span>
                )
              })}
            </span>
          </main>
        ) : (
          // Loading
          <LoadingSpinner />
        )
      }
    </main>
  );
}
