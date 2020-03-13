import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught error.", error, info);
  }

  render() {
    return this.state.hasError ? (
      <h1>There is an error</h1>
    ) : (
      this.props.children
    );
  }
}
