import Text from "./Text"

type BoxProp = {
    firstText: string
    firstClass: string 
    secondText: string
    secondClass: string
    mainClass: string
}
const Box = ({firstText,mainClass, secondText, firstClass, secondClass}: BoxProp) => {
  return (
    <div className={mainClass}>
      <Text className={firstClass || 'text-[#4D5657] leading-none font-semibold'} body={firstText} />
      <Text className={secondClass || 'text-[#4D5657] leading-snug pt-1' } body={secondText} />
    </div>
  )
}

export default Box
