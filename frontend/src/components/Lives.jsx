import { useEffect, useState } from "react"
import Heart from "../assets/Heart";

const Lives = (props) => {
  const [lives, setLives] = useState([]);

  useEffect(() => {
    const newLives = [];
    for (let index = 0; index < props.count; index++) {
      newLives.push(<Heart dropped={false} />);
    }
    for (let index = 0; index < 5 - props.count; index++) {
      newLives.push(<Heart dropped={true} />);
    }
    setLives(newLives);
  }, [props.count]);

  return (
    <div>
      {lives}
    </div>
  )

}
export default Lives;
