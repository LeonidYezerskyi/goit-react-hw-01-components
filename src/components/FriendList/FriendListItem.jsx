import PropTypes from "prop-types";

export const FriendListItem = ({ data: { avatar, name, isOnline } }) => {
    return (
        <li className="item">
            <span className="status">{isOnline}</span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className={name}></p>
        </li>
    );
}

FriendListItem.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool,
    }))
};