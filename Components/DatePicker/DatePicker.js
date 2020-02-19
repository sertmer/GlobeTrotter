import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

export const DatePicker = () => {
  const [ markedDates, setMarkedDates ] = useState({});
  const [ startPicked, setStartPicked ] = useState(false);
  const [ endPicked, setEndPicked ] = useState(false);
  const [ startDate, setStartDate ] = useState('');
  const [ endDate, setEndDate ] = useState('');

  const onDayPress = day => {
    console.log('hey')
    if (startPicked == false) {
      let datesMarked = {};
      markedDates[day.dateString] = { startingDay: true, color: '#00B0BF', textColor: '#FFFFFF'};
      setMarkedDates(datesMarked);
      setStartPicked(true);
      setStartDate(day.dateString)
    } else {
      setEndDate(day.dateString);
      let datesMarked = markedDates;
      let start = moment(startDate)
      let end = moment(endDate)
      let range = end.diff(start, 'days');
      console.log(range)
      console.log('start: ', startDate)
      console.log('end: ', endDate)

      if (range > 0) {
        for (let i = 1; i <= range; i++) {
          let tempDate = start.add(1, 'day');
          tempDate = moment(tempDate).format('YYYY-MM-DD')
          if ( i < range ) {
            datesMarked[tempDate] = { color: '#00B0BF', textColor: '#FFFFFF' };
          } else {
            datesMarked[tempDate] = { endingDay: true, color: '#00B0BF', textColor: '#FFFFFF' };
          }
        }
        setMarkedDates(datesMarked);
        setStartPicked(false);
        setEndPicked(true);
        setStartDate('')
      } else {
        alert('Select an upcoming date!')
      }
    }
  }

  return (
    <Calendar
      // style={styles.calendar}
      current={Date()}
      minDate={Date()}
      // displayLoadingIndicator
      markingType={'period'}
      onDayPress={onDayPress}
      theme={{
        calendarBackground: '#333248',
        textSectionTitleColor: 'white',
        dayTextColor: 'red',
        todayTextColor: 'white',
        selectedDayTextColor: 'white',
        monthTextColor: 'white',
        indicatorColor: 'white',
        selectedDayBackgroundColor: '#333248',
        arrowColor: 'white',
        // textDisabledColor: 'red',
        'stylesheet.calendar.header': {
          week: {
            marginTop: 5,
            flexDirection: 'row',
            justifyContent: 'space-around'
          }
        }
      }}
      markedDates={markedDates}
    />
  )
}

export default DatePicker;