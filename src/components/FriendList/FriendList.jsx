import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";

import { FriendListItem } from './FriendListItem.jsx';

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map(({ id, isOnline, name, avatar }) => (<FriendListItem key={id} isOnline={isOnline} name={name} avatar={avatar} />))}
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })).isRequired
};