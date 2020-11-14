import { Box, Typography, withStyles } from '@material-ui/core'
import moment from 'moment'
import 'moment/locale/ru'
import React from 'react'
import styles from './css/ListStyle'
import getTimeFromMins from '../utils/minutesToHours'

const ListItem = ({ element, classes }) => {

    moment.locale('ru');

    console.log(classes)

    const {
        carrier,
        legs,
        price,
    } = element.flight

    const item = <div className={classes.item_main_content}>
        {legs.map(element => {
            return element.segments.map((segment, index) => {

                let format = 'YYYY-MM-DD HH:mm:ss'
                let departureDate = segment.departureDate
                let departureDayOfWeek = moment(departureDate, format).format('dddd')
                let departureDay = moment(departureDate, format).format('DD MMMM.')
                let departureTime = moment(departureDate, format).format('HH:mm')
                let arrivalDate = segment.arrivalDate
                let arrivalDayOfWeek = moment(arrivalDate, format).format('dddd')
                let arrivalDay = moment(arrivalDate, format).format('DD MMMM.')
                let arrivalTime = moment(arrivalDate, format).format('HH:mm')
                let diffirence = segment.travelDuration

                return (
                    <Box borderBottom='2px solid #0087C9' p='5px 0' key={index}>
                        <div className={classes.derection}>
                            <div>
                                <p>
                                    {`${segment.departureCity !== undefined && segment.departureCity.caption},
                                    ${segment.departureAirport.caption}`}
                                    <span className={classes.blue_text}>({segment.departureAirport.uid})</span>
                                </p>
                            </div>
                            <Box margin="0 10px">
                                <img style={{ width: '20px' }} src="./arrow-right.svg" alt="" />
                            </Box>
                            <div>
                                <p>
                                    {`${segment.arrivalCity !== undefined && segment.arrivalCity.caption},
                                    ${segment.arrivalAirport.caption}`}
                                    <span className={classes.blue_text}>({segment.arrivalAirport.uid})</span>
                                </p>
                            </div>
                        </div>
                        <div className={classes.date_box}>
                            <Box width='40%'>
                                <p>
                                    <span className={classes.text_time}>{departureTime} </span>
                                    <span className={classes.blue_text}>{departureDay} {departureDayOfWeek}</span>
                                </p>
                            </Box>
                            <Box width='20%'>
                                <Typography align='center' variant='h5'>{getTimeFromMins(diffirence)}</Typography>
                            </Box>
                            <Box width='40%'>
                                <Typography align='right'>
                                    <span className={classes.blue_text}>{arrivalDay} {arrivalDayOfWeek}</span>
                                    <span className={classes.text_time}> {arrivalTime}</span>
                                </Typography>
                            </Box>
                        </div>
                        <Box display='flex' justifyContent='center'>
                            <div className={classes.stops_box}>
                                {segment.stops > 0 && <div className={classes.stops_box_text}>1 пересадка</div>}
                            </div>
                        </Box>
                        <Box p='5px 10%'>
                            <p>Рейс выполняет: {segment.airline.caption}</p>
                        </Box>
                    </Box>
                )
            })
        })}
    </div>

    return (
        <div className={classes.item_wrap}>
            <div className={classes.header}>
                <div>
                    <p>{carrier.caption}</p>
                </div>
                <div>
                    <p className={classes.header_text_total}>
                        {price.total.amount} {price.total.currency}
                    </p>
                    <p>Стоимость для 1 взрослого поссажира</p>
                </div>
            </div>
            {item}
            <div className={classes.button} >Выбрать</div>
        </div>
    );
}

export default withStyles(styles)(ListItem)