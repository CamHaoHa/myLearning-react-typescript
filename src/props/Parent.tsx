import { Child } from "./child";

import React from 'react'

const Parent = () => {
  return (
    <Child color='123' onClick ={() =>
      console.log('clicked')
    }>
        <div>
          Children prop 
          {/* by default, this text right here would show up inside of our child component as a prop call children */}
        </div>
    </Child>
  )
}

export default Parent