import * as React from "react";
import { WizardContext } from './WizardContext';
import { useCounter } from './hooks/useStepState';

export default (props: any) => {
  const { count, decrement, increment } = useCounter({ initialCount: 0 })
  return (
    <WizardContext.Provider value={{ count, decrement, increment }}>
      <progress className="progress" value={((count + 1) * (100 / 4)).toString()} max="100">15%</progress>
      {props.children}
    </WizardContext.Provider>
  )
}
