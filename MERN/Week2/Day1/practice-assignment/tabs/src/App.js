import './App.css';
import Header from './components/Header';
function App() {
  const tab1= ['heni','iheb','amine']
  const tab2= ['hasnaoui','jabri','belamin']
  const tab3= ['january','september','august']
  return (
    <div className="App">
      <Header tab1={tab1} tab2={tab2} tab3={tab3}/>
    </div>
  );
}

export default App;
