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
            {sock.sizes.map((size, i) => (
              // OB: probably need to assign the `option`'s `value=???`
              <Fragment key={i}>
                <option key={i}>
                  Men's - {size}
                </option>
                <option key={size.length}>
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
