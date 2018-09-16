import React from 'react'

export const QuantityDropdown = () => (
  <div className="flex wrap">
    <h3 className="slight-padding">Select Quantity:</h3>
    <div className="center" id="size-dropdown">
      <div>
        <label htmlFor="size-select" />
        <select name="size-select" id="size-select" defaultValue="--">
          <option disabled>--</option>
          <option>1</option>
          <option>3</option>
          <option>5</option>
          <option>7</option>
          <option>9</option>
        </select>
      </div>
    </div>
  </div>
)
