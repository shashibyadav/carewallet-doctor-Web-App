import React from 'react';
import '../shared/layouts.css'

const withPageClasses = (WrappedComponent, classes) => {
  return (props) => (
    <div className={classes.join(' ')}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withPageClasses;
