import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../store/actions/cars';
import { setSearchTerm } from '../store/reducer/carReducer';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      marginTop: '2rem',
      width: '50%',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();
  const name = useSelector(state => state.car.searchTerm);
  const dispatch = useDispatch();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label="Search cars by name"
        variant="outlined"
        value={name}
        onChange={event => {
          dispatch(setSearchTerm(event.target.value));
          dispatch(fetchCars());
        }}
      />
    </form>
  );
}
