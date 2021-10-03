import { useState } from 'react'

export const NewPost = ({addPost, login}) => {

    const [text, setText] = useState('');
    const [img, setImg] = useState('');
    let  usersId = login.id;
    let  userName = login.name;
    let  userImg = login.img;
    let showcomment = false

    const submit = (e) => {
        e.preventDefault()
        usersId = login.id;
        userName = login.name;
        userImg = login.img;
        if (!text) {
            alert('Please add some content')
            return
        }
         
        addPost({text, img, usersId, userName, userImg,showcomment})

        setText('')
        setImg('')   
    }

    return (
        <form className='add-form' onSubmit = {submit}>
            <div className="card card-body bg-light mb-4">
                <div className="d-flex flex-start">
                    <img className="rounded-circle shadow-1-strong me-3"
                        src= {login.img} alt="avatar" width="40"
                        height="40" />
                    <div className="form-outline w-100 ml-2">
                        <textarea className="form-control" rows="4" value={text} onChange={(inInput) => setText(inInput.target.value)}></textarea>
                        <label className="form-label text-muted small">Post
                            here</label>

                        <textarea className="form-control" rows="1" value={img} onChange={(inInput) => setImg(inInput.target.value)}></textarea>
                        <label className="form-label text-muted small"> Image url here</label>    
                    </div>
                        
                </div>
                <div className='form-control form-control-check align-self-center m-1 bg-light'>
                    <label className='mr-3'> Public </label>
                    <input type='checkbox' checked={true} value={true} />
                </div>
                <div className="float-end mt-2 pt-1">
                    <button type="submit" className="btn btn-primary btn-sm">Post story</button>
                </div>
            </div>
        </form>
    )
}
