import React from 'react'
import './style.css'
import ListItem from '../Home/List/ListItem';
import arrow from '../../components/img/arrow1.png'

const Productslider = () => {
    const productContainers = [...document.querySelectorAll('.product-container')];
    const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
    const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
  return (
    
    <div className='product'>
        <h2 className='product-category'>NAJNOVŠIE PRODUKTY</h2>
        <button className='pre-btn'><img src={arrow} alt=''></img></button>
        <button className='nxt-btn'><img src={arrow} alt=''></img></button>
        <div className='product-container'>
            <div className='home_panelList-wrap'>
                <div className='home_list-wrap'>
                    <ListItem />
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Productslider