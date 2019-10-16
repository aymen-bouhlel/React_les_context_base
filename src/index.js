import React, { useState } from "react";
import ReactDOM from "react-dom";
import ThemeContext from "./ThemeContext";

import "./styles.css";

// Composant en fin de chaine
// Il reçoit dans ses props le thème et la fonction qui permet de le changer
function ThemeChoice(props) {
  const handleChange = event => {
    const value = event.currentTarget.value;
    props.updateTheme(value);
  };

  return (
    <select name="theme" defaultValue={props.theme} onChange={handleChange}>
      <option value="dark">Sombre</option>
      <option value="light">Clair</option>
    </select>
  );
}

// Composant en deuxième ligne
// Il reçoit dans ses props le thème et la fonction qui permet de le changer
// Notons qu'en vrai il en a rien à foutre il s'en sert pas lui même
// C'est uniquement pour pouvoir le passer au composant ThemeChoice ...
function ToolBar(props) {
  return (
    <div>
      <button>Zoomer</button>
      <button>Dezoomer</button>
      <ThemeChoice theme={props.theme} updateTheme={props.updateTheme} />
    </div>
  );
}

function App() {
  // Le thème est en fait une classe CSS qui englobera notre app
  // Ca change juste le couleur de la typo ...
  const [theme, setTheme] = useState("light");

  const contextValue = {
    theme: theme, // on peut aussi ecrit theme,
    updateTheme: setTheme
  };

  return (
    // POSITIONER LE CONTEXT
    // DONNER UN VALEUR A CE CONTEXT
    <ThemeContext.Provider value={contextValue}>
      <div className={theme}>
        <ToolBar theme={theme} updateTheme={setTheme} />
        <p>Theme utilisé : {theme}</p>
      </div>
    </ThemeContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
