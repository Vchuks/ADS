type ImageProp = {
alt: string
className: string
src: string
}

const Image = ({alt, className, src}:ImageProp )=> {
  return (
    <img className={className} src={src} alt={alt}/>
  )
}

export default Image
