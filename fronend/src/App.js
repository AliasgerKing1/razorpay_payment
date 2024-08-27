import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Home";
import PaymentSuccess from "./PaymentSuccess";

function App() {
  return (
 <Router>
   <Routes>
     <Route exact path="/" element={<Home />} />
     <Route exact path="/paymentsuccess" element={<PaymentSuccess />} />
   </Routes>
 </Router>
  );
}

export default App;
