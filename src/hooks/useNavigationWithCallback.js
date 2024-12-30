import { useNavigate } from 'react-router-dom';

const useNavigateWithCallback = () => {
  const navigate = useNavigate();

  return (path, options = {}, preCallback, postCallback) => {
    if (typeof preCallback === 'function') {
      preCallback();
    }

    navigate(path, options);

    if (typeof postCallback === 'function') {
      postCallback();
    }
  };
};

export default useNavigateWithCallback;
