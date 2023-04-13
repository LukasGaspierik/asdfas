import React from "react";
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import image from '../../images/pic.png'
import { Link, useParams } from "react-router-dom";
import ProfileImage from "../../components/ProfilImage";

const UserPage = () =>{
    const { userName } = useParams();
    const [currentUser, setCurrentUser] = useState('');
    const url = localStorage.getItem("url");

    useEffect( () =>{
        axios.get(url + "/user/getUser/" + userName).then((response)=>{
            setCurrentUser(response.data);
        })
    }, [])

    return(
        <div>
            <div className='container1'>
                <div className='profile-details1'>
                <ProfileImage/>
                    <div className='pd-row1'>
                    <div className='Info'>
                            <div className='Profile-Info1'>
                                {currentUser.userName}
                            </div>
                            <div className='Profile-Email1'>
                                {currentUser.email}
                            </div>
                            <div className='Profile-Number1'>
                                {currentUser.pnumber}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='list-wrap'>
                {currentUser.items? (currentUser.items.map((data) =>
                    {return (
                    <div className='listItem-wrap' key={data.id}>
                        <Link to={`/clothing/${data.id}`}>
                            <img className='img-box' src={data.imageNames ? url + "/item/getImage/" + data.imageNames[0] : null} alt=''/>
                        </Link>
                        <header>
                            <h4>{data.title}</h4>
                        </header>
                        <footer>
                            <p>
                                <b>${data.price}</b>
                            </p>
                        </footer>
                     </div>
                )})) : (<h3>No data yet</h3>)}
            </div>

        </div>
    );
}
export default UserPage;