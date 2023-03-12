import UilHeart from "@iconscout/react-unicons/icons/uil-heart"
import UilHeartBreak from "@iconscout/react-unicons/icons/uil-heart-break"

const Heart = (props) => {
  if (!props.dropped) {
    return (
      <UilHeart color="#ff0000" size="35px" />
    )
  } else {
    return (
      <UilHeartBreak color="#fff" size="35px" />
    )
  }
}
export default Heart
