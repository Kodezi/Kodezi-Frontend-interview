import React from 'react'
import './Dropdown.scss'
import { Select } from 'antd'

const { Option } = Select

const Dropdown = ({ items = [], onChange, name, value }) => {
  return (
    <Select
      defaultValue="Select Language"
      name={name}
      value={value}
      onChange={onChange}
    >
      {items &&
        items.map((item, i) => {
          return (
            <Option value={item.value} key={i}>
              {item.label}
            </Option>
          )
        })}
    </Select>
  )
}

export default Dropdown
