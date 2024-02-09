import '../Styles/EventBox.css';
import { useState } from 'react';
import Select from 'react-select';


function EventBox({ eventName }) {

    const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive((prev) => !prev);
  };

    const options = [
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana' },
        { value: 'orange', label: 'Orange' },
        { value: 'pear', label: 'Pear' },
        { value: 'grape', label: 'Grape' },
      ];      
  
        const [selectedOptions, setSelectedOptions] = useState([]);
      
        const handleMultiSelectChange = (selectedOptions) => {
          setSelectedOptions(selectedOptions);
        };
    const options1 = [
        { value: 'Parotta', label: 'Parotta' },
        { value: 'Leg piece', label: 'Leg piece' },
        { value: 'Chicken Briyani', label: 'Chicken Briyani' },
        { value: 'Mutton gravy', label: 'Mutton gravy' },
        { value: 'Veg Meals', label: 'Veg Meals' },
      ];      
  
        const [selectedOptions1, setSelectedOptions1] = useState([]);
      
        const handleMultiSelectChange1 = (selectedOptions1) => {
          setSelectedOptions1(selectedOptions1);
        };
    
    return (
        <div>
            <div className="modal-container">
                <div className="modal-content">
                <div className="evnt-create-box">
                    <div className=''>
                        <a href="/BookEvents"><img className="eb-img" src="https://openclipart.org/image/2400px/svg_to_png/183568/close-button.png"></img></a>
                        <h1 className='eb-h1'>Book your Event:</h1><br></br>
                        <form className='event-details'>
                            <div className='event-items'>
                            <label className='eb-label'>Event Name</label>
                            <input className="eb-input" type="text" value={eventName}  />
                            <label className='eb-label'>Applicant Name</label>
                            <input className="eb-input" type="text" placeholder="Enter Applicant Name"  required/>
                            <label className='eb-label'>Applicant Mobile No</label>
                            <input className="eb-input" type="tel" placeholder="Enter Mobile Number" required />
                            <label className='eb-label'>Applicant Email Id</label>
                            <input className="eb-input" type="email" placeholder="Enter Email Id"  required/>
                            <label className='eb-label'>Age of the Birthday Person</label>
                            <input className="eb-input" type="number" placeholder="Enter the Age"  required/>
                            </div>
                            <div  className='event-items'>
                            <label className='eb-label'>Applicant Address</label>
                            <textarea className="eb-textarea" type="text" rows="4" cols="50" placeholder="Enter Applicant Address"  />
                            <label className='eb-label'>Event Date</label>
                            <input className="eb-input" type="date" required/>
                            <label className='eb-label'>Event Time</label>
                            <input className="eb-input" type="time" required/>
                            <label className='eb-label'>No. of People</label>
                            <input className="eb-input" type="number" placeholder="Enter the Number of People"  />
                            </div>
                            <div  className='event-items'>
                            <label className='eb-label1'>Count of People Consuming:</label>
                            <label className='eb-label'>Veg</label>
                            <input className="eb-input1" type="number" required/>
                            <label className='eb-label2'>Non-Veg</label>
                            <input className="eb-input11" type="number" required/>
                            <label className='eb-label'>Food Category</label>
                            
                            <Select className="eb-input2"
                            options={options1}
                            isMulti
                            placeholder="Select Food Category"
                            onChange={handleMultiSelectChange1}
                            value={selectedOptions1} 
                            /><br></br>
                            <label className='eb-label'>Add-Ons</label>
                            <Select className="eb-input2"
                            options={options}
                            isMulti
                            placeholder="Select the Category"
                            onChange={handleMultiSelectChange}
                            value={selectedOptions} />
                            <div className='eb-box1'>
                                <input className='eb-box2' type="checkbox"required/>
                                <p className="eb-box3">Confirm the Entered Details!!!</p>
                            </div>

                            <div className={`wrapper ${isActive ? 'active' : ''}`}>
                                <button className={`custom-button ${isActive ? 'is_active' : ''}`} onClick={handleButtonClick}>
                                    <span>Book Event</span>
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
export default EventBox