import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faSquareInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  const socialMedia = [{
    name: "Facebook",
    icon: faFacebook,
    link: "https://www.facebook.com/yourfacebookpage",
  }, {
    name: "Instagram",
    icon: faSquareInstagram,
    link: "https://www.instagram.com/yourinstagrampage",
  }, {
    name: "Twitter",
    icon: faTwitter,
    link: "https://www.twitter.com/yourtwitterpage",
  }, {
    name: "Youtube",
    icon: faYoutube,
    link: "https://www.youtube.com/youryoutubechannel",
  }, {
    name: "Linkedin",
    icon: faLinkedin,
    link: "https://www.linkedin.com/yourlinkedinpage",
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
            className="dark:transition-colors transition-colors bg-transparent dark:text-primary_orange-0 dark:hover:text-facebook-0 dark:ease-linear dark:hover:ease-in block text-center text-gray-700 py-2 px-2 text-base hover:text-blue-600 ease-linear hover:ease-in rounded-t-md"
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