import React, { useState, useEffect } from 'react';
import wordList from './resources/words.json';
import Word from './components/Word';
import './index.css';

const MAX_TYPED_KEYS = 30;

const getWords = () => {
  const index = Math.floor(Math.random() * wordList.length);
  const word = wordList[index];
  return word.toLowerCase();
}

const isValidKey = (key, word) => {
  if (!word) return false;
  const result = word.split('').includes(key);
  return result;
}

const App = () => {

  const [typedKeys, setTypedKeys] = useState([]);
  const [validKeys, setValidKeys] = useState([]);
  const [completedWords, setCompletedWords] = useState([]);
  const [word, setWord] = useState('');

  //useEffect passada uma função e suas dependencias.
  useEffect(() => {
    setWord(getWords());
  }, [])

  useEffect(() => {
    const wordFromValidKeys = validKeys.join('').toLocaleLowerCase();
    if (word && word === wordFromValidKeys) {

      // buscar uma nova palavra
      let newWord = null;
      do {
        newWord = getWords();
      } while (completedWords.includes(newWord));
      setWord(newWord);

      //limpar o array validKeys
      setValidKeys([]);

      //adicionar word ao completedWords
      setCompletedWords((prev) => [...prev, word]);

    }
  }, [word, validKeys, completedWords])

  const handleKeyDown = (e) => {
    e.preventDefault();
    const { key } = e;

    setTypedKeys((prevTypedKeys) => [...prevTypedKeys, key].slice(MAX_TYPED_KEYS * -1));

    if (isValidKey(key, word)) {
      setValidKeys((prev) => {
        const isValidLength = prev.length <= word.length; //verifica se o tamanho está dentro do tamanho da palavra
        const isNextChar = isValidLength && word[prev.length] === key;
        return isNextChar ? [...prev, key] : prev;

      });
    }
  };

  return (<div className="container" tabIndex="0" onKeyDown={handleKeyDown}>
    <div className="valid-keys">
      <Word word={word} validKeys={validKeys} />
    </div>
    <div className="typed-keys">{typedKeys ? typedKeys.join(' ') : null}</div>
    <div className="completed-words">
      <ol>
        {completedWords.map((word) => (<li key={word}>{word}</li>))}
      </ol>
    </div>
  </div>);
};

export default App;
