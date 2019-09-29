import React, { useContext } from "react";
import { WizardContext } from './WizardContext';

export default (props: any) => {
  const { counter, decrement, increment } = useContext(WizardContext)
  return (
    <div className="field is-grouped">
      <div className="control">
        <button className="button is-text" onClick={() => decrement()}>Previous</button>
      </div>
      {counter !== 0 &&
        <div className="control">
          <button className="button is-link" onClick={() => increment()}>Next</button>
        </div>
      }
    </div>
  )
}
