import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcepts.jsx";
import Examples from "./components/Example.jsx";
function App() {

  return (
    <>
      <Header />
      <main>
       <CoreConcept/> 
       <Examples/>
      </main>
    </>
  );
}

export default App;
