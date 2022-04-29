import React, {useState} from 'react';
import '../login_page_style.css';
import UrgentPopup from '../components/urgentPopup';
import profile_image from '../assets/profile_placeholder.png';

// fonts
import "@fontsource/gothic-a1"
import "@fontsource/playfair-display"

// mui
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Badge from '@mui/material/Badge';

// mui card
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

// mui icons
import HomeIcon from '@mui/icons-material/Home';
import NotiIcon from '@mui/icons-material/Notifications';
import UrgentIcon from '@mui/icons-material/PriorityHigh';


function EmployeeNav () { 

    const [buttonPopup, setButtonPopup] = useState(false);
    const [count, setCount] = useState(1);

    return (
    <>
        <ul >
            <Button 
                style={{
                    fontSize: 30,
                    fontFamily: "Playfair Display",
                    color: "#544a55",
                }}
                variant="Text" 
                startIcon={<HomeIcon style={{ fontSize: 30 }}/>}
            >
                <a id='home_name' href="/Employee">HR Application</a>
            </Button>

            <div className='middle_employee'>
                <li className='dropdown'>
                    <button className='dropbtn'>
                        Leave
                    </button>
                        <div className='drop-content'>
                            <a href="/Employee/Leave/Status">Status</a>
                            <a href="/Employee/Leave/Apply">Apply</a>
                        </div>
                </li>


                <li className='dropdown'>
                    <button className='dropbtn'>
                        Claim
                    </button>
                    <div className='drop-content'>
                        <a href="/Employee/Claim/Status">Status</a>
                        <a href="/Employee/Claim/Apply">Apply</a>
                    </div>
                </li>

                <li><a href="/Employee/Payslip">Payslip</a></li>
                
            </div>

            <div className='right-side'>
                <Stack direction="row" spacing={0.5}>
                    <Tooltip title="Urgent Leave" arrow>
                        <IconButton aria-label="urgent" 
                            onClick={() => setButtonPopup(true)}
                            sx={{
                                ':hover': {
                                    backgroundColor: 'transparent', // theme.palette.primary.main
                                },
                            }}>
                            <Avatar 
                                sx={{
                                    backgroundColor: "#fc4444",
                                    ':hover': {
                                        backgroundColor: '#f77272', // theme.palette.primary.main
                                    },
                                }}>
                                <UrgentIcon />
                            </Avatar>
                        </IconButton>
                    </Tooltip>

                    <PopupState variant="popover" popupId="noti-popup-popover">
                        {(popupState) => (
                            <div>
                            <Tooltip title="Notifications" arrow>
                                <IconButton aria-label="notifications" {...bindTrigger(popupState)}
                                    sx={{
                                        ':hover': {
                                            backgroundColor: 'transparent', // theme.palette.primary.main
                                        },
                                    }}>
                                    <Badge color="error" overlap="circular" badgeContent={count}>
                                        <Avatar 
                                            onClick={() => {
                                                setCount(Math.max(count - 1, 0));
                                            }}
                                            sx={{
                                                backgroundColor: "#544a55",
                                                ':hover': {
                                                    backgroundColor: '#6e696f', // theme.palette.primary.main
                                                },
                                            }}>
                                            <NotiIcon />
                                        </Avatar>
                                    </Badge>
                                </IconButton>
                            </Tooltip>
                            <Popover
                                {...bindPopover(popupState)}
                                anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                                }}
                                transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                                }}
                            >
                                <Card sx={{ maxWidth: 345, minWidth: 345 }}>
                                    <CardActionArea>
                                        <CardContent>
                                        <Typography gutterBottom variant="h4" component="div" sx={{ fontFamily: "Playfair Display", textAlign: 'center' }}>
                                            Notification
                                        </Typography>
                                        <div id='notibtn_wrapper'>
                                            <Button 
                                                style={{
                                                    width: 315,
                                                    borderColor: "slategrey", 
                                                    color: "slategrey",
                                                    fontFamily: "Gothic A1",
                                                    fontWeight: "Bold"
                                                }}
                                                variant="outlined"
                                                href='/Employee/Claim/Status'
                                                >
                                                Your claim has been approved!
                                            </Button>
                                        </div>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Popover>
                            </div>
                        )}
                    </PopupState>

                    <PopupState variant="popover" popupId="profile-popup-popover">
                        {(popupState) => (
                            <div>
                            <Stack direction="row" spacing={1}>
                                <Tooltip title="Profile" arrow>
                                    <IconButton aria-label="profile" {...bindTrigger(popupState)}
                                        sx={{
                                            ':hover': {
                                                backgroundColor: 'transparent', // theme.palette.primary.main
                                            },
                                        }}>
                                        <Avatar 
                                            sx={{
                                                backgroundColor: "#a2a0a0",
                                                ':hover': {
                                                    backgroundColor: '#bfbfbf', // theme.palette.primary.main
                                                },
                                            }}/>
                                    </IconButton>
                                </Tooltip>

                                <Typography variant="subtitle1" component="div"
                                    sx={{
                                        fontFamily: "Playfair Display",
                                        fontSize: 30,
                                    }}>John
                                </Typography>
                            </Stack>
                            <Popover
                                {...bindPopover(popupState)}
                                anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                                }}
                                transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                                }}
                            >
                                <Card sx={{ maxWidth: 345, minWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            maxWidth="140"
                                            image={profile_image}
                                            alt="profile"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Playfair Display", textAlign: 'center' }}>
                                            John Snow
                                        </Typography>
                                        <Typography gutterBottom variant="body2" component="div" sx={{ fontFamily: "Playfair Display", textAlign: 'center' }}>
                                            Work ID
                                        </Typography>
                                        <div id='logoutbtn_wrapper'>
                                            <Button 
                                                style={{
                                                    width: 300,
                                                    borderColor: "red", 
                                                    color: "red",
                                                    fontFamily: "Gothic A1",
                                                    fontWeight: "Bold"
                                                }}
                                                variant="outlined"
                                                className="logout-btn"
                                                href='/Login'
                                                >
                                                L O G  O U T
                                            </Button>
                                        </div>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Popover>
                            </div>
                        )}
                    </PopupState>
            
                </Stack>
                
            </div>
        </ul>
        
        <UrgentPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h3>Confirm Application of Urgent Leave ?</h3>
        </UrgentPopup>
        
    </>
    );
}
 
export default EmployeeNav;