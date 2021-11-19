// import logo from './logo.svg';
import './App.css';
import './Test';
import Todo from './components/Test.js';

function App() {

  return (
    <div className="test">
      <h1>Title {3+1}</h1>
      <Todo title="Dynamic Title" text="lorem ips"/>
      <Todo title="Dynamic Title 2" text="lorem ips 4"/>
    </div>
  );
}

export default App;
