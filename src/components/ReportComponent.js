import {useContext} from 'react'
import DataContext from '../data/DataContext'
import './ReportComponent.css'

export default function ReportComponent() {
    const {income,expense} = useContext(DataContext);
    const formatNumber=(num)=>{
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
    return (
        <div>
            <h3 >ยอดคงเหลือ (บาท)</h3>
            <h1 className="headTotal">{formatNumber((income-expense).toFixed(2))}</h1>
            <div className="report-container">
                <div>
                    <h3>ยอดรายรับ</h3>
                    <p className="report plus" >{formatNumber(income.toFixed(2))}</p>
                </div>
                <div>
                    <h3>ยอดรายจ่าย</h3>
                    <p className="report minus" >{formatNumber(expense.toFixed(2))}</p>
                </div>
            </div>
        </div>
    )
}
