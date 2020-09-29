import React from "react";

import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemIcon,
  Box,
  Typography,
  ListSubheader
} from "@material-ui/core";

import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import AppsIcon from '@material-ui/icons/Apps'
import MoreVert from '@material-ui/icons/MoreVert'
import VideoCall from '@material-ui/icons/VideoCall'

import HomeIcon from '@material-ui/icons/Home'
import Subscriptions from '@material-ui/icons/Subscriptions'
import Whatshot from '@material-ui/icons/Whatshot'

import VideoLibrary from '@material-ui/icons/VideoLibrary'
import History from '@material-ui/icons/History'

import AddCircle  from '@material-ui/icons/AddCircle'

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
  drawerPaper: {
    width: 240,
    borderRight: 'none'
  },

  listItem: {
    paddingTop: 4,
    paddingBottom: 4
  },
  listItemText: { fontSize: 14 },
  
  subheader: { textTransform: 'uppercase' }
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
            <ListItem button classes={{root: classes.listItem}}>
              <ListItemIcon>{<HomeIcon />}</ListItemIcon>

              <ListItemText classes={{
                primary: classes.listItemText
              }} primary={'Início'} />
            </ListItem>
            
            <ListItem button classes={{root: classes.listItem}}>
              <ListItemIcon>{<Whatshot />}</ListItemIcon>

              <ListItemText classes={{
                primary: classes.listItemText
              }} primary={'Em alta'} />
            </ListItem>
            
            <ListItem button classes={{root: classes.listItem}}>
              <ListItemIcon>{<Subscriptions />}</ListItemIcon>

              <ListItemText classes={{
                primary: classes.listItemText
              }} primary={'Inscrições'} />
            </ListItem>
          </List>
          
          <Divider />
          
          <List>
            <ListItem button classes={{root: classes.listItem}}>
              <ListItemIcon>{<VideoLibrary />}</ListItemIcon>

              <ListItemText classes={{
                primary: classes.listItemText
              }} primary={'Biblioteca'} />
            </ListItem>
            
            <ListItem button classes={{root: classes.listItem}}>
              <ListItemIcon>{<History />}</ListItemIcon>

              <ListItemText classes={{
                primary: classes.listItemText
              }} primary={'Histórico'} />
            </ListItem>
          </List>
          
          <Divider />
          
          <Box p={3}>
            <Typography variant="body2">
              Faça login para curtir vídeos, comentar e se inscrever.
            </Typography>
            
            <Box mt={2}>
              <Button variant="outlined" color="secondary" startIcon={<AccountCircle />}>
                Fazer login
              </Button>
            </Box>
          </Box>
          
          <Divider />
          
          <List
          	component="nav"
          	aria-labelledby="nested-list-subheader"
          	subheader={
          		<ListSubheader component="div" id="nested-list-subheader" className={classes.subheader}>
          			O Melhor do youtube
          		</ListSubheader>
          	}
          >
          	<ListItem button classes={{ root: classes.listItem }}>
          		<ListItemIcon>
          			<AddCircle />
          		</ListItemIcon>
          		<ListItemText
          			classes={{
          				primary: classes.listItemText,
          			}}
          			primary={'Música'}
          		/>
          	</ListItem>
          	<ListItem button classes={{ root: classes.listItem }}>
          		<ListItemIcon>
          			<AddCircle />
          		</ListItemIcon>
          		<ListItemText
          			classes={{
          				primary: classes.listItemText,
          			}}
          			primary={'Esportes'}
          		/>
          	</ListItem>
          	<ListItem button classes={{ root: classes.listItem }}>
          		<ListItemIcon>
          			<AddCircle />
          		</ListItemIcon>
          		<ListItemText
          			classes={{
          				primary: classes.listItemText,
          			}}
          			primary={'Jogos'}
          		/>
          	</ListItem>
          	<ListItem button classes={{ root: classes.listItem }}>
          		<ListItemIcon>
          			<AddCircle />
          		</ListItemIcon>
          		<ListItemText
          			classes={{
          				primary: classes.listItemText,
          			}}
          			primary={'Filmes'}
          		/>
          	</ListItem>
          	<ListItem button classes={{ root: classes.listItem }}>
          		<ListItemIcon>
          			<AddCircle />
          		</ListItemIcon>
          		<ListItemText
          			classes={{
          				primary: classes.listItemText,
          			}}
          			primary={'Notícias'}
          		/>
          	</ListItem>
          	<ListItem button classes={{ root: classes.listItem }}>
          		<ListItemIcon>
          			<AddCircle />
          		</ListItemIcon>
          		<ListItemText
          			classes={{
          				primary: classes.listItemText,
          			}}
          			primary={'Ao vivo'}
          		/>
          	</ListItem>
          	<ListItem button classes={{ root: classes.listItem }}>
          		<ListItemIcon>
          			<AddCircle />
          		</ListItemIcon>
          		<ListItemText
          			classes={{
          				primary: classes.listItemText,
          			}}
          			primary={'Destaques'}
          		/>
          	</ListItem>
          	<ListItem button classes={{ root: classes.listItem }}>
          		<ListItemIcon>
          			<AddCircle />
          		</ListItemIcon>
          		<ListItemText
          			classes={{
          				primary: classes.listItemText,
          			}}
          			primary={'Videos 360'}
          		/>
          	</ListItem>
          </List>;

        </div>
      </Drawer>
    </div>
  )
};

export default Home;
