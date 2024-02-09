// import React from 'react'
// import '../Styles/Navbar.css'; 
// import '../Styles/Home.css'; 
// import '../Styles/BookEvents.css'; 
// import logo1 from '../Assets/Logo1.png'
// import {  Avatar, IconButton,Box,Menu,MenuItem,Divider,ListItemIcon} from '@mui/material'
// import { AccountBox,  Logout} from '@mui/icons-material';
// import {Link} from 'react-router-dom'
// import { useState} from 'react';
// import Footer from './Footer';
// import '../Styles/ViewEvents.css'


// function ViewEvents() {

//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const open = Boolean(anchorEl);
//     const handleClick = (event) => {
//       setAnchorEl(event.currentTarget);
//     };
//     const handleClose = () => {
//       setAnchorEl(null);
//     };
//     return (
//       <div className="be-overall">
//       <div className='home-b'>
//         <nav className='home-nav'>
//           <div className="menu">
//             <div className="logo">
//               <img className="img1" src={logo1}/>
//             </div>
//             <ul className='home-ul'>
//               <li><a href="/Home">Home</a></li>
//               <li><a href="/BookEvents">All Events</a></li>
//               <li><a className="active1" href="/ViewEvents">My Bookings</a></li>
//               <li><a href="#">About us</a></li>
//               <li><a href="#">Contact</a></li>
//               <li><a href="#">Feedback</a></li>
             
//               <Box sx={{ flexGrow: 0 }}>
//                        <li>
//                         <IconButton
//                           onClick={handleClick} sx={{ p: 0}}
//                           size="small"
//                         >
//                         <Avatar sx={{ width: 45, height: 45 ,bgcolor : "black" ,marginLeft:"10px" , marginBottom:"-10px", marginTop:"-8px" }}></Avatar>
//                         </IconButton></li></Box>
//                   </ul>
//                   <Menu
//           anchorEl={anchorEl}
//           id="account-menu"
//           open={open}
//           onClose={handleClose}
//           onClick={handleClose}
//           PaperProps={{
//             elevation: 0,
//             sx: {
//               overflow: 'visible',
//               filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
//               mt: 1.5,
//               '& .MuiAvatar-root': {
//                 width: 32,
//                 height: 32,
//                 ml: -0.5,
//                 mr: 1,
//               },
//               '&:before': {
//                 content: '""',
//                 display: 'block',
//                 position: 'absolute',
//                 top: 0,
//                 right: 14,
//                 width: 10,
//                 height: 10,
//                 bgcolor: 'background.paper',
//                 transform: 'translateY(-50%) rotate(45deg)',
//                 zIndex: 0,
//               },
//             },
//           }}
//           transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//           anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//         >
//           <MenuItem onClick={handleClose}>
//             <Avatar sx={{ width: 45, height: 45 ,bgcolor : "black"}}/> <b>My Account</b>
//           </MenuItem>
//           <Divider />
         
//           <MenuItem onClick={handleClose}>
//             <ListItemIcon>
//               <AccountBox fontSize="small" />
//             </ListItemIcon>
//             <b>Profile</b>
//           </MenuItem>
//           <MenuItem onClick={handleClose}>
//             <ListItemIcon>
//               <Logout fontSize="small" />
//             </ListItemIcon><Link to="/">
//             <div className='logout'><b>Logout</b></div></Link>
//           </MenuItem>
//         </Menu>
          
//           </div>
//         </nav>
//         <div className='be-h1'>
//             <h2>View Booked & Past Events:</h2>
//         </div>
       
//         {/* {filteredEvents.length === 0 && (
//       <div className="be-none">
//         <img className="be-noevents1" src="https://img.freepik.com/free-vector/illustrated-appointment-booking-with-calendar-concept_52683-38825.jpg?w=900&t=st=1706329469~exp=1706330069~hmac=d600cf38880c18cf106c110391f4466bdc9a93adbfcaed0132d4c89e9516c6d0"></img>
//         <h3>Oops! No Past Events are Available for Now...</h3>
//         <p>Book your Awesome events now!</p>
//       </div>
//         )} */}

      
//         <br></br><br></br>
        

//          <table>
//         <thead>
//           <tr>
//             <th>Applicant Name</th>
//             <th>Event Name</th>
//             <th>Event Date</th>
//             <th>Event Time</th>
//             <th>Total Price</th>
//             {/* <th>Actions on Events</th> */}
//             <th>Booking Status</th>
//           </tr>
//         </thead>
//         <tbody>
//             <tr>
//               <td>MS Dhoni</td>
//               <td>SS Birthday Event</td>
//               <td>23-10-2003</td>
//               <td>13 : 00</td>
//               <td>Rs. 12000</td>
//               {/* <td><img className="ve-img1" src="https://cdn-icons-png.flaticon.com/512/5996/5996708.png"></img><img className="ve-img1" src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"></img></td> */}
//               <td><button className="con">Confirmed</button></td>
//             </tr>
            
//             <tr>
//               <td>MS Dhoni</td>
//               <td>SS Birthday Event</td>
//               <td>23-10-2003</td>
//               <td>13 : 00</td>
//               <td>Rs. 12000</td>
//               {/* <td><img className="ve-img1" src="https://cdn-icons-png.flaticon.com/512/5996/5996708.png"></img><img className="ve-img1" src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"></img></td> */}
//               <td><button className="pe">Pending</button></td>
//             </tr>
//             <tr>
//               <td>MS Dhoni</td>
//               <td>SS Birthday Event</td>
//               <td>23-10-2003</td>
//               <td>13 : 00</td>
//               <td>Rs. 12000</td>
//               {/* <td><img className="ve-img1" src="https://cdn-icons-png.flaticon.com/512/5996/5996708.png"></img><img className="ve-img1" src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"></img></td> */}
//               <td><button className="re">Rejected</button></td>
//             </tr>
            
//         </tbody>
//       </table>


//       <br></br><br></br> <br></br> <br></br>

//        <Footer/>
//         </div>
       
        
//       </div>
//   )
// }


// export default ViewEvents