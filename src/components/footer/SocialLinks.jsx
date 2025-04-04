import React from "react";

const SocialLinks = () => {
  return (
    <div className="flex justify-between gap-6 lg:gap-4 mx-auto mb-5">
      <button className="link-styling pb-2">
        <img src="../images/icon-facebook.svg" alt="" />
      </button>
      <button className="link-styling pb-2">
        <img src="../images/icon-twitter.svg" alt="" />
      </button>
      <button className="link-styling pb-2">
        <img src="../images/icon-pinterest.svg" alt="" />
      </button>
      <button className="link-styling pb-2">
        <img src="../images/icon-instagram.svg" alt="" />
      </button>
    </div>
  );
};

export default SocialLinks;
