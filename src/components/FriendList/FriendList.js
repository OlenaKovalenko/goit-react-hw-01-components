// import friends from "../../data/friends.json";
import { FriendContainer} from "./FriendList.styled";
import { FriendListItem } from "./FriendListItem";


export const FriendList = ({ friends }) => {
    return (
        <FriendContainer>
            {friends.map(friend => {
                return (
                    <FriendListItem
                        key={friend.id} 
                        avatar={friend.avatar}
                        name={friend.name}
                        status={friend.isOnline} />
                )
            })}
        </FriendContainer>
    )
}