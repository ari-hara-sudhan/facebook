import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StoreIcon from '@material-ui/icons/Store';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import { IconButton } from '@material-ui/core';
import { useStateValue } from './StateProvider';
function Header() {
    const [{user},dispatch]=useStateValue()
    return (
        <div className="header">
        <div className="header__left">
            <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_(2019).png/1200px-Facebook_Logo_(2019).png"  alt="fb-logo"/>
            <div className="header__input">
                <SearchIcon/>
                <input type="text"/>

            </div>

        </div>
        <div className="header__middle">
            <div className="header__option header__optionactive">
                <HomeIcon fontSize="large"/>

            </div>
            <div className="header__option">
                <FlagIcon fontSize="large"/>

            </div>
            <div className="header__option">
                <SubscriptionsIcon fontSize="large"/>

            </div>
            <div className="header__option">
                <StoreIcon fontSize="large"/>

            </div>
            <div className="header__option">
                <SupervisedUserCircleIcon fontSize="large"/>

            </div>


        </div>
        <div className="header__right">
            <div className="header__info">
            <Avatar/>
            <h3 className="header__name">ahs</h3>
            </div>
            <IconButton>
                <AddIcon/>
            </IconButton>
            <IconButton>
                <ForumIcon/>
            </IconButton>
            <IconButton>
                <NotificationsIcon/>
            </IconButton>
            <IconButton>
                <ExpandMoreIcon/>
            </IconButton>
        </div>
            
        </div>
    )
}

export default Header
