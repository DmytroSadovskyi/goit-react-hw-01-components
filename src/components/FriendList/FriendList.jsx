import PropTypes from 'prop-types';
import { List } from './FriendList.styled';
import { Item } from 'components/FriendListItem/FriendListItem.styled';
import FriendListItem from 'components/FriendListItem/FriendListItem';
const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Item key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </Item>
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
