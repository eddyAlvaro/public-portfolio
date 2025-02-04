type Props = {
  image: string;
};

const Stars = ({ image }: Props) => {
  return (
    <img src={image} alt="" className="fixed bottom-0  bg-no-repeat bg-cover" />
  );
};

export default Stars;
