import PropTypes from 'prop-types';
import {
  Container,
  Description,
  Avatar,
  Username,
  Tag,
  Location,
  Stats,
  Label,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Username>{username}</Username>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <Stats>
        <li>
          <Label>Followers</Label>
          <span>{stats.followers}</span>
        </li>
        <li>
          <Label>Views</Label>
          <span>{stats.views}</span>
        </li>
        <li>
          <Label>Likes</Label>
          <span>{stats.likes}</span>
        </li>
      </Stats>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
