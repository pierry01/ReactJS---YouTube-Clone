import React from "react";
import { 
  makeStyles, AppBar, Toolbar, IconButton, Typography, Button, Drawer, List,
  ListItem, ListItemText, Divider
} from "@material-ui/core";

import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import AppsIcon from '@material-ui/icons/Apps'
import MoreVert from '@material-ui/icons/MoreVert'
import VideoCall from '@material-ui/icons/VideoCall'

const useStyles = makeStyles((theme) => ({
  root: { height: '100vh' },
  appBar: { 
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1
  },
  grow: { flexGrow: 1 },
  icons: { padding: theme.spacing(2) },
  logo: { height: 25 },
  drawer: {
    width: 240,
    flexShrink: 0
  },
  drawerPaper: { width: 240 }
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
      
      
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  )
};

export default Home;
