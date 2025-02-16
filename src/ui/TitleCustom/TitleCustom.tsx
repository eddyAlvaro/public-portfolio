type Props = {
  decoration: boolean;
  title: string;
  decorationText: boolean;
};

function TitleCustom({ decorationText, decoration, title }: Props) {
  return (
    <>
      <div className="inline-flex flex-col gap-0 sm:gap-4">
        {decoration && (
          <div
            className={`grid ${
              decorationText ? "grid-cols-[1fr_auto]" : "grid-cols-1"
            } gap-2 items-center`}
          >
            <span className="h-2 border-default-purple border-2"></span>
            {decorationText && <span>a message from earth</span>}
          </div>
        )}
        <h1 className="text-white text-center text-[2.5rem] sm:text-[3rem] font-bold font-[Death_Star] leading-[3rem] sm:leading-[1.5rem]">
          {title}
        </h1>
        {decoration && (
          <div
            className={`grid ${
              decorationText ? "grid-cols-[auto_1fr]" : "grid-cols-1"
            } gap-2 items-center`}
          >
            {decorationText && <span>a message from earth</span>}
            <span className="h-2 border-default-purple border-2"></span>
          </div>
        )}
      </div>
    </>
  );
}

export default TitleCustom;
