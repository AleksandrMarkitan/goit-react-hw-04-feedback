import PropTypes from 'prop-types';

import s from './Section.module.scss';

export const Section = ({ children, title }) => {
  return (
    <section className={s.section}>
      {<h2>{title}</h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
