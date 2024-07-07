import { useState } from "react";
import "./Button.css";

export default function Button() {
  const [isFollowing, setIsFollowing] = useState(false);

  const text = isFollowing ? "dejar de seguir" : "Seguir";
  const color = isFollowing ? "unfollow" : "follow";

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };

  return <button className={color} onClick={handleFollowClick}>{text}</button>;
}
