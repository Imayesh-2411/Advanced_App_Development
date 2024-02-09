import '../Styles/AdDelEvent.css';
import { useState } from 'react';
import logo10 from '../Assets/Logo2.jpg'
import {Link} from 'react-router-dom'


function AdDelEventBox({eventName}) {

    const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive((prev) => !prev);
  };


    return (
        <div>
            <div className="del-modal-container">
                <div className="del-modal-content">
                <div className="del-evnt-create-box">
                    <div className=''>
                        <a href="/AdEvents"><img className="del-img" src="https://cdn-icons-png.flaticon.com/512/8367/8367508.png"></img></a>
                        <h2 className='del-h11'>Delete Confirmation</h2><br></br>
                            <div className="del-msg">
                                <h3 className="del-msg1">Are you sure you want to delete the event  &nbsp;' {eventName} ' ?&nbsp;</h3>
                            </div>
                            <br></br>
                            <a href="/AdEvents"><button className="del-can">Cancel</button></a><button className="del-del">Delete</button>

                            </div>
                            
                    </div>
                </div>
                </div>
            </div>
    )
}
export default AdDelEventBox