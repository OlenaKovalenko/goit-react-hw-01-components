import { FriendItem, FriendStatus } from "./FriendListItem.styled"

export const FriendListItem = ({ avatar, name, isOnline}) => {
    return (
        <FriendItem>
            <FriendStatus $isOnline={isOnline}></FriendStatus>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
        </FriendItem>
    )
} 