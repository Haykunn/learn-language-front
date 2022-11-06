import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';

function App() {
  return (
    <div>
     <BrowserRouter>
      <Navbar />
      {/* <Home /> */}
      <Routes >
      <Route path="/" element={<Home />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />

      </Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
