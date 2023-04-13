import React, { useState } from 'react';
import EmptyView from '../../EmptyView';
import SearchBar from '../../components/Home/SearchBar';
import './styles.css';
import ListClothing from '../../components/Home/List/ListClothing';
import PopupPassword from '../../components/Popups/PopupPassword/PopupPassword';
import Filter from '../../components/Filter/Filter';

const ClothingPage = () => {
  
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  return (
    <div className='home'>
      <PopupPassword/>
      {/* Search Bar */}
      <SearchBar
        value={searchInput}
        changeInput={(e) => setSearchInput(e.target.value)}
      />
      <Filter/>
      <div className='home_panelList-wrap'>
       
        {/* List & Empty View */}
        <div className='home_list-wrap'>
          {resultsFound ? <ListClothing/> : <EmptyView />}
        </div>
      </div>
    </div>
  );
};

export default ClothingPage;