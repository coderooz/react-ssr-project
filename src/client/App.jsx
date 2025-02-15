import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';
import NavBar from './screens/NavBar';

const App = () => {
    return (
        <main>
            <NavBar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
        </main>
    );
};

export default App;
