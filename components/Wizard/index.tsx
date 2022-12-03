import {
  Children,
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useState,
} from 'react';
import { Form, Formik } from 'formik';

interface AppContextInterface {
  previous: Function;
  Next: Function;
  setCanSubmit: Dispatch<SetStateAction<boolean>>;
}

interface WizardProps {
  children: ReactNode;
  initialValues: object;
  onSubmit: Function;
}

export const WizardContext = createContext<AppContextInterface | null>(null);

const Wizard = ({ children, initialValues, onSubmit }: WizardProps) => {
  const [stepNumber, setStepNumber] = useState(0);
  const [canSubmit, setCanSubmit] = useState(false);
  const [snapshot, setSnapshot] = useState(initialValues);
  const steps = Children.toArray(children);

  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = stepNumber === totalSteps - 1;

  const next = useCallback(
    (values: object): void => {
      setSnapshot(() => values);
      setStepNumber((prevState) => Math.min(prevState + 1, totalSteps - 1));
    },
    [totalSteps]
  );

  const previous = useCallback(() => {
    setStepNumber((prevState) => Math.max(prevState - 1, 0));
  }, [snapshot, stepNumber]);

  const handleSubmit = useCallback(
    (values: object, bag: object): void => {
      if (isLastStep || canSubmit) {
        console.log('hit the end')
        setSnapshot(() => values);
        return onSubmit(values, bag);
      }
      bag.setTouched({});
      return next(values);
    },
    [isLastStep, canSubmit, next, onSubmit]
  );

  return (
    <WizardContext.Provider value={{ previous, next, setCanSubmit }}>
      <Formik initialValues={snapshot} onSubmit={handleSubmit}>
        <Form>{step}</Form>
      </Formik>
    </WizardContext.Provider>
  );
};

export default Wizard;
