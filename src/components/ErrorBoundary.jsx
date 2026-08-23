import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error('Unhandled error while rendering the page:', error, info.componentStack);
  }

  render() {
    if (!this.state.error) return this.props.children;

    return (
      <section className="blk wrap">
        <div className="sec-head">
          <div className="sec-title">Something broke</div>
        </div>
        <p className="mono">
          This page failed to render. Reach out at{' '}
          <a className="link" href="mailto:hi@prasansingh.com">
            hi@prasansingh.com
          </a>
          .
        </p>
      </section>
    );
  }
}
