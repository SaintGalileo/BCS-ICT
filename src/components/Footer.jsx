import React from "react";

const Footer = () => {
  const menu = [
    {
      id: 1,
      title: "Developers",
      subMenu: [
        {
          id: 1,
          title: "Oku Akpabio",
        },
        {
          id: 2,
          title: "Daniel Onugu",
        },
        {
          id: 3,
          title: "Asuquo Okon",
        },
      ],
    },
    {
      id: 2,
      title: "Exco's",
      subMenu: [
        {
          id: 1,
          title: "CA Mfon Uwah",
          link: "https://bcs-ict.com",
        },
        {
          id: 1,
          title: "CA Ezekair",
          link: "https://bcs-ict.com",
        },
      ],
    },
    {
      id: 3,
      title: "Content Developer",
      subMenu: [
        {
          id: 1,
          title: "Queen sporris",
        },
        {
          id: 2,
          title: "Wisdom Gosh",
        },
        {
          id: 3,
          title: "philip ima",
        },
      ],
    },
    {
      id: 4,
      title: "Graphic's",
      subMenu: [
        {
          id: 1,
          title: "Egwu Bassey",
        },
        {
          id: 2,
          title: "Anthony josh",
        },
        {
          id: 3,
          title: "Chimeze okon",
        },
      ],
    },
  ];

  return (
    <div className="border-t border-white">
      <div className="my-32 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 text-center gap-12">
          {menu.map(({ id, title, subMenu }) => (
            <div key={id}>
              <h1 className="text-lg font-bold">{title}</h1>
              <ul className="mt-1">
                {subMenu.map(({ id, title, link }) => (
                  <li key={id}>
                    <a href={link}>{title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="my-12 text-center text-sm text-thBlue">
          © Copyright 2022 BCS-ICT
        </p>
      </div>
    </div>
  );
};

export default Footer;
