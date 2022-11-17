import PropTypes from "prop-types";

import { FriendListItem } from './FriendListItem.jsx';

export const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map(friend => (<FriendListItem key={friend.id} data=
                {friend} />))}
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })).isRequired
};