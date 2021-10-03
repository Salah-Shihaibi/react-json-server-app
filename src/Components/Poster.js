import { NewPost } from "./NewPost"
import { Posts } from "./Posts"

export const Poster = ({addPost, show, login, posts, deletePost, showPostComments, addComment, comment, deleteComment}) => {
    return (
        <div className = "col-sm-6">
            {/*<!-- Input post -->*/}
             {show && <NewPost addPost = {addPost} login = {login} />}
            {/*<!-- post section including comments-->*/}
            <div className="container">
                <div className="row d-flex justify-content-center">
                        <Posts posts = {posts} login = {login} deletePost = {deletePost} showPostComments = {showPostComments} addComment = {addComment} comment = {comment} deleteComment = {deleteComment}/>
                </div>
            </div>
        </div>
    )
}
