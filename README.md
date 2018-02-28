# React-lzloader

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Travis](https://img.shields.io/travis/alexjoverm/typescript-library-starter.svg)](https://travis-ci.org/alexjoverm/typescript-library-starter)

Lazy-Load your components with using [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

## Installation

```bash
npm install --save react-lzloader
```

or

```bash
yarn add react-lzloader
```

## Usage

```tsx
import LazyLoad from "react-lzloader";

const App = () => (
  <LazyLoad callback={yourCallbackFunc}>
    {
      (setRef) => (
        <div ref={setRef} />;
      )
    }
  </LazyLoad>
);
```

This libraries component (LazyLoad) called yourCallbackFunc when the setted up component is in Window.

So you write some actions or functions in callback and set refs in child components of LazyLoad.

### Option

```tsx
interface IntersectionObserverInit {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
}

const options: IntersectionObserverInit = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
}
<LazyLoad callback={yourCallbackFunc} options={options} />
```

If you want to set more detail intersection options, those intersection observer options to prop the LazyLoad component.

The options are [Intersection Observer Options](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options).

## Examples

### Lazy image load

```tsx
// TODO
```

### Infinite scroll

```tsx
// TODO
```
