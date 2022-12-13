import { useRouter } from 'next/router';
import Wizard from "../../components/Wizard";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";

const Model_1 = () => {
  const router = useRouter();
  const initialValues = {};

  const onSubmit = () => {
    console.log('Submit')
    router.push('/');
  };

  return (
      <Wizard initialValues={initialValues} onSubmit={onSubmit}>
        <StepOne  />
        <StepTwo />
      </Wizard>
  );
};

export default Model_1;
