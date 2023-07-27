import * as React from 'react';
import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Gmedal from '../assets/medalGold.svg';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

import '../css/sidebar.css';
import {BiSolidHomeSmile} from 'react-icons/bi';
import {BsPeopleFill} from 'react-icons/bs';
import {HiDocument} from 'react-icons/hi';
import {TiDocumentText} from 'react-icons/ti';
import {CiSearch} from 'react-icons/ci';
import {BsAirplaneEngines} from 'react-icons/bs';
import {BsAirplaneEnginesFill} from 'react-icons/bs';
import {BsFillAirplaneFill} from 'react-icons/bs';
import Logo from '../assets/logo.svg';
import Wave from '../assets/wave.svg';
import BannerImg from '../assets/BannerImg.svg';



const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


export default function MiniDrawer() {
  const[dvalue,setdValue] = useState(new Date());
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  
    const drives = [
      {
        'id':'8',
        'company':'Amazon',
        'date':'8th - 10th july 2021',
        'time':'8AM - 9AM',
        'role':'SDE Backend'
      },

      {
        'id':'8',
        'company':'Amazon',
        'date':'8th - 10th july 2021',
        'time':'8AM - 9AM',
        'role':'SDE Backend'
      },

      {
        'id':'8',
        'company':'Amazon',
        'date':'8th - 10th july 2021',
        'time':'8AM - 9AM',
        'role':'SDE Backend'
      },

      {
        'id':'8',
        'company':'Amazon',
        'date':'8th - 10th july 2021',
        'time':'8AM - 9AM',
        'role':'SDE Backend'
      },

      {
        'id':'8',
        'company':'Amazon',
        'date':'8th - 10th july 2021',
        'time':'8AM - 9AM',
        'role':'SDE Backend'
      },

      {
        'id':'8',
        'company':'Amazon',
        'date':'8th - 10th july 2021',
        'time':'8AM - 9AM',
        'role':'SDE Backend'
      }
    ]

    const colors = [
      'rgba(240, 247, 255, 1)',
      'rgba(255, 240, 247, 1)',
      'rgba(240, 255, 243, 1)',
      'rgba(255, 245, 240, 1)'
    ]

    const numberingColors = [
      'rgba(0, 119, 255, 1)',
      'rgba(255, 29, 134, 1)',
      'rgba(22, 208, 59, 1)',
      'rgba(255, 126, 62, 1)'
    ]
   
    const length = colors.length;
    const idx = 0;

    const MessageBox = [
      {
        'id':'MA',
        'name':'Mohammed Ayaan',
        'RecentMsg':'Hey, I got Placed at Google',
        'Time':'07:30 am'
      },
      {
        'id':'MK',
        'name':'Mannan Khan',
        'RecentMsg':'Hey, I got Placed at Microsoft',
        'Time':'10:30 am'
      },
      {
        'id':'SA',
        'name':'Shoaib Akhtar',
        'RecentMsg':'Hey, I got Placed at Amazon',
        'Time':'04:30 pm'
      },
    ]

    const Tskill = [
      {
        'lang':'Python',
        'desc':'Advanced',
        'img':  
        <Stack spacing={2} direction="row" >
        <CircularProgress variant="determinate" 
        value={55} />
        </Stack>,
        
      },
      {
        'lang':'JAVA',
        'desc':'Intermediate',
        // 'img':<BsFillAirplaneFill />
        'img': <Stack spacing={2} direction="row" >
        <CircularProgress variant="determinate" 
        
        value={55} />
        </Stack>
      },
      {
        'lang':'C++',
        'desc':'Beginner',
        'img':<Stack spacing={2} direction="row" >
        <CircularProgress variant="determinate" 
        
        value={55} />
        </Stack>
      },
      {
        'lang':'MERN',
        'desc':'Advanced',
        'img':<Stack spacing={2} direction="row" >
        <CircularProgress variant="determinate" 
        
        value={35} />
        </Stack>
      },
      {
        'lang':'Ruby',
        'desc':'Beginner',
        'img':<Stack spacing={2} direction="row" >
        <CircularProgress variant="determinate" 
        
        value={75} />
        </Stack>
      },
      {
        'lang':'Javascript',
        'desc':'Intermidiate',
        'img':<Stack spacing={2} direction="row" >
        <CircularProgress variant="determinate" 
        
        value={100} />
        </Stack>
      },

    ]
  


  return (
    <Box sx={{ display: 'flex' }} className='main-content'>
      <CssBaseline />
      <AppBar position="fixed" sx={{backgroundColor:'white', color:'black'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={()=> {setOpen(!open)}}
            edge="start"
            // sx={{
            //   marginRight: 5,
            //   ...(open && { display: 'none' }),
            // }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          <div className='Logo'>
            <img src={Logo} alt="logo" />
            <h4>Hire.me</h4>
       </div>
      {/* <br></br> */}
      {/* <br></br> */}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        {/* <Divider /> */}
        <List sx={{paddingTop:'70px'}} >
            <ListItem disablePadding sx={{ display: 'block',paddingBottom:'10px' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {/* <MailIcon /> */}
                  <BiSolidHomeSmile size='25px' color='rgba(145, 129, 244, 1)' />
                </ListItemIcon>
                <ListItemText primary='Home' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block',paddingBottom:'10px' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <BsPeopleFill size='25px' color='rgba(145, 129, 244, 1)' />
                </ListItemIcon>
                <ListItemText primary='Jobs' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block',paddingBottom:'10px' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <HiDocument size='25px' color='rgba(145, 129, 244, 1)' />
                </ListItemIcon>
                <ListItemText primary='Documents' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block',paddingBottom:'10px' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <TiDocumentText size='25px' color='rgba(145, 129, 244, 1)' />
                </ListItemIcon>
                <ListItemText primary='Resume' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block',paddingBottom:'10px' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <MailIcon size='25px' color='rgba(145, 129, 244, 1)' />
                </ListItemIcon>
                <ListItemText primary='Messages' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary='Settings' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

        </List>
       
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }} className='llllll'>
        <DrawerHeader />
      
      <div className='main-comp'>
      <div className='main-comp-left'>
      <div className='right-page-main'>
      <div className="input-wrapper">
        <CiSearch size="30px" color='rgba(138, 138, 138, 1)' />
        <input placeholder='Search...' />
      </div>

      <div className='generate-resume'>Generate Resume</div>

      </div>
      <div className='welcome-banner'>
          <div className='welcome-back'>
            <div className='wave-head'>
            <h4>Welcome back, Ayaan </h4>
            <img src={Wave} alt="Wave Emoji" />
            </div>

          <div className='desc'>Padhlo bhai please padhlo, ladki patane se gahar nahi chalta</div>
          </div>
          <div className='banner-image'><img src={BannerImg} alt="Banner Image" /></div>
      </div>

      <div className="mid-block-section">
      <div className="skills-section">
        <h4>Skill Set</h4>
            <div className='list-skills'>
              {Tskill.map(sk => (
                <div className='one-one'>
                  <div className='levels'>
                  <h5>{sk.lang}</h5>
                  <p>{sk.desc}</p>
                  </div>
                  
                  
                  <div className='img-div'>{sk.img}</div>
                    
                </div>
              ))}
            </div>
            
      </div>

      <div className="message-section-block">
        <div className="message-column">
          <h5>Messages</h5>
          <div className="seeAll">
            See All
          </div>
        </div>

        <div className="individual-messages">
          {
            MessageBox.map((data,idxx) => (
              <div className="individual-messages-1">
                <div className="header-id" style={{backgroundColor:numberingColors[idxx%length]}}>
                  {data.id}
                </div>
                <div className="message-logic">
                  <div className="message-logic-1">
                    <h5>{data.name}</h5>
                    <div className="msg-recent">
                        {data.RecentMsg}
                    </div>
                  </div>


                </div>
                <div className="time-logic">
                    {data.Time}
                  </div>
              </div>
            ))
          }
        </div>
        
      </div>
      </div>
      
      
      </div>

      <div className='main-comp-right'>
        <div className="calendar">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar 
           />
        </LocalizationProvider>
        {/* <Calendar sx={{border:'none'}} /> */}
        </div>

        <div className='activities'>
          <div className="eventsUpcomming">
          <h5>Upcomming Activities</h5>
          <div className="seeAll">
            See all
          </div>
          </div>
          
          <div className="companies-listed">
            {drives.map((dr,idxx) => (
              <div className='xyz-company' style={{backgroundColor:colors[idxx%length]}}>
                <div className="numbering" style={{backgroundColor:numberingColors[idxx%length]}} >
                  {dr.id}
                </div>

                <div>
                <h4>{dr.company}</h4>
                <div className="date-time-event">
                  <div className="dt">
                  {dr.date}
                  </div>
                  <div className="tme">
                  {dr.time}
                  </div>
                </div>
                <div className="jobrole">
                  {dr.role}
                </div>
                </div>
                
              </div>
              
            ))}
          </div>
        </div>
        
      </div>
     </div>
      </Box>
    </Box>
  );
}
