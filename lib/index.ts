import * as React from "react";
import "babel-polyfill";
import "intersection-observer";

export interface Props {
  children: (args: (ref: HTMLElement) => void) => React.ReactNode;
  callback: () => void;
  options?: IntersectionObserverInit;
}

export interface State {
  options: IntersectionObserverInit;
}

class LzLoader extends React.Component<Props, State> {
  private ref?: HTMLElement;
  private observer?: IntersectionObserver;

  constructor(props: Props) {
    super(props);
    const options: IntersectionObserverInit = this.props.options || {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };
    this.setState({
      options,
    });
  }

  public componentDidMount() {
    const { options } = this.state;
    this.observer = new IntersectionObserver(this.handleObserver, options);
  }

  public componentWillUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  public setRef = (ref: HTMLElement | null) => {
    if (!this.observer) {
      console.error("Do not set intersection observer");
      return;
    }
    if (ref) {
      this.ref = ref;
      this.observer.observe(ref);
    }
  };

  public handleObserver: IntersectionObserverCallback = entries => {
    entries.forEach(entry => {
      if (this.observer && entry.isIntersecting && entry.target === this.ref) {
        this.observer.unobserve(entry.target);
        this.props.callback();
      }
    });
  };

  public render() {
    return this.props.children(this.setRef);
  }
}

export default LzLoader;
