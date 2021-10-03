import { PostEach } from "./PostEach"

export const Posts = ({posts, login, deletePost, showPostComments,addComment, comment, deleteComment}) => {
    return (
        posts.map((eachPost,index) => (
            <PostEach key = {index} post = {eachPost} login = {login} deletePost = {deletePost} showPostComments = {showPostComments} addComment = {addComment} comment = {comment} deleteComment = {deleteComment}/>
        ))  
    )
}
