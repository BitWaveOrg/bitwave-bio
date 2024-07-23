import AnimatedLink from "./AnimatedLink";
import { interSemiBold } from "@/lib/fonts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export default function GoBack({ className }) {

  return (
    <>
      <AnimatedLink href="/">
        <button className={`flex items-center gap-2 px-5 py-2 border-2 border-gray-700 text-[#b4bcd0] rounded-lg
          hover:bg-neutral-800 hover:border-neutral-800 hover:text-white hover:shadow-md transition duration-150
          ${interSemiBold.className} ${className}`}
        >
        <FontAwesomeIcon height={15} icon={faRightFromBracket} /> Return</button>
      </AnimatedLink>
    </>
  )
}