import { ProfileContainer, ProfileDescription, ProfileImg, ProfileName, ProfileTag, ProfileLocation, ProfileListStats, ProfileItem, ProfileLabel, ProfileQuantity} from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <ProfileContainer>
            <ProfileDescription>
                <ProfileImg src={avatar} alt={username} width="100"  />
                <ProfileName>{username}</ProfileName>
                <ProfileTag>@{tag}</ProfileTag>
                <ProfileLocation>{location}</ProfileLocation>
            </ProfileDescription>

            <ProfileListStats>
                <ProfileItem>
                    <ProfileLabel>Followers</ProfileLabel>
                    <ProfileQuantity>{stats.followers}</ProfileQuantity>
                </ProfileItem>
                <ProfileItem>
                    <ProfileLabel>Views</ProfileLabel>
                    <ProfileQuantity>{stats.views}</ProfileQuantity>
                </ProfileItem>
                <ProfileItem>
                    <ProfileLabel>Likes</ProfileLabel>
                    <ProfileQuantity>{stats.likes}</ProfileQuantity>
                </ProfileItem>
            </ProfileListStats>
        </ProfileContainer>
    );
}


