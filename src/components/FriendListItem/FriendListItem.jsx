import PropTypes from 'prop-types';
import { Status } from './FriendListItem.styled';
const FriendListItem = ({ isOnline, name, avatar }) => {
  return (
    <>
      <Status isOnline={isOnline}></Status>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default FriendListItem;
