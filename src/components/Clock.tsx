
import React, { useEffect, useState } from 'react'
import { Number } from './Number'
import { Word } from './Word';
import { NUMBERS, WEEK_DAYS } from '../utils/constants';


export const Clock = ({h24=true}) => {

    const [hour  , setHour  ] = useState<string|undefined>("0");
    const [minute, setMinute] = useState<string|undefined>("0");
    const [second, setSecond] = useState<string|undefined>("0");
    const [day   , setDay   ] = useState(0);
    const [pm    , setPm    ] = useState(false);

    useEffect(()=> {

        const update = () => {
            const date = new Date();
            let hour = date.getHours();
            hour+=6;
            if(!h24) {
                hour = (hour % 12) || 12;
            }
            setHour(NUMBERS.get(`${hour}`));
            setMinute(NUMBERS.get(`${date.getMinutes()}`));
            setSecond(NUMBERS.get(`${date.getSeconds()}`));
            setDay(date.getDay());
            setPm(date.getHours() >= 12);
        }

        update();

        const interval = setInterval(()=> {
            update();
        }, 1000);

        return ()=>clearInterval(interval);
    }, [h24]);

    return (
        <div className='clock'>
            <div className='calendar'>
                {
                    WEEK_DAYS.map((value, index)=>(<Word key={value} value={value} hidden={index != day}/>))
                }
            </div>
            <div className='row'>
                <div className='hour'>
                    <Number value={hour}/>
                    <Word value={':'} />
                    <Number value={minute}/>
                    <Word value={':'} />
                    <Number value={second}/>
                </div>
                <div className='ampm'>
                    <Word value={'AM'} hidden={ pm} />
                    <Word value={'PM'} hidden={!pm} />
                </div>
            </div>
        </div>
    )
    
}
