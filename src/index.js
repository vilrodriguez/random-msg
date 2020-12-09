const messages = [
  'Ablalablalglablalglgalgla',
  'Hola Carambolas',
  '¿Quéloqué firulas?',
  'Tengo hambre, alimentame',
  'FOR THE HOOOOOOORDE!!!',
  'See you later alligator',
  'Bye, bye, cocodrile',
  'You know, like NYAN :3',
  'Meow mthrfckr',
  'I see it, I like it, I buy it.',
  'GIVE ME FOOD',
  ' ALKDSJLAJSKD ÑALSKDÑALS OQLSKDAÑLD',
  'Why men',
  'Gurl you got this',
  'Let me love you'
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random()*messages.length)]
    console.log(message)
}

module.exports = { randomMsg };