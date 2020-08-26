window.SpeechRecognition = window.SpeechRecognition
    || window.webkitSpeechRecognition;

const wordsRecognition = new SpeechRecognition();
wordsRecognition.interimResults = true;
wordsRecognition.lang = 'en-UK';

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

wordsRecognition.addEventListener('result', e=>{
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    p.textContent = transcript.replace(/mushroom|mushrooms/gi, '🍄');

    if(e.results[0].isFinal){
        p = document.createElement('p')
        words.appendChild(p)
    }
});

wordsRecognition.addEventListener('end', wordsRecognition.start);
wordsRecognition.start();



