import '../Styles/EventBox.css';
import '../Styles/AdEventBox.css';
import { useState } from 'react';
import logo10 from '../Assets/Logo2.jpg'


function AdUpEventBox() {

    const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive((prev) => !prev);
  };


    return (
        <div>
            <div className="ad-modal-container">
                <div className="ad-modal-content">
                <img className="ad-img2" src={logo10}></img>
                <div className="ad-evnt-create-box">
                    <div className=''>
                        <a href="/AdEvents"><img className="ad-img" src="https://openclipart.org/image/2400px/svg_to_png/183568/close-button.png"></img></a>
                        <h1 className='ad-h11'>Update Theme:</h1><br></br>
                        <form className='ad-event-details'>
                            <div className='ad-event-items'>
                            <label className='ad-label'>Event Name</label>
                            <input className="ad-input" type="text" placeholder="Enter Event Name" />
                            <label className='ad-label'>Image URL</label>
                            <input className="ad-input" type="url" placeholder="Enter Image Url" required/>
                            <label className='ad-label'>Rating</label>
                            <input className="ad-input" type="numbers" placeholder="Enter the Rating" required />
                            <label className='ad-labelp'>Photographer Status</label>
                            <input className="ad-inputr1" type="radio" name="availability" value="Available" required/>&nbsp; <label className='ad-labelr'>Available</label>
                            <input className="ad-inputr2" type="radio" name="availability" value="Not Available" required/>&nbsp; <label className='ad-labelr'>Not Available</label>
                            </div>
                            <div className='ad-event-items'>
                            <label className='ad-label'>Description</label>
                            <textarea className="ad-textarea" type="text" rows="10" cols="50" placeholder="Enter Theme Description"  required/>
                            <label className='ad-label'>Total Price</label>
                            <input className="ad-input" type="numbers" placeholder="Enter Theme Cost" required/>
                            </div>
                            <div className='ad-event-items1'>
                            
                        
                            <div className='ad-box1'>
                                <input className='ad-box2' type="checkbox" required/>
                                <p className="ad-box3">&nbsp;Confirm the Entered Details!!!</p>
                            </div>

                            <div className={`wrapper ${isActive ? 'active' : ''}`}>
                                <button className={`custom-button ${isActive ? 'is_active' : ''}`} onClick={handleButtonClick}>
                                    <span>Update Event</span>
                                    <div className="success">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.756 29.756" >
                                        <path d="M29.049,5.009L28.19,4.151c-0.943-0.945-2.488-0.945-3.434,0L10.172,18.737l-5.175-5.173   c-0.943-0.944-2.489-0.944-3.432,0.001l-0.858,0.857c-0.943,0.944-0.943,2.489,0,3.433l7.744,7.752   c0.944,0.943,2.489,0.943,3.433,0L29.049,8.442C29.991,7.498,29.991,5.953,29.049,5.009z" />
                                    </svg>
                                    </div>
                                </button>
                                </div>
                            {/* <button className='create-button' >Create Event</button> */}
                            </div>
                            
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default AdUpEventBox