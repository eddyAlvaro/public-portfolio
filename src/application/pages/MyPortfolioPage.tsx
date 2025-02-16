import starts_img from "../../../public/backgrounds/stars_bg.png";
import earth_img from "../../../public/backgrounds/earth_img.png";
import Earth from "../../ui/Earth/Earth";
import Stars from "../../ui/Stars/Stars";
import IconStatic from "../../ui/IconStatic/IconStatic";
import { Icons } from "../../ui/Icons/Icons";
import TitleCustom from "../../ui/TitleCustom/TitleCustom";
type Props = {};

function MyPortfolioPage({}: Props) {
  return (
    <main className="flex flex-col items-center justify-center bg-black relative overflow-hidden p-8">
      <section
        className={`flex flex-col items-center h-screen w-full bg-no-repeat bg-cover `}
      >
        <TitleCustom
          title="Hello fellow Galaxy member"
          decoration={true}
          decorationText={true}
        />
      </section>
      <section className={`h-screen w-full bg-no-repeat bg-cover `}></section>
      <section className={`h-screen w-full bg-no-repeat bg-cover `}></section>
      <section className={`h-screen w-full bg-no-repeat bg-cover `}></section>
      <Stars image={starts_img} />
      <Earth image={earth_img} />
      <IconStatic
        left={true}
        label={"press"}
        icon={<Icons.enter className="w-[3rem]" />}
      />
      <IconStatic
        left={false}
        label={"scroll"}
        icon={<Icons.mouse className="w-[3rem]" />}
      />
    </main>
  );
}

export default MyPortfolioPage;
