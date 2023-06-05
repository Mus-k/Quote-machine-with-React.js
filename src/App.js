import { useState } from "react";
import { Quote } from "./quote-machine/Quote";

const Data=[
  { author:"-Mother Teresa", text: "Spread love everywhere you go. Let no one ever come to you without leaving happier."},
  { author:"-Franklin D. Roosevelt", text: "When you reach the end of your rope, tie a knot in it and hang on."},
  { author:"-Margaret Mead", text: "Always remember that you are absolutely unique. Just like everyone else."},
  { author:"-Robert Louis Stevenson", text: "Don't judge each day by the harvest you reap but by the seeds that you plant."},
  { author:"-Benjamin Franklin", text: "Tell me and I forget. Teach me and I remember. Involve me and I learn."},
]


const  getRandomQuote=()=>Math.round(Math.random() * ((Data.length-1) -0) +0);
function App() {
  const [quote, setQuote]= useState(Data[getRandomQuote()])
  
  function handleNewQuote(){
    setQuote(Data[getRandomQuote()])
}
  return (
    <div className="app">
      <h1>Random quote generating machine</h1>
     <Quote  quote={quote} handleNewQuote={handleNewQuote}/>
    </div>
  );
}

export default App;
