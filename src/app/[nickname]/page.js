import {getGitHubAvatarUrl, getGitHubConfig} from "@/lib/github";
import Image from "next/image";
import AnimatedLink from "@/components/AnimatedLink";
import { Poppins } from "next/font/google"
import { JetBrains_Mono } from "next/font/google";
import { use } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLink, faClipboard, faBolt} from '@fortawesome/fontawesome-free-solid'
import {faGithub, faTelegram, faInstagram, faLinkedin, faDiscord, faSteam} from '@fortawesome/free-brands-svg-icons'

const { library } = require('@fortawesome/fontawesome-svg-core');
library.add(faGithub, faTelegram, faInstagram, faLinkedin, faDiscord, faSteam, faLink, faClipboard, faBolt);

const poppinsBold = Poppins({
  weight: '700',
  subsets: ['latin'],
})

const jetbrainsmono = JetBrains_Mono({subsets: ['latin']});

export default function Page({ params }) {
  const user = use(getGitHubConfig(params.nickname));
  const avatar = getGitHubAvatarUrl(params.nickname);
  return (
    <>
      {user ? (
        <div id="bg-ellipse" className="fade-in">
          <div id="bg-ellipse2" className="fadeIn">
            <main id="mainContainer" className="animate-bottom">
              <div className="hero">
                <Image className={'rounded-full mb-12 shadow-lg'} src={avatar} alt={'avatar'} width={100} height={100}></Image>
                <h1 className={poppinsBold.className}>{user.user_firstname}</h1>
                <div id="textWriterWrapper">
                  <p className={`${jetbrainsmono.className} dark:text-white text-black`} id="textWriter">{user.userbio}</p><span className="input-cursor"></span>
                </div>
                <div className="links-wrapper">
                  <AnimatedLink className="links-btn" href={`https://github.com/${params.nickname}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon width={25} icon="fa-brands fa-github" /></AnimatedLink>
                  {user.linkedin_login && <AnimatedLink className="links-btn" href={`https://www.linkedin.com/in/${user.linkedin_login}/`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon width={25} icon="fa-brands fa-linkedin"></FontAwesomeIcon></AnimatedLink>}
                  {user.telegram_login && <AnimatedLink className="links-btn" href={`https://t.me/${user.telegram_login}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon width={25} icon="fa-brands fa-telegram"></FontAwesomeIcon></AnimatedLink>}
                  {user.discords_login && <AnimatedLink className="links-btn" href={`https://discords.com/bio/p/${user.discords_login}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon width={25} icon="fa-brands fa-discord"></FontAwesomeIcon></AnimatedLink>}
                  {user.steam_login && <AnimatedLink className="links-btn" href={`https://steamcommunity.com/id/${user.steam_login}/`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon width={25} icon="fa-brands fa-steam"></FontAwesomeIcon></AnimatedLink> }
                  {user.instagram_login && <AnimatedLink className="links-btn" href={`https://instagram.com/${user.instagram_login}/`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon width={25} icon="fa-brands fa-instagram"></FontAwesomeIcon></AnimatedLink> }
                  {user.website_url && <AnimatedLink className="links-btn" href={user.website_url} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon width={25} icon="fa-solid fa-link"></FontAwesomeIcon></AnimatedLink> }
                  {user.cv_url && <AnimatedLink className="links-btn" href={user.cv_url} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon width={25} icon="fa-solid fa-clipboard" /></AnimatedLink>}
                  <AnimatedLink className="links-btn" href={`/`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-solid fa-bolt" /></AnimatedLink>
                </div>
              </div>
            </main>
          </div>
        </div>
      ): (
        <main id="mainContainer">
          {/*TODO: Finish this*/}
          <div className="hero">
            <h1 className="ft-bold">User Not Found</h1>
            <p className="ft-code">404</p>
          </div>
        </main>
      )}
    </>
  );
}
