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
  type: string;
  meaning: Array<String>;
}

export default function Home() {
  const [wordData, setWordData] = useState<Word | null>();
  const [input, setInput] = useState<String[]>([]);

  // Handle word fetch
  useEffect(() => {
    const word: Word = getWord(1);

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
        const newWord: Word = getWord(1);
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
          <main className='flex flex-col items-center gap-y-8 animate-fade'>
            {/* Japanese word */}
            <span className='text-4xl font-semibold text-white/50 '>
              {wordData.japanese.split('').map((char: String, id) => {
                return (
                  <span key={`${char}${id}`} className={`px-1 box-content ${char === input[id] ? 'text-correct' : input.length > id ? 'text-false' : ''} ${id === input.length ? 'border-l-[2px] border-primary' : ''}`}>{char}</span>
                )
              })}
            </span>

            {/* Horizontal Divider */}
            <span className=' font-extrabold w-64 border-b-2 border-primary'>

            </span>

            <section className='flex flex-col gap-y-1 max-w-[400px] '>
              {/* Word Type */}
              <span className='text-lg font-medium opacity-70'>
                {wordData.type}
              </span>

              {/* Meaning */}
              <ul className='text-sm list-decimal font-medium opacity-30'>
                {wordData.meaning.map((meaning, id) => {
                  return (
                    <li>{meaning}</li>
                  )
                })}
              </ul>
              <a href={`https://jisho.org/word/${wordData.japanese}`} className='z-30 text-sm text-primary underline mt-2' target='_blank'>Learn more</a>
            </section>
          </main>
        ) : (
          // Loading
          <LoadingSpinner />
        )
      }
    </main>
  );
}
