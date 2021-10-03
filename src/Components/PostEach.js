import React from 'react'
import { Comments } from './Comments'
import { AddComment } from './AddComment'

export const PostEach = ({ post, login, deletePost, showPostComments, addComment ,comment, deleteComment}) => {
    return (
        <div className="card mb-5">
            <div className="card-body">
                <div className="d-flex flex-start align-items-center">
                    <img className="rounded-circle shadow-1-strong me-3"
                        src={post.userImg} alt="avatar"
                        width="60" height="60" />
                    <div className="ml-3">
                        <h6 className="fw-bold text-primary mb-1">{post.userName}</h6>
                        <p className="text-muted small mb-0">
                            Shared publicly - Jan 2020
                        </p>
                    </div>
                </div>

                <p className="mt-3 mb-2 pb-2">
                    {post.text}
                </p>
                <img className="d-block mx-auto shadow-1-strong mb-3 "
                    src={post.img} alt="avatar"
                    width="300" height="300" />
                <div className="small d-flex">
                    <a href="#!" className="p-2">
                        <i className="fa fa-thumbs-up d-inline mr-2"></i>
                        <p className="mb-0 d-inline">22 Likes</p>
                    </a>
                    <a href="#!" className="p-2" onClick = {() => showPostComments(post.id)}>
                        <i className="fa fa-comment d-inline mr-2"></i>
                        <p className="mb-0 d-inline">3 Comments</p>
                    </a>
                    {login.id === post.usersId && <button className="P-2 ml-auto btn btn-danger" onDoubleClick = {() => deletePost(post.id)}>Delete</button>}                </div>
            </div>
            {/*<!-- Comment form and comment -->*/}
            {post.showcomment && <div className="card-footer py-3 border-0">
                {/*<!-- comments -->*/}
                <Comments post = {post} comment = {comment} login = {login} deleteComment = {deleteComment}/>
                {/*<!-- comment form -->*/}
                <hr />
                {login.id !== 0 &&<AddComment login = {login} post = {post} addComment = {addComment}/>}
            </div>}
        </div>
    )
}

