const NavLinks = [
  {
    title: "navlink-about",
    type: "dropdown",
    href: "href-about",
    sublinks: [
      { title: "sublink-about", href: "href-about" },
      { title: "sublink-careers", href: "href-careers" }
      // { title: "sublink-numbers", hash: "href-numbers" },
      // { title: "sublink-contactperson", hash: "href-contactperson" },
      // { title: "sublink-history", hash: "href-history" },
      // { title: "sublink-safety", hash: "href-safety" },
      // { title: "sublink-careers", href: "href-careers" }
    ]
  },
  {
    title: "navlink-services",
    type: "dropdown",
    href: "href-services",
    sublinks: [
      { title: "sublink-fleet", href: "href-fleet" },
      { title: "sublink-wind", href: "href-wind" },
      { title: "sublink-mobilecranes", hash: "href-mobilecranes" },
      { title: "sublink-heavyloads", hash: "href-heavyloads" },
      { title: "sublink-platforms-forklifts", hash: "href-platforms-forklifts" }
    ]
  },
  {
    title: "navlink-sales",
    href: "href-sales",
    type: "link"
  },
  {
    title: "navlink-contact",
    href: "href-contact",
    type: "link"
  }
];

export default NavLinks;
