import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeForm } from '../../store/commentPostState';
import { setCurrentUser } from '../../store/currentUser';
import { useParams } from "react-router-dom";
import './commentForm.css';
import { createComment } from '../../store/comment';


export default function CommentForm() {
  const dispatch = useDispatch()
  const [text, setText] = useState("")

  const currentUser = useSelector((state) => state.currentUser.user)
  let { id } = useParams()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const comment = {
      userId: currentUser.id,
      comment: text,
      upvotes: 0,
      projectId: id,
    }

    await dispatch(createComment(comment))
    setText("")
    dispatch(closeForm())
  }

  useEffect(async () => {
    await dispatch(setCurrentUser())

  }, [dispatch])
  return (
    <div className="post-comment-box">
      <div className="post-comment-box-top">
        <img className="profile-img-comments post-comment-img" src="https://www.hashatit.com/images/uploads/users/61602/profile_picture/3F6B966D00000578-4428630-image-m-80_1492690622006.jpg" />
        <form onSubmit={handleSubmit} id="commentForm">
          <textarea className="comment-form-box" value={text} onChange={(e) => setText(e.target.value)}></textarea>
        </form>
      </div>

      <div className="post-comment-box-bottom">
        <div className="rules">
          <div className="rules-one">We have a <b>be nice</b> policy.</div>
          <div className="rules-two">Please be positive and constructive.</div>
        </div>
        <div className="bottom-btns">
          <button onClick={() => { dispatch(closeForm()) }} className="close-post">Cancel</button>
          <button type="submit" form="commentForm" className="comment-post-btn">Post</button>
        </div>
      </div>
    </div>
  )
}
