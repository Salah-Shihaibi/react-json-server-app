
export const Profile = ({profile, changeProfile}) => {
    return (
            <a className="dropdown-item" href='#' role="button" data-toggle="dropdown" onDoubleClick = {() => changeProfile(profile.id)}>
                <img src= {profile.img}
                    width="40" height="40" className="rounded-circle" /><span>{"  "}{profile.name}</span><hr />
            </a>
    )
}
