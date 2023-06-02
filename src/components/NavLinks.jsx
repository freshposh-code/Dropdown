import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const links = [
    {
      name: "Men",
      subMenu: true,
      subLinks: [
        {
          Head: "Topwear",
          sublink: [
            { name: "T-shirt", link: "/mens" },
            { name: "casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
          ],
        },
        {
          Head: "Bottomwear",
          sublink: [
            { name: "T-shirt", link: "/mens" },
            { name: "casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
          ],
        },
      ],
    },
    {
      name: "Women",
      subMenu: true,
      subLinks: [
        {
          Head: "Topwear",
          sublink: [
            { name: "T-shirt", link: "/mens" },
            { name: "casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
          ],
        },
        {
          Head: "Bottomwear",
          sublink: [
            { name: "T-shirt", link: "/mens" },
            { name: "casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
          ],
        },
      ],
    },
  ];

  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5"
              onClick={() =>
                heading !== link.name ? setHeading(link.name) : setHeading("")
              }
            >
              {link.name}
              <span className="text-xl md:mt-1 md:ml-2 inline md:hidden">
                <i
                  class={
                    heading === link.name
                      ? "fa-solid fa-chevron-up"
                      : "fa-solid fa-chevron-down"
                  }
                ></i>
              </span>
            </h1>
            {link.subMenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-black rotate-45"></div>
                  </div>
                  <div className="bg-black p-5 grid grid-cols-2 gap-10">
                    {link.subLinks.map((mysublinks) => (
                      <div>
                        <h1 className="text-lg font-semibold">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <li className="text-sm text-gray-600 my-2.5">
                            <Link
                              to={slink.link}
                              className="hover:text-blue-400"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* mobile menu */}
          <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
            {/* sublinks */}
            {link?.subLinks?.map((myslink) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== myslink.Head
                        ? setSubHeading(myslink.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center"
                  >
                    {myslink.Head}
                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <i
                        class={
                          subHeading === myslink.Head
                            ? "fa-solid fa-chevron-up"
                            : "fa-solid fa-chevron-down"
                        }
                      ></i>
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === myslink.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {myslink.sublink.map((slink) => (
                      <li className="py-3 pl-14">
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
