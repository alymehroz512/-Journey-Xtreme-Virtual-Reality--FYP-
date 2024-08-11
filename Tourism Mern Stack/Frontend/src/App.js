import Home from "./Pages/Home";
import Booking from "./Pages/Booking";
import Payment from "./Pages/Payment";
import Tourdetail from "./Pages/Tourdetail";
import Signup from "./Pages/Signup";
import ContactForm from './Pages/ContactForm'
import AllPackages from "./Pages/AllPacakges";
import Protected from './Components/Protected'
import Dashboard from "./Dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import AllBlogs from "./Pages/AllBlogs";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Detail" element={<Tourdetail />} />
          <Route path="/Booking" element={<Protected><Booking /></Protected>} />
          <Route path="/dashboard" element={<Protected><Dashboard/></Protected>}/>
          <Route path="/Payment" element={<Payment />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactForm/>} />
          <Route path='/allpacakges' element={<AllPackages/>}/>
          <Route path='/allblogs' element={<AllBlogs/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
