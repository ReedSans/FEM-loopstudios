import React from "react";

const Copyright = () => {
  return (
    <div className="tetx-center lg:text-right text-dark">
      © {new Date().getFullYear() - 4} Loopstudios. All rights reserved.
    </div>
  );
};

export default Copyright;
