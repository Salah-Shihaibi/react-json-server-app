
export const Comment = ({comment, login, deleteComment}) => {
    return (
        <div className="card mb-4">
            <div className="card-body">
                <p>{comment.text}</p>

                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <img className="rounded-circle"
                            src= {comment.userImg}
                            alt="avatar" width="30" height="30" />
                        <p className="small mb-0 ms-2 ml-1 text-primary"><b>{comment.userName}</b></p>
                    </div>
                    <a href='#!' className='d-flex flex-row align-items-center'>
                        <p className="small mb-0">like</p>
                        <i className="fa fa-thumbs-up mx-2 fa-xs"></i>
                        <p className="small mb-0">3</p>
                    </a>
                </div>
                {comment.usersId === login.id && <button className="btn btn-danger mt-1 float-right" onDoubleClick = {() => deleteComment(comment.id)}>Delete</button>}
            </div>
        </div>
    )
}
