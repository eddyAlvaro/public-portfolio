import { useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";

type Props = {
  image: string;
};

function Earth({ image }: Props) {
  const { scrollYProgress } = useScroll();

  const rotate = useTransform(scrollYProgress, [0, 1.33], [0, 360]);
  return (
    <>
      <motion.img
        src={image}
        alt="earth_image"
        className="fixed bottom-0 w-full object-cover object-top transform translate-y-[70%]"
        style={{ rotate }}
      />
    </>
  );
}

export default Earth;
