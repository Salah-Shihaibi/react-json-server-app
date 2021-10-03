import { useState } from 'react'

export const NewProfile = ({ addProfile }) => {
    const [name, setName] = useState('');
    const [img, setUrl] = useState('');
    const [login, setLogi] = useState(false);

    const submit = (e) => {
        e.preventDefault()
        if (!name) {
            alert('Please add a name')
            return
        }
         
        addProfile({name, img, login})

        setName('')
        setUrl('')
    }

    return (
        <form className='add-form dropdown-item' onSubmit={submit} >
            <div className="d-flex flex-start">
                <div className="form-outline w-100 ml-2">
                    <input type="text" className="form-control" value={name} onChange={(inInput) => setName(inInput.target.value)}
                    />
                    <label className="form-label text-muted small" > Name here</label>
                    <input type="text" className="form-control"  value={img} onChange={(inInput) => setUrl(inInput.target.value)}
                    />
                    <label className="form-label text-muted small">Image url here</label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary btn-sm">Add User</button>
        </form>
    )
}
