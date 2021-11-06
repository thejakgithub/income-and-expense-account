import { useEffect, useState, useRef } from 'react'
import './FormComponent.css'
import { v4 as uuidv4 } from 'uuid'

const FormComponent = ({ onAddItem }) => {

    const empthyInput = {
        title: '',
        amount: ''
    }

    const [input, setInput] = useState(empthyInput);
    const [formValid, setFormValid] = useState(false);

    const { title, amount } = input;

    const titleRef = useRef(null);

    function handleChange(evt) {
        const value = evt.target.value;
        setInput({
            ...input,
            [evt.target.name]: value
        });
    }

    const saveItem = (evt) => {
        evt.preventDefault()
        const itemData = {
            id: uuidv4(),
            title: title,
            amount: Number(amount)
        }
        onAddItem(itemData);
        setInput(empthyInput);
    }

    useEffect(() => {
        Math.abs(amount) !== 0 ? setFormValid(true) : setFormValid(false);
        amount === '' && title === '' && titleRef.current.focus();
    }, [amount, title])


    return (
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" ref={titleRef} name="title" onChange={handleChange} value={title} required />
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="(+ รายรับ , - รายจ่าย)" name="amount" onChange={handleChange} value={amount} required />
                </div>
                <div>
                    <button type="submit" className="btn" disabled={!formValid}>เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent