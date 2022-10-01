import React from 'react';
import {Routes, Route} from 'react-router-dom'
import { Privateroute } from '../Hoc/Privateroute';
import { Error } from '../Pages/Error';
import { Home } from '../Pages/Home/Home';
import { Product } from '../Pages/Product/Product';
import { Singleprod } from '../Pages/Product/Singleprod';

export const Allroutes = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/product/:id' element={<Product />} />        
    <Route path='/singleprod/:category/:id' element={<Privateroute>  <Singleprod />   </Privateroute> } />  
    <Route path='*' element={ <Error /> } />     
    </Routes>
    
    </>
  )
}
