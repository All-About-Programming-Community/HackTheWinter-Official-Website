import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import {
  faYoutube,
  faDiscord,
  faTwitter,
  faSquareInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  const socialMedia = [{
    name: "Discord",
    icon: faDiscord,
    link: "https://discord.gg/DYrRUNgX",
  }, {
    name: "Twitter",
    icon: faTwitter,
    link: "https://twitter.com/allaboutprog",
  }, {
    name: "Linkedin",
    icon: faLinkedin,
    link: "https://www.linkedin.com/company/all-about-programming/",
  }, {
    name: "GitHub",
    icon: faGithub,
    link: "https://github.com/All-About-Programming-Community",
  }, {
    name: "Instagram",
    icon: faSquareInstagram,
    link: "https://www.instagram.com/all.aboutprogramming/",
  }, {
    name: "Youtube",
    icon: faYoutube,
    link: "https://www.youtube.com/channel/UCHHMuJfu_OsEJ_pvErbbsNA",
  }];
  return (
    <div
      className="fixed object-right text-xs text-right right-0 top-20 hidden sm:block z-50 bg-gray-400 rounded-full py-8"
    >
      {socialMedia.map((item, i) => {
        return (
          <a
            href={item.link}
            key={i}
            target="_blank"
            className="block py-2 px-2 jello-vertical"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className="w-10 h-10 text-black"
              icon={item.icon}
              size="2x"
            />
          </a>
        );
      })}
    </div>
  );
}