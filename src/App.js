import './App.css'
import Section from './Section.js'
import colors from './colors.json'
import './Style.css'

function App() {
  return (
    <div className="App">
      {colors.map (color => (
        <Section colorName = {color.name}/>
      ))}
    </div>
  );
}

export default App
