type TextProp = {
    className: string
    body: React.ReactNode
}
const Text = ({className, body}: TextProp) => {
  return (
   <p className={className}>{body}</p>
  )
}

export default Text
