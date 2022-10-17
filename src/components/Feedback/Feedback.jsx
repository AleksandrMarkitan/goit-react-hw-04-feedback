import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import s from './Feedback.module.scss';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <ul className={s.list}>
      {[...Object.keys(options)].map(item => (
        <li key={item}>
          <Button name={item} onLeaveFeedback={onLeaveFeedback} />
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
};
