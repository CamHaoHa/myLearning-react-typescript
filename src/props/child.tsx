interface ChildProp {
  color: string
}

export const Child = ({color}:ChildProp) => {
  return <div>
    {color}
  </div>
}
