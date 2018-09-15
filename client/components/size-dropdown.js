import React from 'react'

export const SizeDropdown = props => {
  const {sock} = props

  return (
    <div className="flex wrap">
      <h3 className="slight-padding">Select Size:</h3>
      <div className="center" id="size-dropdown">
        <div>
          <label htmlFor="size-select" />
          <select name="size-select" id="size-select" defaultValue="--">
            <option disabled>--</option>
            {sock.sizes.map((size, i) => (
              <option key={i}>
                {size} M - {size - 3} W
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
