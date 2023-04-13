import React from 'react';
import { SliderData } from '../../data/SliderData';
import Hero from '../../components/Hero';
import ListItem from '../../components/Home/List/ListItem';
import Faquestion from '../../Faquestion/Faquestion';
import './homepage.css'
import Navbar from '../../components/Navbar';




function Home() {
  const url = "https://hypestorebackend-production-83e4.up.railway.app";
  localStorage.setItem("url", url);

  return (
    <>
    <Hero slides={SliderData} />
     <Faquestion/>
    </>
  );
}

export default Home;