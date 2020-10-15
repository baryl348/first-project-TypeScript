import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Navbar } from './components/headerNav/Navbar';
import { AboutPage } from './pages/aboutePages';
import { Pages } from './pages/page';




const  App: React.FC = () => {
 
    return ( <>
     <Navbar/>
     <div className='container'>
       <Switch>
         <Route component={Pages}  path='/' exact/>
         <Route component={AboutPage} path='/info'/>
       </Switch>
     </div>
     
    </> )
  
}

export default App;
