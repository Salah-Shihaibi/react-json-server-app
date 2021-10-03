import { Comment } from "./Comment"

export const Comments = ({post, comment, login, deleteComment}) => {
    let postComments = comment.filter(postComments => postComments.postsId === post.id)
    return (
        postComments.map((eachComment,index) => (
            <Comment key = {index} comment = {eachComment} login = {login} deleteComment = {deleteComment}/>
        ))
    )
}
