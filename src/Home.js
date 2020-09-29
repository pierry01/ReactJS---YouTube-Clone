import React from "react";
import { makeStyles, AppBar, Toolbar, IconButton, Typography, Button } from "@material-ui/core";

import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import AppsIcon from '@material-ui/icons/Apps'
import MoreVert from '@material-ui/icons/MoreVert'
import VideoCall from '@material-ui/icons/VideoCall'

const useStyles = makeStyles((theme) => ({
  root: { height: '100vh' },
  appBar: { boxShadow: 'none' },
  grow: { flexGrow: 1 },
  icons: { padding: theme.spacing(2) },
  logo: { height: 25 }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} color="inherit">
        <Toolbar>
          <IconButton className={classes.icons} color="inherit">
            <MenuIcon />
          </IconButton>
          
          <img src="/images/preto.png" alt="Logo" className={classes.logo} />

          <div className={classes.grow} />
          
          <IconButton className={classes.icons} color="inherit">
            <AppsIcon />
          </IconButton>
          
          <IconButton className={classes.icons} color="inherit">
            <MoreVert />
          </IconButton>
          
          <IconButton className={classes.icons} color="inherit">
            <VideoCall />
          </IconButton>

          <Button startIcon={<AccountCircle />} variant="outlined" color="secondary">
            Fazer Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
};

export default Home;
