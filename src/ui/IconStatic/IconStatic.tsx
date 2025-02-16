type Props = {
  left: boolean;
  label: string;
  icon?: React.ReactNode;
};

function IconStatic({ left, label, icon }: Props) {
  const upperLabel = label.toUpperCase();
  return (
    <>
      <div
        className={`flex flex-col items-center justify-center fixed bottom-8 ${
          left ? "left-10" : "right-10"
        } text-white hidden md:flex text-[1.8rem]`}
      >
        <p>{upperLabel}</p>
        {icon}
      </div>
    </>
  );
}

export default IconStatic;
