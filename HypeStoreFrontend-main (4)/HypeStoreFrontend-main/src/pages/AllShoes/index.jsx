import React, { useState } from 'react';
import './styles.css';
import Filter from '../../components/Filter/Filter';
import { Komentare } from '../../components/Comments/Komentare';


const ShoesPage = () => {
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  
   
  return (
    <div className='home'>
     <Komentare/>
    
    </div>
  );
};

export default ShoesPage;