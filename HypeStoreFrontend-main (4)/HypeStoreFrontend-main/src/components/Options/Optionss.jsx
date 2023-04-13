import React from 'react';
import './options.css';

const Optionss = () => {
  return (
    <div className='options-main'>
        <div className='options_password'>
            <h1 className='titlech'>CHANGE PASSWORD</h1>
                <div className='input-group'>
                    <input type="text" class="input" title="Current password" />
                        <label class="placeholder">Current password</label>
                </div>
                <div className='input-group'>
                    <input type="text" class="input" title="Current password" />
                        <label class="placeholder">New password</label>
                </div>
                <div className='input-group'>
                    <input type="text" class="input" title="Current password" />
                        <label class="placeholder">Confirm password</label>
                </div>
                <div className="inputfield">
                    <input type="send" value="SAVE CHANGES" className="btn2" ></input>
                </div>
        </div>
    </div>
  );
};

export default Optionss;