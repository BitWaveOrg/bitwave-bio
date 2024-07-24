import { use } from "react";
import Image from "next/image";
import AnimatedLink from "@/components/AnimatedLink";
import GoBack from "@/components/GoBack";
import NavigationBtns from "@/components/NavigationBtns";
import { poppinsBold, jetbrainsMono } from "@/lib/fonts";
import { getGitHubAvatarUrl, getGitHubConfig } from "@/lib/github";
import { checkAlias } from "@/lib/alias";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faClipboard, faBolt } from '@fortawesome/fontawesome-free-solid'
import { faGithub, faTelegram, faInstagram, faLinkedin, faDiscord, faSteam, faTwitch } from '@fortawesome/free-brands-svg-icons'

const { library } = require('@fortawesome/fontawesome-svg-core');
library.add(faGithub, faTelegram, faInstagram, faLinkedin, faDiscord, faSteam, faLink, faClipboard, faBolt, faTwitch);

export default function Page({ params }) {
  const username = checkAlias(params.nickname);
  const user = use(getGitHubConfig(username));
  const avatar = getGitHubAvatarUrl(username);
  return (
    <>
      {user ? (
        <main id="mainContainer" className={`animate-bottom flex`}>
          <div className="hero">
            <Image className={'rounded-full mb-12 shadow-lg'} src={avatar} alt={'avatar'} width={100} height={100}></Image>
            <h1 className={poppinsBold.className}>{user.user_firstname}</h1>
            <div id="textWriterWrapper">
              <p className={`${jetbrainsMono.className} dark:text-white text-black`} id="textWriter">{user.userbio}</p><span className="input-cursor"></span>
            </div>
            <div className="links-wrapper">
              <AnimatedLink className="links-btn" href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon width={25} icon="fa-brands fa-github" /></AnimatedLink>
              {user.linkedin_login && <AnimatedLink className="links-btn" href={`https://www.linkedin.com/in/${user.linkedin_login}/`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon width={25} icon="fa-brands fa-linkedin"></FontAwesomeIcon></AnimatedLink>}
              {user.telegram_login && <AnimatedLink className="links-btn" href={`https://t.me/${user.telegram_login}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon width={25} icon="fa-brands fa-telegram"></FontAwesomeIcon></AnimatedLink>}
              {user.discords_login && <AnimatedLink className="links-btn" href={`https://discords.com/bio/p/${user.discords_login}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon width={25} icon="fa-brands fa-discord"></FontAwesomeIcon></AnimatedLink>}
              {user.steam_login && <AnimatedLink className="links-btn" href={`https://steamcommunity.com/id/${user.steam_login}/`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon width={25} icon="fa-brands fa-steam"></FontAwesomeIcon></AnimatedLink> }
              {user.instagram_login && <AnimatedLink className="links-btn" href={`https://instagram.com/${user.instagram_login}/`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon width={25} icon="fa-brands fa-instagram"></FontAwesomeIcon></AnimatedLink> }
              {user.twitch_login && <AnimatedLink className="links-btn" href={`https://instagram.com/${user.twitch_login}/`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon width={25} icon="fa-brands fa-twitch"></FontAwesomeIcon></AnimatedLink> }
              {user.website_url && <AnimatedLink className="links-btn" href={user.website_url} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon width={20} icon="fa-solid fa-link"></FontAwesomeIcon></AnimatedLink> }
              {user.cv_url && <AnimatedLink className="links-btn" href={user.cv_url} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon width={25} icon="fa-solid fa-clipboard" /></AnimatedLink>}
            </div>
          </div>

          <NavigationBtns />
        </main>
      ): (
        <main id="mainContainer">
          <div className="hero">
            <h1 className="ft-bold">User Not Found</h1>
            <p className="ft-code">404</p>
            <GoBack className={`mt-10`} />
          </div>
        </main>
      )}
    </>
  );
}
