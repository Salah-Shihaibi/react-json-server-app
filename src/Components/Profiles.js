import { Profile } from "./Profile"

export const Profiles = ({profiles,changeProfile}) => {
    return (
         profiles.map((eachProfile,index) => (
             <Profile key = {index} profile = {eachProfile} changeProfile = {changeProfile}/>
         ))
    )
}
