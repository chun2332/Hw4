import React from 'react';
import {useState, useEffect} from 'react'

interface plan {
    guaranteed: Boolean,
    date: moment.Moment,
    price: Number,
    availableVancancy: Number,
    totalVacnacy: Number,
    status: String
}

interface IProps {
    selectedPlans: plan | any ;

}

const CalendarList: React.FC<IProps> = props => {
    const { selectedPlans } = props
    const week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
    const PLANS_PER_PAGE = 7
    const totalPages = Math.ceil(selectedPlans.length / PLANS_PER_PAGE)
    const [currentPage, setCurrentPage] = useState(1)
    const begin = (currentPage - 1) * PLANS_PER_PAGE
    const [showPlans, setShowPlans] = useState(props.selectedPlans.slice(begin, PLANS_PER_PAGE * currentPage))

    let page = []
    for (let i = 1; i < totalPages; i++) {
        page[i] = i
    }
    let pageIndex = page.map(item => { <div onClick={() => { setCurrentPage(item) }}>{item}</div> })
    
    useEffect(() => {
        setShowPlans(props.selectedPlans.slice(begin, PLANS_PER_PAGE * currentPage))
    }, [currentPage])
    
    const changePrevPage = () => setCurrentPage(currentPage - 1)
    const changeNextPage = () => setCurrentPage(currentPage + 1)
    
    let dataBlock = showPlans.map((item: any) => {
        return (
            <div>
                <span>{new Date(item.date.format('YYY/MM/DD')).getDate()}</span>
                <div>{week[new Date(item.date.format('YYY/MM/DD')).getDate()]}</div>
                <div className={item.guaranteed ? "guaranteed" : "closed"}>{item.guaranteed ? "成團" : "閉團"}</div>
                <div className={item.status === "報名" ? "OGstatus" : "status"}>{item.status}</div>
                <div>可賣:{item.availableVancancy}</div>
                <div>團位:{item.totalVacnacy}</div>
                <div>${item.price}</div>
            </div>
        )})
        
    return (
        <div className='currentday2'>
        {dataBlock}
        <div className='pageIndex'>
        {(currentPage - 1) !== 0 ? <div className='prevPage' onClick={changePrevPage}>上一頁</div>
        : false}
        {pageIndex}
        {currentPage !== totalPages ? <div className='nextPage' onClick={changeNextPage}>下一頁</div>
        : false}
        </div>
    </div>)
   
}

export default CalendarList