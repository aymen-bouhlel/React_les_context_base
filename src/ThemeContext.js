import React from "react";

// CREER LE CONTEXT QUI A UN PARAMÉTRE UN OBJET AVEC LES PROPRIÉTES THEME ET UNE FONCTION UPDATETHEME
export default React.createContext({
  theme: "",
  updateTheme: name => {}
});
