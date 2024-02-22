import React from "react";
import github_svg from "../assets/github_svg.svg";
import linkedin_svg from "../assets/linkedin_svg.svg";
import twitter_svg from "../assets/twitter_svg.svg";
import { useUser } from "../hooks/useUser";

const Footer = () => {
  const { userData } = useUser();

  return (
    <footer id="footer" className="bg-teal-700 text-white text-xl">
      <section className="max-w-7xl mx-auto p-4 flex flex-col justify-center items-center">
        <a href="mailto:ayushkumar9601@gmail.com">ayushkumar9601@gmail.com</a>
        <br />
        <div className="flex justify-evenly gap-4">
          <a href={userData.about_me.contact.github} target="_blank">
            <img src={github_svg} alt="" className="w-10 h-10" />
          </a>
          <a href={userData.about_me.contact.linkedin} target="_blank">
            <img src={linkedin_svg} alt="" className="w-12 h-12" />
          </a>
          <a href={userData.about_me.contact.twitter} target="_blank">
            <img src={twitter_svg} alt="" className="w-10 h-10" />
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
