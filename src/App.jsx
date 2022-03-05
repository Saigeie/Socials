import ProfilePicture from "./pfp.png"
function App() {
  return (
    <>
      <div className="card">
        <div className="about">
          <div className="image">
            <img src={ProfilePicture} alt="profile picture" />
          </div>
          <div className="name">
            <p>Saige</p>
          </div>
        </div>
        <div className="socials">
          <li>
            <a href="https://saige.cloud" className="linka">
              <i className="bx bx-home link firstlink"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Saigee_e" className="linka">
              <i className="bx bxl-twitter link"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitch.tv/saigeie" className="linka">
              <i className="bx bxl-twitch link"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UC7sdJUzy4g6P_vUN0IQM1aQ"
              className="linka"
            >
              <i className="bx bxl-youtube link"></i>
            </a>
          </li>
          <li>
            <a href="https://dribbble.com/Saigeee" className="linka">
              <i className="bx bxl-dribbble link"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/Saigeie" className="linka">
              <i className="bx bxl-github link"></i>
            </a>
          </li>
        </div>
        <div className="discordlink">
          <li>
            <a
              href="https://discord.com/users/462936117596127232"
              className="discord"
            >
              <i className="bx bxl-discord-alt discord-link"></i>
              <span>Saige#8157</span>
            </a>
          </li>
        </div>
        <div className="extralinks"></div>
      </div>
    </>
  );
}

export default App
