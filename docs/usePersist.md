# `usePersist`

The hook could track the state of page. When then page is reopened, the memorized of state will be recovered automatically.

## Usage

```jsx
import { usePersist } from 'react-hooks-set';

const Demo = props => {
  const [remark, setRemark, clearRemark] = usePersist('remark', '', false);

  return (
    <form>
      <input value={remark} onChange={e => setRemark(e.target.value)} />
      <button
        onClick={() => {
          props.history.push('/back');
          clearRemark();
        }}
      >
        ToBack
      </button>
      <button onClick={() => props.history.push('/forward');}>ToForward</button>
    </form>
  );
};
```

## Reference

```js
usePersist(key, intialState);
usePersist(key, persistEvenWindowClosed);
```

- `key` &mdash; required, `localStorage` or `sessionStorage` key to manage.
- `intialState` &mdash; required, the initial state that needs persisted.
- `persistEvenWindowClosed` &mdash; optional, boolean, if set to `false`, hook will use sessionSorage to store state, and state will be cleared when page closed.
