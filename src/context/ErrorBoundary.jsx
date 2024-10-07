import React from 'react';
import PropTypes from 'prop-types';
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
        return (
            <div>
              <h1>Something went wrong.</h1>
              <button onClick={this.handleReload}>Reload</button>
            </div>
          );    
    }

    return this.props.children; 
  }
}
ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired
}
export default ErrorBoundary;
