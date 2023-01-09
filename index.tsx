import * as React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { render } from 'react-dom';

import Home from './src/pages/home'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
  }
  
  render(<App />, document.getElementById('root'));