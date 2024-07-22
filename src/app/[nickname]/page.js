import {getGitHubAvatarUrl} from "@/lib/github";
export default function Page({ params, user }) {
    const avatar = getGitHubAvatarUrl(params.nickname);
    return (
        <>
            {user ? ( <>
                        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
                        <script src="https://kit.fontawesome.com/83be326cca.js" crossOrigin="anonymous"></script>
                        <div id="bg-ellipse" className="fade-in"><div id="bg-ellipse2" className="fadeIn">
                            <main id="mainContainer" className="animate-bottom">
                                <div className="hero">
                                    <h1 className="ft-bold">{user.user_firstname}</h1>
                                    <div id="textWriterWrapper">
                                        <p className="ft-code" id="textWriter">{user.userbio}</p><span className="input-cursor"></span>
                                    </div>
                                    <div className="links-wrapper">
                                        <a className="links-btn" href={`https://github.com/${params.nickname}`} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                                        {user.linkedin_login && <a className="links-btn" href={`https://www.linkedin.com/in/${user.linkedin_login}/`} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>}
                                        {user.telegram_login && <a className="links-btn" href={`https://t.me/${user.telegram_login}`} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-telegram"></i></a>}
                                        {user.discords_login && <a className="links-btn" href={`https://discords.com/bio/p/${user.discords_login}`} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-discord"></i></a>}
                                        {user.steam_login && <a className="links-btn" href={`https://steamcommunity.com/id/${user.steam_login}/`} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-steam"></i></a> }
                                        {user.instagram_login && <a className="links-btn" href={`https://instagram.com/${user.instagram_login}/`} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a> }
                                        {user.website_url && <a className="links-btn" href={user.website_url} target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-link"></i></a> }
                                        {user.cv_url && <a className="links-btn" href={user.cv_url} target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-file-contract"></i></a>}
                                    </div>
                                </div>
                            </main>
                        </div></div>
                    </>
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
