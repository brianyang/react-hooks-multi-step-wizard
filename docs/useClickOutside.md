# `useOnClickOutside`

The hook could help you detect clicks outside of a specified element. The passed callback function would be executed when the outside area is clicked.

## Usage

```jsx
import { useState, useRef } from 'react';
import { useOnClickOutside } from 'react-hooks-set';

const Demo = () => {
  const [isModalShow, setModalShow] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setModalShow(false));

  return (
    <>
      {isModalShow ? (
        <div ref={ref}>
          This is modal content. Click anywhere outside of me to close.
        </div>
      ) : (
        <button
          onClick={() => {
            setModalShow(true);
          }}
        >
          Open Modal
        </button>
      )}
    </>
  );
};
```

## Reference

```js
useOnClickOutside(ref, onClickOutside);
```

- `ref` &mdash; required, the specified element which click event is invalid.
- `onClickOutside` &mdash; required, callback function which would be executed when the outside is clicked.
