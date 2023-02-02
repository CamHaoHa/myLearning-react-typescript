interface ChildProp {
  color: string
  onClick : () => void
  children?: React.ReactNode  
}

// like java void is used wher there is no data. like a function doesnot return any value


export const Child = ({color, onClick}:ChildProp) => {
  return <div>
    {color}
    <button onClick ={onClick}>Click Me</button>
  </div>
}


 //differenrt way 

export const ChildasFc: React.FC<ChildProp> =({color, onClick}) => {
  return <div>{color}
  
  <button onClick ={onClick}>Click Me</button></div>
  

}

