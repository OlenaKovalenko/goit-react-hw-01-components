import { ProfileContainer } from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <ProfileContainer>
            <div className="description">
                <img src={avatar} alt={username} width="200"  className="avatar" />
                <p className="name">{username}</p>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
            </div>

            <ul className="stats">
                <li>
                    <span className="label">Followers</span>
                    <span className="quantity">{stats.followers}</span>
                </li>
                <li>
                    <span className="label">Views</span>
                    <span className="quantity">{stats.views}</span>
                </li>
                <li>
                    <span className="label">Likes</span>
                    <span className="quantity">{stats.likes}</span>
                </li>
            </ul>
        </ProfileContainer>
    );
}


