import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../../store/comment';
import { CommentBreak } from '../Break'
import './Comments.css'

function Comments() {
  const commentsObj = useSelector((state) => state.comments)
  const comments = Object.values(commentsObj)
  console.log(comments)
  let commentsNum = 0
  comments.forEach(() => {
    commentsNum++;
  })
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getComments(1))
  }, [])
  const getUser = () => {
    return "EmollientSpy1"
  }
  const deleteComment = (commentId) => {
    console.log("deleted", commentId)
  }
  return (
    <div className="comment-section">
      <h2 className="comments-header">{commentsNum} Comments</h2>
      <CommentBreak />
      <div className="comments">
        {comments.map((comment) => (
          <div>

            <div className="comment-toolbox">
              <div className="comments-user-header">
                <img className="profile-img-comments" src="https://www.hashatit.com/images/uploads/users/61602/profile_picture/3F6B966D00000578-4428630-image-m-80_1492690622006.jpg" />
                <div className="profile-name-comments">{getUser()}</div>
              </div>
              <div className="toolbox-right">
                <a className="delete-btn-comments" onClick={() => { }}>Edit</a>
                <a className="delete-btn-comments" onClick={() => { deleteComment(comment.id) }}>Delete {comment.id}</a>
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
      </div>
    </div >
  )
}


export default Comments;
