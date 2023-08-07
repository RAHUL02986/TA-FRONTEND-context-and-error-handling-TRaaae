import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/style.css';
import Header from './Header';
import Support from './Support';
import Aside from './Aside';
import Article from './Article';
import Slug from './Slug';
import Book from './Book';
import People from './People';
import { BrowserRouter , Routes ,Route} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
    <Header/>
    <div className='margin'>
<Aside/>
    <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='/article' element={<Article/>}/>
        <Route path='/slug' Component={Slug}/>
        <Route path='/book' element={<Book/>}/>
        <Route path='/people' element={<People/>}/>
    </Routes>
    </div>
    </BrowserRouter>
,
document.getElementById('root'));