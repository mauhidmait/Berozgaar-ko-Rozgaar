import React from 'react'
import '../css/dashboard.css';
import {useNavigate} from 'react-router-dom';
import SideBar from './sidebar';

import Box from '@mui/material/Box';

const Dashboard = () => {
    const navigate = useNavigate();
  return (
    <div className='main-section'>
        <Box>
      <SideBar /> 
      gvhj
      </Box>
    </div>
  )
}

export default Dashboard;
