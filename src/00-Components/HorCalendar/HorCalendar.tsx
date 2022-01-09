import React,{useEffect,useState} from 'react';
import StyledHorCalendar from './HorCalendar.style';
import {HorCalendarCell} from './HorCalendarCell';
import { add,format,set } from 'date-fns'
import {monthDays,nextMonthDays,previousMonthDays} from '../../06-Utils/time-utils';

const formatDate = (date:Date) => {
   return format( date,'PPPP')
}

const HorCalendar = (): JSX.Element => {
    const today = new Date();
    const [currentMonthDays,setCurrentMonthDays] = useState<number>();
    const [currentDate,setCurrentDate] = useState<Date>(new Date());
    const [selectedCells,setSelectedCells] = useState<string[] | []>([]);

    console.log(selectedCells,'this are the cells selected')

    const getNextMonthDays = () => {
        setCurrentDate(add(currentDate,{months:1}))
        setCurrentMonthDays(nextMonthDays(currentDate));
    }

    const getPreviousMonthDays = () => {
        setCurrentDate(add(currentDate,{months:-1}))
        setCurrentMonthDays(previousMonthDays(currentDate));
    }

    const selectCells = (date:string) => {
        setSelectedCells([...selectedCells,date])
    }

    useEffect(()=>{
        setCurrentMonthDays(monthDays()) 
    },[])

   return(
    <StyledHorCalendar>
        <div className="calendar-header">
            <button onClick={getPreviousMonthDays}>
                &lt;	
            </button>
            {currentDate && <p>{format( currentDate,'PPPP')}</p>} 
            <button onClick={getNextMonthDays}>
                &gt;
            </button>
        </div>
        <div className="calendar-body">
            <div className="calendar-body__cell-wrapper">
                {currentMonthDays && Array.from(
                Array(currentMonthDays)).map((x, index) => 
                <HorCalendarCell 
                        formatFunc={formatDate}
                        key={index}
                        today={formatDate(today)}
                        date={formatDate(set(currentDate,{date:index + 1}))}
                        onClickAction={selectCells}
                        arrayOfCells={selectedCells}
                        cellsSelector={(strings:string[])=>setSelectedCells(strings)}
                />)
                }
            </div>
        </div>
    </StyledHorCalendar>
   ) 
}

export default HorCalendar;