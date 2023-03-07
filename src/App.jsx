import { useState } from 'react' 
import './App.css'

function App() {
  const [index, setIndex] = useState(1)
  const [quotes, setQuotes] = useState([
    {quote: 'It is not in the stars to hold our destiny but in ourselves.', author: 'William Shakespeare'},
    {quote: 'The world is full of magic things, patiently waiting for our senses to grow sharper.', author: 'W.B. Yeats'},
    {quote: 'Just as a candle cannot burn without fire, man cannot live without a spiritual life.', author: 'Buddha'},
    {quote: 'Awakening is not changing who you are, but discarding who you are not.', author: 'Deepak Chopra'},
    {quote: 'I understand once again that the greatness of God always reveals itself in the simple things.', author: 'Paulo Coelho'}
  ])

  const handleClick = () => {
    const random = Math.floor(Math.random() * quotes.length)
    setIndex(random)
  }

  return (
    <div className="App">
      <h1>Random Quote Machine</h1>
      <div id="quote-box" className="card">
        <div>
        <p id="text">{quotes[index].quote}</p>      
        <span id="author">{quotes[index].author}</span>
        </div>
        <div className="card-footer">
        <button onClick={handleClick} id="new-quote">Get New Quote</button>
        </div>
        <a 
        href={'https://twitter.com/intent/tweet?text=${quotes[index].quote} -${quotes[index].author}'} 
        target="_blank" 
        id="tweet-quote">Tweet this quote!</a>
        </div>
      </div>
      )
}

export default App
