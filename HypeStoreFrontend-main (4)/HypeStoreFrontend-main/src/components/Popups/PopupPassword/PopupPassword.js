import React from 'react';
import './PopupPassword.css';

const PopupPassword = () => {
  return (
    <div>
        <div className='center'>
            <button id='show-changepassword'>Change Password</button>
        </div>
        <div className='popup'>
        <div className='close-btn'>X</div>
            <div className='formP'>
                <h2 className='title2'>CHANGE PASSWORD</h2>
                <div className='form-element'>
                    <label for='password'>Current Password</label>
                    <input
                     type='password' 
                     id='current-password' 
                     placeholder='Current Password'
                    />
                </div>
                <div className='form-element'>
                <label for='password'>New Password</label>
                    <input
                        type='password'
                        id='newpassword'  
                        placeholder='New Password'
                    />
                </div>
                <div className='form-element'>
                    <label for='password'>Confirm New Password</label>
                    <input 
                        type='password' 
                        id='confirmnewpassword' 
                        placeholder='Confirm New Password'
                    />
                    
                </div>
                <div className='form-elementbutton'>
                    <button>SAVE CHANGES</button>
                </div>
            </div>
        </div>
    </div>
  );
}; 

export default PopupPassword; 