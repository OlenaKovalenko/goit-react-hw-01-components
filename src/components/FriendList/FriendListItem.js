import { FriendItem, FriendStatus, FriendImg, FriendName } from "./FriendListItem.styled"

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
    return (
        <FriendItem>
            <FriendStatus $isOnline={isOnline}></FriendStatus>
            <FriendImg src={avatar} alt={name} width="48" />
            <FriendName>{name}</FriendName>
        </FriendItem>
    )
} 