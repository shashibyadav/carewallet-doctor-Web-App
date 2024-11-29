import React from 'react';

const withPageClass = (WrappedComponent, pageClass) => {
  return (props) => (
    <div className={pageClass}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withPageClass;
