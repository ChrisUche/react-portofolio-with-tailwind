// import deved from "/public/dev-ed-wave.png";
// import about from "/public/about.png";

// const data = [
//   {
//     id: 1,
//     name: 'Home',
//     img: deved,
//     link: "/"
//   },
//   {
//     id: 2,
//     name: 'Work',
//     img: deved,
//     link: "/Project"
//   },
//   {
//     id: 3,
//     name: 'About',
//     img: about,
//     link: "/About"
//   },
//   {
//     id: 4,
//     name: 'Contact',
//     img: deved,
//     link: "/Contact"
//   },
//   {
//     id: 5,
//     name: 'Experience',
//     img: deved,
//     link: "https://3dplane-chrisuche.vercel.app/"
//   },
// ];

// export default data;

const dsds = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export default dsds;
