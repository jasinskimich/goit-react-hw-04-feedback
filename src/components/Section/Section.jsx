import PropTypes from 'prop-types';
import styles from './section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={styles['mb']}>
      <h2 className={styles['title-mb']}>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;