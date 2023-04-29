
import './App.css';
import MainContent from "./Components/MainContent"
import Header from "./Components/Header";
import data from "./Data";
function App() {
  const element = data.map((cd)=>{
    return <MainContent 
              key = {cd.id}
              cd = {cd}
            />
  })
  return (
    <div className="App">
      <Header />
      <div className="cn">
        {element}
      </div>
    </div>
  );
}

export default App;
