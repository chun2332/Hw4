// import React from 'react';
// import Link from 'next/link'
// import { BiLeftArrow } from 'react-icons/bi'
// import { BiRightArrow } from 'react-icons/bi'



// class Index extends React.Component {
//     render() {
        
    
//         return <>
//             <div>
//                 <div className="border-0"></div>

//             </div>
//         <table className="m-auto mt-10 w-37.5">
            
//             <thead className="border-t border-b border-r border-l border-gray-200 text-lg">
//                 <tr className="text-gray-700">
//                     <th className="w-14% text-center">星期日</th>
//                     <th className="w-14% text-center">星期一</th>
//                     <th className="w-14% text-center">星期二</th>
//                     <th className="w-14% text-center">星期三</th>
//                     <th className="w-14% text-center">星期四</th>
//                     <th className="w-14% text-center">星期五</th>
//                     <th className="w-14% text-center">星期六</th>
//                 </tr>
//             </thead>
//             <tbody className="border-b border-r border-gray-200">
//             <tr className="border-b border-r border-gray-200">
//                 <td className="no-style border-l"></td>
//                 <td className="border-b border-r border-l border-gray-200 hover:bg-yellow-100">
//                     <div className="h-24">
//                         <span>1</span>
//                     </div>
//                 </td>
//                 <td className="border-b border-r border-gray-200 hover:bg-yellow-100">
//                     <div className="h-24">
//                         <span>2</span>
//                     </div>
//                 </td>
//                 <td className="border-b border-r border-gray-200 hover:bg-yellow-100">
//                     <div className="h-24 flex justify-between">
//                         <div>
//                             <span>3</span>
//                         </div>
//                         <div className="w-10 h-6 bg-orange text-white text-center">
//                             <span>成團</span>
//                         </div>
//                     </div>
//                 </td>
//                 <td className="border-b border-r border-gray-200 hover:bg-yellow-100">
//                     <div className="h-24 flex justify-between">
//                         <div>
//                             <span>4</span>
//                         </div>
//                         <div className="w-10 h-6 bg-orange text-white text-center">
//                             <span>成團</span>
//                         </div>
//                     </div>
//                 </td>
//                 <td className="border-b border-r border-gray-200 hover:bg-yellow-100">
//                     <div className="h-24 flex justify-between">
//                         <div>
//                             <span>5</span>
//                         </div>
//                         <div className="w-10 h-6 bg-orange text-white text-center">
//                             <span>成行</span>
//                         </div>
//                     </div>
//                 </td>
//                 <td className="border-b border-r border-gray-200 hover:bg-yellow-100">
//                     <div className="h-24">
//                         <span>6</span>
//                     </div>
//                 </td>
//             </tr>
//             <tr>
//                 <td className="border-b border-r border-l border-gray-200 hover:bg-yellow-100">
//                     <div className="h-24 flex justify-between">
//                         <div>
//                             <span>7</span>
//                         </div>
//                         <div className="w-10 h-6 bg-orange text-white text-center">
//                             <span>成行</span>
//                         </div>
//                     </div>
//                 </td>
//                 <td className="border-b border-r border-gray-200 hover:bg-yellow-100">
//                     <div className="h-24">
//                         <span>8</span>
//                     </div>
//                 </td>
//                 <td className="border-b border-r border-gray-200 hover:bg-yellow-100">
//                     <div className="h-24">
//                         <span>9</span>
//                     </div>
//                 </td>
//                 <td className="border-b border-r border-gray-200 hover:bg-yellow-100">
//                     <div className="h-24">
//                         <span>10</span>
//                     </div>
//                 </td>
//                 <td className="border-b border-r border-gray-200 hover:bg-yellow-100">
//                     <div className="h-24">
//                         <span>11</span>
//                     </div>
//                 </td>
//                 <td className="border-b border-r border-gray-200 hover:bg-yellow-100">
//                     <div className="h-24">
//                         <span>12</span>
//                     </div>
//                 </td>
//                 <td className="border-b border-r border-gray-200 hover:bg-yellow-100">
//                     <div className="h-24">
//                         <span>13</span>
//                     </div>
//                 </td>
//             </tr>
//             <tr>
//                 <td className="border-b border-r border-l border-gray-200 hover:bg-yellow-100">
//                     <div className="h-24">
//                         <span>14</span>
//                     </div>
//                 </td>
//                 <td className="border-b border-r border-gray-200 hover:bg-yellow-100">
//                     <div className="h-24">
//                         <span>15</span>
//                     </div>
//                 </td>
//                 <td className="border-b border-r border-gray-200 hover:bg-yellow-100">
//                     <div className="h-24">
//                         <span>16</span>
//                     </div>
//                 </td>
//                 <td className="border-b border-r border-gray-200 hover:bg-yellow-100">
//                     <div className="h-24">
//                         <span>17</span>
//                     </div>
//                 </td>
//                 <td className="border-b border-r border-gray-200 hover:bg-yellow-100">
//                     <div className="h-24">
//                         <span>18</span>
//                     </div>
//                 </td>
//                 <td className="border-b border-r border-gray-200 hover:bg-yellow-100">
//                     <div className="h-24">
//                         <span>19</span>
//                     </div>
//                 </td>
//                 <td className="border-b border-r border-gray-200 hover:bg-yellow-100">
//                     <div className="h-24">
//                         <span>20</span>
//                     </div>
//                 </td>
//             </tr>
//                 <tr>
//                     <td className="border-b border-r border-l border-gray-200 hover:bg-yellow-100">
//                         <div className="h-24">
//                             <span>21</span>
//                         </div>
//                     </td>
//                     <td className="border-b border-r border-gray-200 hover:bg-yellow-100">
//                         <div className="h-24">
//                             <span>22</span>
//                         </div>
//                     </td>
//                     <td className="border-b border-r border-gray-200 hover:bg-yellow-100">
//                         <div className="h-24">
//                             <span>23</span>
//                         </div>
//                     </td>
//                     <td className="border-b border-r border-gray-200 hover:bg-yellow-100">
//                         <div className="h-24">
//                             <span>24</span>
//                         </div>
//                     </td>
//                     <td className="border-b border-r border-gray-200 hover:bg-yellow-100">
//                         <div className="h-24">
//                             <span>25</span>
//                         </div>
//                     </td>
//                     <td className="border-b border-r border-gray-200 hover:bg-yellow-100">
//                         <div className="h-24">
//                             <span>26</span>
//                         </div>
//                     </td>
//                     <td className="border-b border-r border-gray-200 hover:bg-yellow-100">
//                         <div className="h-24">
//                             <span>27</span>
//                         </div>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td className="border-b border-r border-l border-gray-200 hover:bg-yellow-100">
//                         <div className="h-24">
//                             <span>28</span>
//                         </div>
//                     </td>
//                     <td className="border-b border-r border-gray-200 hover:bg-yellow-100">
//                         <div className="h-24">
//                             <span>29</span>
//                         </div>
//                     </td>
//                     <td className="border-b border-r border-gray-200 hover:bg-yellow-100">
//                         <div className="h-24">
//                             <span>30</span>
//                         </div>
//                     </td>
//                     <td className="border-b border-r border-gray-200 hover:bg-yellow-100">
//                         <div className="h-24">
//                             <span>31</span>
//                         </div>
//                     </td>
//                     <td className="no-style"></td>
//                     <td className="no-style"></td>
//                     <td className="no-style"></td>
//                 </tr>
//             </tbody>
//         </table>
//     </>
//     }
// }

