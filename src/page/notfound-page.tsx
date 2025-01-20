import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontSize: '4rem', color: '#ff6b6b' }}>404</h1>
      <p style={{ fontSize: '1.5rem' }}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        style={{ textDecoration: 'none', color: '#4facfe' }}
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
