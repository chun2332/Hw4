import React from 'react';
import moment from 'moment';


interface plan {
        guaranteed: Boolean,
        date: moment.Moment,
        price: Number,
        availableVancancy: Number,
        totalVacnacy: Number,
        status: String
    }

interface IProps {
    initYearMonth?: string;
    selectedYearMonth:moment.Moment;
    getDays: number;
    lackDays: number;
    firstDayWeek: number;
    selectedPlans: plan | any ;
}


const CalendarGrid: React.FC<IProps> = props => {
    const { getDays, lackDays, firstDayWeek, selectedPlans } = props
    
    const week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
    const prevLackDays = []
    const restLackDays = []
    const date = []

    for (let i = 0; i < firstDayWeek; i++){
        prevLackDays[i] = i
    }
    for (let i = 0; i < lackDays; i++){
        restLackDays[i] = i
    }
    for (let i = 0; i < getDays; i++){
        date[i] = i+1
    }

    let prevLackBlock = prevLackDays.map(() => { <div></div> })
    let restLackBlock = restLackDays.map(() => { <div></div> })
    let dateBlock = date.map(date1 => {
        return (
            <div key={date1}>{date1}{selectedPlans.map((date2: any) => {
                if (date1 === parseInt(date2.date.format('DD'))) {
                    return (
                        <div>
                            <div className={date2.guaranteed ? "guaranteed" : ""}>{date2.guaranteed ? "成團" : "閉團"}</div>
                            <div className={date2.status === "報名" ? "OGstatus" : "status"}>{date2.status}</div>
                            <div>可賣:{date2.availableVancancy}</div>
                            <div>團位:{date2.totalVacnacy}</div>
                            <div>${ date2.price}</div>
                        </div>
                    )
                }
            })}

            </div>
        )})
    let weekBlock = week.map(i => { i })
    return (
        <div>
            {weekBlock}{prevLackBlock}{dateBlock}{restLackBlock}
        </div>
    )

    
    
    
}


export default CalendarGrid