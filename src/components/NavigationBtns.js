import { interSemiBold } from "@/lib/fonts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import AnimatedLink from "@/components/AnimatedLink";

export default function NavigationBtns() {

  return (
    <div className={"absolute bottom-10 flex mx-auto gap-1 rounded-lg transition duration-150"}>
      <AnimatedLink href="/">
        <button className={`flex items-center gap-2 px-5 py-2 text-[#b4bcd0] rounded-lg hover:bg-neutral-800
          hover:border-neutral-900 hover:text-white hover:shadow-md transition duration-150 opacity-50 hover:opacity-100
          ${interSemiBold.className}`}
        >
          <FontAwesomeIcon height={15} icon={faRightFromBracket} /> Return
        </button>
      </AnimatedLink>
      <AnimatedLink href="/">
        <button className={`flex items-center gap-2 px-5 py-2 text-[#b4bcd0] rounded-lg hover:bg-neutral-800
          hover:border-neutral-900 hover:text-white hover:shadow-md transition duration-150 opacity-50 hover:opacity-100
          ${interSemiBold.className}`}
        >
          <FontAwesomeIcon height={15} icon={faShareFromSquare} /> Share
        </button>
      </AnimatedLink>
    </div>
  );
}