import { useState } from "react";

export const useToggleLike = (value) => {
  const [like, setLike] = useState(value);

  const toggleLike = (id) => {
    // setLike(!like)
    if (like.includes(id)) {
      const newArray = [...like];
      newArray.pop();
      setLike(newArray);
    } else {
      const newArray = [...like];
      newArray.push(id);
      setLike(newArray);
    }
  };

  return [like, toggleLike]
}