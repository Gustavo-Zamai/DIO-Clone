import {
   BrowserRouter as Router, 
   Routes, 
   Route
} from 'react-router-dom';

import { Home } from './pages/home';
import { Login } from './pages/login';
import { UserFeed } from './pages/user-feed';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/user-feed' element={<UserFeed />} />
      </Routes>
    </Router>
  );
}

export default App;
