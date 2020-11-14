import React, { useEffect, useState } from 'react'
import ListItem from './ListItem';
import flights from '../data/flights.json'
import { Box, Button } from '@material-ui/core';
import Filter from './Filter';

const List = () => {

    const [data, setData] = useState(null)
    const [filteredData, setFilteredData] = useState([])
    const [page, setPage] = useState(1)
    const [sort, setSort] = useState('asc');
    const [render, setRender] = useState(false);
    const [filterByAirlines, setFilterByAirlines] = useState([]);
    const [lowestPriceRange, setLowestPriceRange] = useState(0);
    const [highestPriceRange, setHighestPriceRange] = useState(200000);
    const [airlines, setAirLines] = useState('');

    // flight.price.total.amount

    const sortedBy = (arr, sortedBy) => {
        let data
        if (sortedBy === 'asc') {
            data = arr.sort(function (a, b) {
                return parseFloat(a.flight.price.total.amount) - parseFloat(b.flight.price.total.amount);
            })
        }
        if (sortedBy === 'desc') {
            data = arr.sort(function (a, b) {
                return parseFloat(b.flight.price.total.amount) - parseFloat(a.flight.price.total.amount);
            })
        }
        if (sortedBy === 'travel') {
            data = arr.sort(function (a, b) {

                let durationA = a.flight.legs[0].duration + a.flight.legs[1].duration
                let durationB = b.flight.legs[0].duration + b.flight.legs[1].duration

                return parseFloat(durationA) - parseFloat(durationB);
            })
        }
        setData(data)
        setRender(!render)
        setPage(1)
    }

    useEffect(() => {
        let loadData
        try {
            if (data === null) loadData = JSON.parse(JSON.stringify(flights));
            let airlinesData = new Set(loadData.result.flights.map(e => e.flight.carrier.caption))
            setAirLines([...airlinesData])
            sortedBy(loadData.result.flights, sort)
        } catch (e) {
            console.log(e)
        }
    }, [])  // eslint-disable-line
 
    useEffect(() => {
        data !== null && sortedBy(data, sort)
    }, [sort]) // eslint-disable-line

    useEffect(() => {
        if (data) {
            let result = data.filter((e, i) => {
                let priceRange = e.flight.price.total.amount >= lowestPriceRange && e.flight.price.total.amount <= highestPriceRange
                if (filterByAirlines.length > 0) {
                    let compare = filterByAirlines.find(element => element === e.flight.carrier.caption)
                    return priceRange && compare
                }
                return priceRange
            })
                .filter((e, i) => i <= page)
            setFilteredData(result)
        }
    }, [data, filterByAirlines, sort, lowestPriceRange, highestPriceRange, page])

    console.log(filteredData.length, page)

    return (
        <>
            <Box display='flex'>
                <Filter
                    airlines={airlines}
                    setSort={setSort}
                    sort={sort}
                    setPage={setPage}
                    filterByAirlines={filterByAirlines}
                    setFilterByAirlines={setFilterByAirlines}
                    setLowestPriceRange={setLowestPriceRange}
                    setHighestPriceRange={setHighestPriceRange}
                />
                <Box>
                    {filteredData && filteredData.map((element, index) => {
                        return <ListItem element={element} key={index} />
                    })}
                    <Box display='flex' justifyContent='center' mb='40px'>
                        {filteredData.length > page 
                            ?  <Button variant="contained" onClick={() => setPage(page + 2)}>показать еще</Button>
                            : <p>Конец списка</p>
                        }
                    </Box>
                </Box>
            </Box>

        </>
    );
}

export default List