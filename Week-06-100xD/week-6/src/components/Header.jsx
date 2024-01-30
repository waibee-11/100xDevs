import React from 'react'
import { useState } from 'react'

const Header = React.memo(function Header(props) {
  return (
    <div>
        Hello {props.title}
    </div>
  )
})
export default Header;