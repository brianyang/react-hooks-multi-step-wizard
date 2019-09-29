# `useScript`

The hook could help you load external script and know when it is loaded.

## Usage

```jsx
import { useScript } from 'react-hooks-set';

const Demo = () => {
  const [loaded, loadError] = useScript(
    '//www.google-analytics.com/analytics.js'
  );

  return (
    <>
      <div>{`analytics.js is loaded: ${loaded}`}</div>
      <div>{`analytics.js is loaded succefully: ${!loadError}`}</div>
    </>
  );
};
```

## Reference

```js
useScript(scriptSrc);
```

- `scriptSrc` &mdash; required, the src of the script that you want to load dynamically.
