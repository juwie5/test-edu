import React from "react";
import "../../styles/checkmarkstyle.css";

const CheckSvgMark = () => {
    const myStyle = {
        strokeDasharray : "480px, 480px",
        strokeDashoffset : "960px"
    }
    const myStyle2 = {
        strokeDasharray : "100px, 100px",
        strokeDashoffset : "200px"
    }
    
    return (
        <>
            <div className="animation-ctn">
                <div className="icon icon--order-success svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="154px" height="154px">
                        <g fill="none" stroke="#195EF7" stroke-width="2">
                            <circle cx="77" cy="77" r="72" style={myStyle}></circle>
                            <circle id="colored" fill="#195EF7" cx="77" cy="77" r="72" style={myStyle}></circle>
                            <polyline class="st0" stroke="#fff" stroke-width="10" points="43.5,77.8 63.7,97.9 112.2,49.4 " style={myStyle2} />
                        </g>
                    </svg>
                </div>
            </div>
        </>
    )
}

export default CheckSvgMark;