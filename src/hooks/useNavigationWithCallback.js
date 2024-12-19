import { useNavigate } from 'react-router-dom';

const useNavigateWithCallback = () => {
  const navigate = useNavigate();

  return (path, options = {}, preCallback, postCallback) => {
    // prenav
    if (typeof preCallback === 'function') {
      preCallback();
    }

    // nav
    navigate(path, options);

    // postnav
    if (typeof postCallback === 'function') {
      postCallback();
    }
  };
};

export default useNavigateWithCallback;
