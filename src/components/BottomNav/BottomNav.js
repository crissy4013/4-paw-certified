

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

// const useStyles = makeStyles({
//   root: {
//     width: 500,
//   },
// });

export default function BottomNav() {
  // const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} >
      <BottomNavigationAction label="Kennel" value="kennel" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Feed" value="feed" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Clean" value="clean" icon={<LocationOnIcon />} />
      <BottomNavigationAction label="Play" value="play" icon={<FolderIcon />} />
    </BottomNavigation>
  );
}
