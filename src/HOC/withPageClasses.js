import React from 'react';

const withPageClasses = (WrappedComponent, classes) => {
  return (props) => (
    <div className={classes.join(' ')}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withPageClasses;
