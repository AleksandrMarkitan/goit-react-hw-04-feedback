import PropTypes from 'prop-types';
import s from './Notification.module.scss';

export const Notification = ({ message }) => {
  return <h3 className={s.title}>{message}</h3>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
