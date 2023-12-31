import { FriendContainer} from "./FriendList.styled";
import { FriendListItem } from "./FriendListItem";


export const FriendList = ({ friends }) => {
    return (
        <FriendContainer>
            {friends.map(friend => {
                return (
                    <FriendListItem
                        key={friend.id} friend={friend} />
                )
            })}
        </FriendContainer>
    )
}