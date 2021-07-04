import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeForm } from '../../store/commentPostState';
import { setCurrentUser } from '../../store/currentUser';
import { useHistory, useParams } from "react-router-dom";
import './commentForm.css';
import { createComment } from '../../store/comment';
import { setCommentRedirect } from '../../store/redirect';


export default function CommentForm({ myRef }) {
  const dispatch = useDispatch()
  const history = useHistory()
  const [text, setText] = useState("")
  const commentRedirect = useSelector((state) => state.redirect.commentsRedirect)
  const redirectText = useSelector((state) => state.redirect.comment)

  const currentUser = useSelector((state) => state.currentUser.user)
  let { id } = useParams()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (currentUser !== null) {
      const comment = {
        userId: currentUser.id,
        comment: text,
        upvotes: 0,
        projectId: id,
      }
      await dispatch(createComment(comment))
      setText("")
      dispatch(closeForm())
    } else {
      dispatch(setCommentRedirect(text, id))
      history.push('/login')
    }
  }

  useEffect(async () => {
    await dispatch(setCurrentUser())
    if (commentRedirect) {
      setText(redirectText)
      window.scrollTo({ top: myRef.current.offsetTop })
    }
  }, [dispatch])
  return (
    <div ref={myRef} className="post-comment-box">
      <div className="post-comment-box-top">
        {currentUser !== null ?
          <img className="profile-img-comments post-comment-img" src={currentUser.avatar} /> :
          <img className="profile-img-comments post-comment-img" src="https://www.hashatit.com/images/uploads/users/61602/profile_picture/3F6B966D00000578-4428630-image-m-80_1492690622006.jpg" />
        }
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
