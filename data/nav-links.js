const navLinks = [
  {
    title: "navlink-about",
    type: "dropdown",
    href: "href-about",
    sublinks: [
      { title: "sublink-about", href: "href-about" },
      { title: "sublink-careers", href: "href-careers" }
    ]
  },
  {
    title: "navlink-services",
    type: "dropdown",
    href: "href-services",
    sublinks: [
      { title: "sublink-mobilecranes", hash: "href-mobilecranes" },
      { title: "sublink-heavyloads", hash: "href-heavyloads" },
      {
        title: "sublink-platforms-forklifts",
        hash: "href-platforms-forklifts"
      },
      { title: "sublink-fleet", href: "href-fleet" },
      { title: "sublink-wind", href: "href-wind" }
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

export default navLinks;
