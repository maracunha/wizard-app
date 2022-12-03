import Button from "../Button";
import Input from "../Input";
import Paper from "../Paper";

interface CardProps {
  title: string;
  name: string;
  label: string;
};

const Card = ({ title, name, label }: CardProps) => {
  const a =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"

  return (
    <Paper
      title={title}
      description="Very nice descriptions"
      content={a}
    >
      <div className="my-4 space-y-2">
        <Input name={name} label={label} />
      </div>
      <Button
        id="teste"
        type="submit"
        text="Next"
        icon="fa-regular fa-arrow-right"
        className="m-auto"
      />
    </Paper>
  );
};

export default Card;
