import React from 'react'

export const QuantityDropdown = () => (
  <div className="flex wrap no-margin-left-right-top">
    <h3 className="slight-padding">Select Quantity:</h3>
    <div className="center" id="quantity-dropdown">
      <label htmlFor="quantitySelect" />
      <select name="quantitySelect" id="quantity-select" required>
        <option>1</option>
        <option>3</option>
        <option>5</option>
        <option>7</option>
        <option>9</option>
      </select>
    </div>
  </div>
)
