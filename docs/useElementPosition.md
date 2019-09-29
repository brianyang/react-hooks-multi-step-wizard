# `useElementPosition`

The hook could help you get distance of some element to the left and the top of window.

## Usage

```jsx
import { useRef } from 'react'
import { useElementPosition } from 'react-hooks-set'

const Demo = () => {
  const ref = useRef(null)
  const position = useElementPosition(ref)

  return (
    <div>
      <form>
        <input />
        <button ref={ref}>
          {`The distance to the left of window is ${position.left}, to the top of window is ${position.top}.` }
        </button>
      <form/>
    </div>
  )
}
```

- `ref` &mdash; required, the specified element that provides position information.
