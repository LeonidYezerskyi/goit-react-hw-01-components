import { FriendListItem } from './FriendListItem.jsx';

export const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map(friend => (<FriendListItem key={friend.id} data=
            {friend} />))}
        </ul>
    );
}