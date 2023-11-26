import PropTypes from 'prop-types';
import styles from './style.module.css';

function PostCard({ post }) {
  const { title, content, author } = post;

  return (
    <div className={styles.card}>
        <div className={styles.title}>{title}</div>
        <hr className={styles.hr} />
        <div className={styles.content}>{content}</div>
        <div className={styles.footer}>
            <div className={styles.author}>Author: {author.name}</div>
        </div>
    </div>
  );
}

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PostCard;