import { MdFavorite } from "react-icons/md";
import { useState, useEffect } from "react";
import st from './LikeButton.module.css';
import { LikeButtonProps } from "../../types/types";

const LikeButton:React.FC<LikeButtonProps> = ({ id }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem('likedItems') || '[]');
    setLiked(savedLikes.includes(id));
  }, [id]);

  const handleLike = () => {
    const savedLikes = JSON.parse(localStorage.getItem('likedItems') || '[]');

    if (liked) {
      const updatedLikes = savedLikes.filter((itemId:string) => itemId !== id);
      localStorage.setItem('likedItems', JSON.stringify(updatedLikes));
    } else {
      savedLikes.push(id);
      localStorage.setItem('likedItems', JSON.stringify(savedLikes));
    }

    setLiked(!liked);
  };

  return (
    <button className={st.likeButton} onClick={handleLike}>
      <MdFavorite
        size={25}
        className={`${st.like} ${liked ? st.liked : ""}`}
      />
    </button>
  );
}

export default LikeButton;
