import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments, deleteCommentStore } from '../../store/comment';
import { closeForm, openForm } from '../../store/commentPostState';
import { getUserById } from '../../store/user'
import { CommentBreak } from '../Break'
import CommentForm from '../CommentForm';
import { useParams } from "react-router-dom";
import { setCurrentUser } from '../../store/currentUser';
import { StepBreak } from '../Break';
import './Comments.css'
import { authenticate } from '../../services/auth';

function Comments({myRef}) {
  const dispatch = useDispatch()
  const [isLoaded, setIsLoaded] = useState(false)
  const commentsObj = useSelector((state) => state.comments)
  const comments = Object.values(commentsObj)
  const commentFormState = useSelector((state) => state.commentFormState.open)
  const currentUser = useSelector((state) => state.currentUser.user)

  // const myRef = useRef(null);

  let commentsNum = 0
  comments.forEach(() => {
    commentsNum++;
  })
  let { id } = useParams()

  const deleteComment = async (commentId) => {
    await dispatch(deleteCommentStore(commentId))
    await dispatch(getComments(id))
  }

  useEffect(async () => {
    await dispatch(getComments(id))
    await dispatch(setCurrentUser())
    setIsLoaded(true)
  }, [dispatch])

  const handlePostComment = async () => {
    await dispatch(openForm());
    // window.scrollTo(0,document.body.scrollHeight);
    window.scrollTo({ behavior: 'smooth', top: myRef.current.offsetTop })
  }

  return (
    <div className="comment-section">
      {isLoaded && (
        <>
          <h2 className="comments-header">{commentsNum} Comments</h2>
          <CommentBreak />
          <div className="comments">
            {comments.map((comment) => (
              <div>

                <div className="comment-toolbox">
                  <div className="comments-user-header">
                    <img className="profile-img-comments" src={comment.user.avatar} />
                    <div className="profile-name-comments">{comment.user.username}</div>
                  </div>
                  <div className="toolbox-right">
                    {comment.user.id == currentUser.id && (
                      <>
                        <a className="delete-btn-comments" onClick={() => { }}>Edit</a>
                        <a className="delete-btn-comments" onClick={() => { deleteComment(comment.id) }}>Delete</a>
                      </>
                    )}
                    <button className="reply-btn">Reply</button>
                    <button className="upvote-btn"><div className="upvote-arrow">▲</div> <div className="upvote-text">Upvote</div></button>
                  </div>
                </div>

                <div className="comment">
                  {comment.comment}
                </div>

                <CommentBreak />
              </div>
            ))}
            <div className="post-comment">
              <button onClick={handlePostComment} className="post-comment-btn">Post Comment</button>
              {commentFormState && <CommentForm 
              myRef={myRef} 
              />}
            </div>
            {/* <StepBreak /> */}
          </div>
        </>
      )}
    </div>
  )
}


export default Comments;
