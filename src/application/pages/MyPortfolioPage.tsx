import starts_img from "../../../public/backgrounds/stars_bg.png";
import earth_img from "../../../public/backgrounds/earth_img.png";
import Earth from "../../ui/Earth/Earth";
import Stars from "../../ui/Stars/Stars";
import IconStatic from "../../ui/IconStatic/IconStatic";
type Props = {};

function MyPortfolioPage({}: Props) {
  return (
    <main className="flex flex-col items-center justify-center bg-black relative overflow-hidden">
      <section className={`h-screen w-full bg-no-repeat bg-cover `}></section>
      <section className={`h-screen w-full bg-no-repeat bg-cover `}></section>
      <section className={`h-screen w-full bg-no-repeat bg-cover `}></section>
      <section className={`h-screen w-full bg-no-repeat bg-cover `}></section>
      <Stars image={starts_img} />
      <Earth image={earth_img} />
      <IconStatic left={true} label={"press"} />
      <IconStatic left={false} label={"scroll"} />
    </main>
  );
}

export default MyPortfolioPage;
