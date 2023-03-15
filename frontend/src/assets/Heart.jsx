import FavoriteIcon from "@mui/icons-material/Favorite"
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
const Heart = (props) => {
  if (!props.dropped) {
    return (
      <FavoriteIcon sx={{ color: "#ff0000",
      fontSize: 32 }} />
    )
  } else {
    return (
      <HeartBrokenIcon  sx={{ color: "#ff0000" , 
      fontSize: 32 }}/>
    )
  }
}
export default Heart
