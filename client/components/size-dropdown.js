import React, {Fragment} from 'react'

export const SizeDropdown = props => {
  const {sock} = props

  return (
    <div className="flex wrap">
      <h3 className="slight-padding">Select Size:</h3>
      <div className="center" id="size-dropdown">
        <div>
          <label htmlFor="sizeSelect" />
          <select name="sizeSelect" id="size-select" defaultValue="--" required>
            <option value="">--</option>
            {sock.sizes.map((size) => (
              <Fragment key={size}>
                <option key={`Men's - ${size}`}
                  val={`Men's - ${size}`}>
                  Men's - {size}
                </option>
                <option key={`Women's - ${size}`}
                  val={`Men's - ${size}`}>
                  Women's - {size}
                </option>
              </Fragment>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
