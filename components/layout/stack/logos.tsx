import LogoMarquee from "./logo-marquee";
import NextJs from "@/public/images/stack/next-js.webp";
import ReactJs from "@/public/images/stack/reactjs.png";
import Js from "@/public/images/stack/javascript.webp";
import Ts from "@/public/images/stack/ts.png";
import Adobe from "@/public/images/stack/adobe.png";
import AdobePs from "@/public/images/stack/photoshop.png";

import Ai from "@/public/images/stack/ai.png";
import Premiere from "@/public/images/stack/premiere.png";
import Ae from "@/public/images/stack/ae.png";
import Php from "@/public/images/stack/php.png";
import Jquery from "@/public/images/stack/jquery.webp";
import Css from "@/public/images/stack/css.png";
import Wordpress from "@/public/images/stack/wordpress.png";

import Html5 from "@/public/images/stack/html5.png";
import Mysql from "@/public/images/stack/mysql.png";
import Laravel from "@/public/images/stack/laravel.png";
import Express from "@/public/images/stack/express.webp";
import NestJs from "@/public/images/stack/nestjs.png";
import VueJs from "@/public/images/stack/vuejs.png";
import Webpack from "@/public/images/stack/webpack.png";
import Vite from "@/public/images/stack/vite.png";

export default function Logos() {
  const logos = [
    { src: NextJs, alt: "NextJs" },
    { src: ReactJs, alt: "ReactJs" },
    { src: Js, alt: "Javascript" },
    { src: Ts, alt: "Typescript" },
    { src: Adobe, alt: "Adobe" },
    { src: AdobePs, alt: "Adobe Photoshop" },
  ];
  const logos2 = [
    { src: Ai, alt: "Adobe Illustrator" },
    { src: Premiere, alt: "Adobe Premiere" },
    { src: Ae, alt: "Adobe After Effects" },
    { src: Php, alt: "PHP" },
    { src: Jquery, alt: "JQuery" },
    { src: Css, alt: "CSS 3" },
    { src: Wordpress, alt: "Wordpress" },
  ];
  const logos3 = [
    { src: Html5, alt: "HTML 5" },
    { src: Mysql, alt: "Mysql" },
    { src: Laravel, alt: "Laravel" },
    { src: Express, alt: "Express Js" },
    { src: NestJs, alt: "Nest Js" },
    { src: VueJs, alt: "Vue Js" },
    { src: Webpack, alt: "Webpack" },
    { src: Vite, alt: "Vite" },
  ];

  return (
    <div className="flex flex-col gap-5">
      <LogoMarquee logos={logos} />
      <LogoMarquee logos={logos2} direction="right" />
      <LogoMarquee logos={logos3} />
    </div>
  );
}
