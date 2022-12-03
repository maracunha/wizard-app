import { GetServerSideProps } from "next";
import { useRouter } from 'next/router';
import Wizard from "../../components/Wizard";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";

type ModelProps = {
  data: object,
};

const Model_1 = ({ data }: ModelProps) => {
  const router = useRouter();
  console.log({ data });
  const initialValues = {};
  const onSubmit = () => {
    console.log('Submit')
    router.push('/');
  };

  return (
      <Wizard initialValues={initialValues} onSubmit={onSubmit}>
        <StepOne data={data} />
        <StepTwo />
      </Wizard>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log( {context} )
  const API_URL = 'http://localhost:3000'
  const res = await fetch(`${API_URL}/api/hello`);
  const data = await res.json();

  return {
    props: { data }
  };
}

export default Model_1;
