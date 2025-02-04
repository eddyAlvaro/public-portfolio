type Props = {
  left: boolean;
  label: string;
};

function IconStatic({ left, label }: Props) {
  const upperLabel = label.toUpperCase();
  return (
    <>
      <div
        className={`fixed bottom-0 ${
          left ? "left-8" : "right-8"
        } text-white hidden md:block w-auto`}
      >
        <p>{upperLabel}</p>
        <span className="flex justify-center w-full">a</span>
      </div>
    </>
  );
}

export default IconStatic;
