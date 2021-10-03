import { useState } from "react";
export const AddComment = ({login, post, addComment}) => {
    const [text, setText] = useState('');
    let  usersId = login.id;
    let  userName = login.name;
    let  userImg = login.img;
    let  postsId = post.id;

    const submit = (e) => {
        e.preventDefault()
        usersId = login.id;
        userName = login.name;
        userImg = login.img;
        postsId = post.id;
        if (!text) {
            alert('Please add some content')
            return
        }
         
        addComment({text,usersId,postsId, userName, userImg})
        setText('')
    }

    return (
        <form className='add-form' onSubmit = {submit}>
            <div className="d-flex flex-start">
                <img className="rounded-circle shadow-1-strong me-3"
                    src= {login.img} alt="avatar"
                    width="40" height="40" />
                <div className="form-outline w-100 ml-2">
                    <textarea className="form-control" rows="1" value={text} onChange={(inInput) => setText(inInput.target.value)}></textarea>
                    <label className="form-label text-muted small">Comment here</label>
                </div>
            </div>
            <div className="float-end mt-2 pt-1">
                <button type="submit" className="btn btn-primary btn-sm">Post comment</button>
            </div>
        </form>
    )
}
