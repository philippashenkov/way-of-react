import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
      <img alt='' src='http://winallos.com/uploads/posts/2014-12/1418639466_anonymous-maska-fon-anonimy.jpg' />
        { props.message }
          <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;