// export default Index

import React from 'react';
import moment from 'moment';
import CalendarGrid from './CalendarGrid';
import CalendarList from './CalendarList';
import {useDispatch, useSelector} from 'react-redux';

interface dataSource{
    guaranteed: boolean,
    date: string,
    price: number | string,
    availableVancancy: number,
    totalVacnacy: number,
    status: string,
}

interface dataKeySetting {
    guaranteed: string
    status: string
    available: string
    total:string
    price: string
}

interface IProps {
    dataSource: dataSource,
    initYearMonth: string
    dataKeySetting:dataKeySetting
    calendar: boolean
    calendarData: object
    
}


const Calendar: React.FC<IProps> = props => {
    const selectedYearMonth = useSelector((state: any) => state.thisYearMonth)
    const dispatch = useDispatch()
    const dataKey = props.dataKeySetting

    const processDataSource = (data: any) => {
        let plans = new Map()
        data.forEach((item: any) => {
            const yearMonth = moment(item.date, 'YYYY/MM/DD').format('YYYYMM')
            const plan = {
                date: moment(item.date, 'YYYY/MM/DD'), //時間
                guaranteed: item[dataKey.guaranteed],  //保證出團
                status: item[dataKey.status],          //狀態
                available: item[dataKey.available], //可賣團位
                total: item[dataKey.total],     //團位
                price: item[dataKey.price]             //價格
            }
            if(plans.get(yearMonth) === undefined){
                plans.set(yearMonth,[plan])
            }else{
                plans.set(yearMonth,[...plans.get(yearMonth), plan])
            }
        })
        plans.forEach((values, _) => values.sort((plan1: any, plan2: any) => {
            if (plan1.date.isSame(plan2.date)) {
                return 0;
            } else if (plan1.date.isAfter(plan2.date)) {
                return 1;
            } else {
                return -1;
            }
        }))
        return plans
    }
    let plans:any =  processDataSource(props.calendarData)
    const [selectedPlans,changePlan] = React.useState(plans.get(props.initYearMonth)) //出團資料
    let maxDate = Math.max(...plans.keys())
    let minDate = Math.min(...plans.keys())
    const prevMonth = selectedYearMonth.clone().subtract(1,'month'); //前一個月
    const nextMonth = selectedYearMonth.clone().add(1,'month');      //後一個月
    const months = [prevMonth,selectedYearMonth,nextMonth]
    React.useEffect(()=>{
        changePlan(plans.get(selectedYearMonth.format('YYYYMM')))
    },[selectedYearMonth])

    const changePrevMonth = () =>{
        // parseInt(prevMonth.format('YYYYMM')) < minDate ? changeMonth(selectedYearMonth): changeMonth(selectedYearMonth.clone().subtract(1,'month'))
        parseInt(prevMonth.format('YYYYMM')) < minDate ?  dispatch({
            type: 'GOTO_YEARMONTH',
            payload: selectedYearMonth,  
        }):
        dispatch({
            type: 'PREV_YEARMONTH',
            payload: selectedYearMonth,  
        })
    }
    const arrowLeft = (
        <div className="arrow left">
            <span className="triangle-left"
            onClick={changePrevMonth}></span>
        </div>)
    
    const changeNextMonth = () =>{
        // parseInt(nextMonth.format('YYYYMM')) > maxDate ? changeMonth(selectedYearMonth): changeMonth(selectedYearMonth.clone().add(1,'month'))
        parseInt(nextMonth.format('YYYYMM')) > maxDate ? dispatch({
            type: 'GOTO_YEARMONTH',
            payload: selectedYearMonth,  
        }): dispatch({
            type: 'NEXT_YEARMONTH',
            payload: selectedYearMonth,
        })
    }

    const arrowRight = (
        <div className="arrow right">
            <span className="triangle-right"
            onClick={changeNextMonth}></span>
        </div>)
    

    const ntb = (
        <div><ul className="ntb">{months.map(month=>{
            return(
            parseInt(prevMonth.format('YYYYMM')) < minDate || parseInt(nextMonth.format('YYYYMM')) > maxDate ? 
            parseInt(prevMonth.format('YYYYMM')) < minDate ? 
            <li className={"tab title"+(parseInt(month.format('YYYYMM')) < minDate  ? ' now' : ' null')} key={month.format('YYYY MM')}>
                {month === selectedYearMonth ? 
                <span>{month.clone().add(1,'month').format('YYYY MM')}</span> : month === prevMonth ?
                <span onClick={changePrevMonth}>{month.clone().add(1,'month').format('YYYY MM')}</span> :
                <span onClick={changeNextMonth}>{month.clone().add(1,'month').format('YYYY MM')}</span> }
            </li>
            //游標點到擁有資料的最小年月時候
            : 
            <li className={"tab title"+(parseInt(month.format('YYYYMM')) > maxDate  ? ' now' : ' null')} key={month.format('YYYY MM')}>
               {month === selectedYearMonth ? 
               <span>{month.clone().subtract(1,'month').format('YYYY MM')}</span> : month === prevMonth ?
               <span onClick={changePrevMonth}>{month.clone().subtract(1,'month').format('YYYY MM')}</span> :
               <span onClick={changeNextMonth}>{month.clone().subtract(1,'month').format('YYYY MM')}</span> }
            </li>
             //游標點到擁有資料的最大年月時候
                :
            <li className={"tab title"+(month === selectedYearMonth ? ' now' : ' null')} key={month.format('YYYY MM')}>
                {month === selectedYearMonth ? 
                <span>{month.format('YYYY MM')}</span> : month === prevMonth ?
                <span onClick={changePrevMonth}>{month.format('YYYY MM')}</span> :
                <span onClick={changeNextMonth}>{month.format('YYYY MM')}</span> }
            </li>
            )
        })}</ul></div>
    )

    
    return (
        <div>
        <div>
            {arrowLeft}
            {ntb}
            {arrowRight}
        </div>
        {props.calendar ? <CalendarGrid
        selectedYearMonth={selectedYearMonth}
        getDays={selectedYearMonth.daysInMonth()}
        firstDayWeek={selectedYearMonth.day()}
        lackDays={42 - selectedYearMonth.day() - selectedYearMonth.daysInMonth()}
        selectedPlans={selectedPlans}/> :
        <CalendarList selectedPlans={selectedPlans}/>}
    </div>
    )
}


export default Calendar