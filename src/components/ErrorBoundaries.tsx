import { Component } from "react";

interface ErrorBoundaryProps {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: any, info: any) {
    this.setState({ hasError: true });
    // Log the error to the console
    console.log(error, info);
  }

  
  render() {
    if (this.state.hasError) {
      // Render the fallback UI
      return <div>Something went wrong.</div>;
    } else {
      // Render the child components
      return this.props.children;
    }
  }
}
