import React, { useEffect, useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Box, Checkbox, TextField, withStyles } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import styles from './css/ListStyle'

const Filter = ({
    sort,
    setSort,
    setFilterByAirlines,
    filterByAirlines,
    setLowestPriceRange,
    setHighestPriceRange,
    airlines,
    setPage, 
    classes }) => {

    const [state, setState] = useState({});

    useEffect(() => {
        setState(airlines)
    }, [airlines])

    const handleChangeSort = (event) => {
        setSort(event.target.value)
    };

    const handleChangeCheckbox = (event) => {
        let filteredAirlines = event.target.checked
            ? [event.target.name, ...filterByAirlines]
            : filterByAirlines.filter(e => e !== event.target.name)
        setFilterByAirlines(filteredAirlines)
        setState({ ...state, [event.target.name]: event.target.checked });
        setPage(1)
    }

    const inputHighestPrice = (event) => {
        let value = event.target.value.replace(/\s/g, '')
        if (value.length === 0 || isNaN(+value) || value.length < 5) value = 200000
        setHighestPriceRange(+value)
    }
    const inputLowesttPrice = (event) => {
        let value = event.target.value.replace(/\s/g, '')
        if (isNaN(+value)) value = 0
        setLowestPriceRange(+value)
    }

    return (
        <div className={classes.filter_wrap} >
            <FormControl component="fieldset">
                <FormLabel component="legend">Сортировать</FormLabel>
                <RadioGroup aria-label="Сортировать" name="Сортировка" value={sort} onChange={handleChangeSort}>
                    <FormControlLabel value="asc" control={<Radio />} label="по возростанию цены" />
                    <FormControlLabel value="desc" control={<Radio />} label="по убыванию цены" />
                    <FormControlLabel value="travel" control={<Radio />} label="по времени в пути" />
                </RadioGroup>
            </FormControl>
            <Box>
                <p>Цена</p>
                <Box display='flex'>
                    <p style={{ margin: '10px 10px 0 0' }}>от</p>
                    <TextField id="standard-search" onChange={inputLowesttPrice} defaultValue={0} type="search" />
                </Box>
                <Box display='flex' mt='10px'>
                    <p style={{ margin: '10px 10px 0 0' }}>до</p>
                    <TextField id="standard-search" onChange={inputHighestPrice} defaultValue={200000} type="search" />
                </Box>
            </Box>
            <Box mt='20px'>
                <FormControl component="fieldset" >
                    <FormLabel component="legend">Авиакомпании</FormLabel>
                    <FormGroup>
                        {airlines && airlines.map((e, index) => {
                            return <FormControlLabel
                                control={<Checkbox checked={state[e]} onChange={handleChangeCheckbox} name={e} />}
                                label={e}
                            />
                        })}
                    </FormGroup>
                </FormControl>
            </Box>
        </div>
    );
}

export default withStyles(styles)(Filter)