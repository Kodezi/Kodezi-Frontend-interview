import React from 'react'

const ExampleIcon = ({ stroke, className, ...rest }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0001 18.3327C14.6025 18.3327 18.3334 14.6017 18.3334 9.99935C18.3334 5.39698 14.6025 1.66602 10.0001 1.66602C5.39771 1.66602 1.66675 5.39698 1.66675 9.99935C1.66675 14.6017 5.39771 18.3327 10.0001 18.3327Z"
        stroke="black"
        strokeWidth="2"
      />
      <path
        d="M10 5.83203H10.0083"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8.3335 9.16602H10.0002V13.3327"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.3335 13.332H11.6668"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ExampleIcon
