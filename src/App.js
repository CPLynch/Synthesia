import React from "react";
import ReactDOM from "react-dom";

import ErrorBoundary from "./ErrorBoundary.js";
import NewsHomePage from "./Containers/NewsHomePage.js";

const App = () => {
  return (
    <React.StrictMode>
      <ErrorBoundary>
        <NewsHomePage />
      </ErrorBoundary>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
