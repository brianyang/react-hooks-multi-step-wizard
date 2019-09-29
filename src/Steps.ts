import { useContext } from "react";
import { WizardContext } from './WizardContext';

export default (props: any) => {
  const value = useContext(WizardContext)
  return props.children[value.count]
}