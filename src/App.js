
import './App.css';
// import router and router provider 
import {BrowserRouter , Routes, Route, Link } from "react-router-dom";

// import home page
import Homepage from './page/homepage';

// import navbar component
import Navbar from './components/navbar'
import Chatgpt from './page/chatgpt';
import Match_detail from './page/match_detail';
import Footer from './components/footer';
import { Provider } from 'react-redux'
import store from './store/store';
import Joincontest from './page/joincontest';
import Livematches from './page/livematches';


function App() {
  return (
    <div className="App">
      <Provider store={store}>

     
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/chat" element={<Chatgpt />} />
      <Route path="/match/:id" element={<Match_detail/>} />
      <Route path="/joincontest/:id" element={<Joincontest/>} />
      <Route path="/live-matches" element={<Livematches/>} />
      </Routes>
      <Footer />
      </ BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
