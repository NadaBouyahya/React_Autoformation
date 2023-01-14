import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarData } from './components/SidebarData';


function App() {



  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          {SidebarData.map((item)=>{
            return <Route path={'/'+item.link} element={item.component}></Route>
          })}
          {/* <Route path='/home'></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
