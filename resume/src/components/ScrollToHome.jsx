// src/components/ScrollToHome.jsx
import { useNavigate } from 'react-router-dom';

function ScrollToHome() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <button
      onClick={goHome}
      className="btn btn-outline-primary position-fixed"
      style={{
        bottom: '5rem',
        right: '1.5rem',
        zIndex: 999,
        borderRadius: '50%',
        padding: '0.75rem 1rem',
        boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
      }}
    >
    Home
    </button>
  );
}

export default ScrollToHome;
