import PropTypes from 'prop-types';
import s from './Button.module.scss';

export const Button = ({ onLeaveFeedback, name }) => {
  return (
    <button
      className={s.button}
      type="button"
      name={name}
      onClick={e => onLeaveFeedback(e)}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
