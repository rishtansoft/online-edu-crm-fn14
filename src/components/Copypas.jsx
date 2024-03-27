import React from "react";

const MyComponent = () => {
  const copyToClipboard = () => {
    const textToCopy = "https://react-video-calling.vercel.app/"; // Nusxalanadigan matn
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Havola Nusxalandi");
      })
      .catch((error) => {
        console.error("Nusxalashda xatolik:", error);
      });
  };

  return React.createElement(
    "div",
    { className: "copy" },
    React.createElement(
      "button",
      { onClick: copyToClipboard },
      React.createElement(
        "svg",
        {
          "aria-hidden": "true",
          stroke: "currentColor",
          "stroke-width": "2",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        React.createElement("path", {
          d: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z",
          "stroke-linejoin": "round",
          "stroke-linecap": "round",
        })
      ),
      "Copy link"
    )
  );
};

export default MyComponent;
