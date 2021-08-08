import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
        height: '35em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
  },
}));

export default function TableLoading() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress color="secondary"/>
    </div>
  );
}