import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../store/actions/cars';
import { setFilterSize, setFilterPrice } from '../store/reducer/carReducer';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Filter() {
  const classes = useStyles();
  const size = useSelector(state => state.car.filterSize);
  const price = useSelector(state => state.car.filterPrice);
  const dispatch = useDispatch();

  return (
    <div className="filter">
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="simple-select-outlined-label">Size</InputLabel>
        <Select
          labelId="simple-select-outlined-label"
          id="simple-select-outlined"
          value={size}
          onChange={event => {
            dispatch(setFilterSize(event.target.value));
            dispatch(fetchCars());
          }}
          label="Size"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Sedan">Sedan</MenuItem>
          <MenuItem value="Truck">Truck</MenuItem>
          <MenuItem value="SUV">SUV</MenuItem>
          <MenuItem value="Van">Van</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="simple-select-outlined-label">Price</InputLabel>
        <Select
          labelId="simple-select-outlined-label"
          id="simple-select-outlined"
          value={JSON.stringify(price)}
          onChange={event => {
            let filterPrice = JSON.parse(event.target.value);
            dispatch(setFilterPrice(filterPrice));
            dispatch(fetchCars());
          }}
          label="Price"
        >
          <MenuItem
            value={JSON.stringify({
              priceLT: '',
              priceGT: '',
            })}
          >
            <em>None</em>
          </MenuItem>
          <MenuItem
            value={JSON.stringify({
              priceLT: 100,
              priceGT: '',
            })}
          >
            Under $100
          </MenuItem>
          <MenuItem
            value={JSON.stringify({
              priceLT: 200,
              priceGT: 100,
            })}
          >
            $100 - $200
          </MenuItem>
          <MenuItem
            value={JSON.stringify({
              priceLT: '',
              priceGT: 200,
            })}
          >
            Over $200
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
