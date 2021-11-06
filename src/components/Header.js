import React from 'react'
import './Header.css'
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <div className="topnav">
            <h1 className="heading">บัญชีรายรับ - รายจ่าย</h1>
            <NavLink to="/" exact  >ข้อมูลบัญชี</NavLink>
            <NavLink to="/insert"  >บันทึกข้อมูล</NavLink>
        </div>
    )
}
