import React from 'react';

const Loader = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
                margin: "auto", background: "transparent", position: "absolute",
                top: 0, left: 0, bottom: 0, right: 0
            }}
            width="200"
            height="200"
            display="block"
            preserveAspectRatio="xMidYMid"
            viewBox="0 0 100 100"
        >
            <path
                fill="none"
                stroke="#e90c59"
                strokeDasharray="64.14723205566406 64.14723205566406"
                strokeLinecap="round"
                strokeWidth="2.56"
                d="M15.552 19.2C7.296 19.2 3.2 27.712 3.2 32s4.096 12.8 12.352 12.8c12.352 0 20.544-25.6 32.896-25.6C56.704 19.2 60.8 27.712 60.8 32s-4.096 12.8-12.352 12.8c-12.352 0-20.544-25.6-32.896-25.6z"
            >
                <animate
                    attributeName="stroke-dashoffset"
                    dur="1s"
                    keyTimes="0;1"
                    repeatCount="indefinite"
                    values="0;256.58892822265625"
                ></animate>
            </path>
        </svg>
    )
}

export default Loader
