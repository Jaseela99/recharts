
import './App.css';
import LineCharter from "./components/LineCharter"
import BarCharter from './components/BarCharter';
import {ResponsiveContainer} from "recharts"
function App() {
  return (
    <div>
 <LineCharter/>
     <BarCharter/>
    </div>
    // <ResponsiveContainer className="App">
    
    // </ResponsiveContainer>
  );
}

export default App;
