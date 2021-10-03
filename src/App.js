import { useState, useEffect } from 'react'
import { Navbar } from './Components/Navbar'
import { SideLink } from './Components/SideLink'
import { Ads } from './Components/Ads'
import { Poster } from './Components/Poster'

//rafc


function App() {

  const [logOff, setLogOff] = useState({
    "id": 0,
    "name": "Login",
    "img": "https://pbs.twimg.com/profile_images/1171786931/nota_icon_400x400.png",
    "login": false
  })
  const [profiles, setProfiles] = useState([]);
  const [log, setLog] = useState(logOff);
  const [posts, setPosts] = useState([]);
  const [showAddPost, setshowAddPost] = useState(false)
  const [comments, setComments] = useState([]);


  useEffect(() => {
    const initialisePageContent = async () => {
      const profileFromServer = await fetchProfiles()
      setProfiles(profileFromServer)

      const LoggedInprofile = await fetchLogin()
      setLog(LoggedInprofile.length ? LoggedInprofile[0] : logOff)

      const postFromServer = await fetchPosts()
      setPosts(postFromServer)

      await hideComments()

      const commentsFromServer = await fetchComments()
      setComments(commentsFromServer)
    }
    initialisePageContent()
  }, [])

  //profiles

  const fetchProfiles = async () => {
    const res = await fetch('http://localhost:5000/users')
    const data = await res.json()
    return data
  }


  const fetchLogin = async () => {
    const res = await fetch(`http://localhost:5000/users/?login=${true}`)
    const data = await res.json()
    return data
  }


  // Delete Profile
  const deleteProfile = async () => {
    const x = await fetchLogin()
    const res = await fetch(`http://localhost:5000/users/${x[0].id}`, {
      method: 'DELETE',
    })
    //We should control the response status to decide if we will change the state or not.
    if (res.status === 200) {
      setshowAddPost(false)
      setComments(comments.filter((comment) => comment.usersId !== x[0].id))
      setPosts(posts.filter((post) => post.usersId !== x[0].id))
      setProfiles(profiles.filter((profile) => profile.id !== x[0].id))
      setLog(logOff)
    }
    else alert('Error Deleting This Profile')
  }

  // Add Profile
  const addProfile = async (task) => {
    const res = await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    setProfiles([...profiles, data])
  }


  const changeProfile = async (id) => {
    const login = await fetchProfiles()
    if (login.every(x => x.login === false)) { }
    else {
      const x = login.find(x => x.login == true).id
      filpProfile(x, false)
    }
    setLog(await filpProfile(id, true))
  }

  const filpProfile = async (id, bool) => {
    const res = await fetch(`http://localhost:5000/users/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ login: bool }),
    })
    const data = await res.json()
    return data
  }

  // posts

  const fetchPosts = async () => {
    const res = await fetch('http://localhost:5000/posts?_sort=id&_order=desc')
    const data = await res.json()
    return data
  }
  const fetchPost = async (id) => {
    const res = await fetch(`http://localhost:5000/posts/${id}`)
    const data = await res.json()
    return data
  }

  const addPost = async (postContent) => {
    const res = await fetch('http://localhost:5000/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(postContent),
    })

    const data = await res.json()

    setPosts([data, ...posts])
  }

  // Delete Post
  const deletePost = async (id) => {
    const res = await fetch(`http://localhost:5000/posts/${id}`, {
      method: 'DELETE',
    })
    //We should control the response status to decide if we will change the state or not.
    if (res.status === 200) {
      setPosts(posts.filter((post) => post.id !== id))
    }
    else alert('Error Deleting This Post')
  }


  // comments
  const fetchComments = async () => {
    const res = await fetch(`http://localhost:5000/comments`)
    const data = await res.json()
    return data
  }


  const hidePostComments = async (id) => {
    const res = await fetch(`http://localhost:5000/posts/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ showcomment: false }),
    })
  }

  const hideComments = async () => {
    const PostComments = await fetchPosts()
    PostComments.forEach(hide => {
      hidePostComments(hide.id)
    })
    setPosts(
      PostComments.map((post) =>
        ({ ...post, showcomment: false })
      ))
  }


  const showPostComments = async (id) => {
    const PostComment = await fetchPost(id)
    const res = await fetch(`http://localhost:5000/posts/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ showcomment: !PostComment.showcomment }),
    })
    const data = await res.json()
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, showcomment: data.showcomment } : post
      )
    )
  }

  const addComment = async (postContent) => {
    const res = await fetch('http://localhost:5000/comments', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(postContent),
    })
    const data = await res.json()

    setComments([...comments, data])
  }

  const deleteComment = async (id) => {
    const res = await fetch(`http://localhost:5000/comments/${id}`, {
      method: 'DELETE',
    })
    //We should control the response status to decide if we will change the state or not.
    if (res.status === 200) {
      setComments(comments.filter((comment) => comment.id !== id))
    }
    else alert('Error Deleting This Comment')
  }
  //let n = switchs.length === 0 ? null : switchs[0].switch

  return (
    <>
      <Navbar profiles={profiles} addProfile={addProfile} 
      changeProfile={changeProfile} login={log} show={showAddPost} 
      setShow={(x) => setshowAddPost(x)} />
      <div className="container mt-3">
        <div className="row">
          <SideLink />
          <Poster addPost={addPost} show={showAddPost} 
          login={log} posts={posts} deletePost={deletePost} 
          showPostComments={showPostComments} addComment={addComment} 
          comment={comments} deleteComment={deleteComment} />
          <Ads deleteProfile={deleteProfile} />
        </div>
      </div>
    </>
  );
}

export default App;
