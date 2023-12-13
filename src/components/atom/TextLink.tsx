import { Link } from "react-router-dom"

type LinkProps = {
    className: string
    to: string
    body: React.ReactNode
}
const TextLink = ({className, to, body}: LinkProps) => {
  return (
    <Link className={className} to={to}>{body}</Link>
  )
}

export default TextLink
