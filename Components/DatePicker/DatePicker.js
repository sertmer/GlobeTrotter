import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

export const DatePicker = (props) => {
  const { setDestinationStartDate, setDestinationEndDate } = props;
  const [markedDates, setMarkedDates] = useState({});
  const [startPicked, setStartPicked] = useState(false);
  const [endPicked, setEndPicked] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const setCurrent = () => {
    if (endDate === '') {
      return startDate
    } else {
      return endDate
    }
  };

  const onDayPress = day => {
    if (startPicked === false) {
      let datesMarked = {};
      datesMarked[day.dateString] = { startingDay: true, color: '#2CCB70', textColor: '#FFFFFF' };
      setMarkedDates(datesMarked);
      setStartPicked(true);
      setStartDate(day.dateString);
      setDestinationStartDate(day.dateString);
    } else {
      setEndDate(day.dateString);
      setDestinationEndDate(day.dateString);
      let datesMarked = markedDates;
      let start = moment(startDate)
      let end = moment(day.dateString)
      let range = end.diff(start, 'days');

      if (range > 0) {
        for (let i = 1; i <= range; i++) {
          let tempDate = start.add(1, 'day');
          tempDate = moment(tempDate).format('YYYY-MM-DD')
          if (i < range) {
            datesMarked[tempDate] = { color: '#2CCB70', textColor: '#FFFFFF' };
          } else {
            datesMarked[tempDate] = { endingDay: true, color: '#2CCB70', textColor: '#FFFFFF' };
          }
        }
        setMarkedDates(datesMarked);
        setStartPicked(false);
        setEndPicked(true);
      } else {
        alert('Select an upcoming date!')
      }
    }
  }

  return (
    <Calendar
      current={setCurrent()}
      minDate={Date()}
      markingType={'period'}
      onDayPress={onDayPress}
      style={{width: '95%', borderRadius: 8}}
      theme={{
        calendarBackground: 'white',
        textSectionTitleColor: '#065a87',
        dayTextColor: 'black',
        todayTextColor: 'black',
        selectedDayTextColor: '#1E88E5',
        selectedDayBackgroundColor: '#333248',
        monthTextColor: '#1E88E5',
        indicatorColor: 'black',
        textDayFontSize: 20,
        textDisabledColor: '#b3bcbb',
        textMonthFontSize: 24,
        arrowColor: 'black',
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
