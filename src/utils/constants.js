const constants = {
  ADMIN_TAB_CHOICES: ["Brands", "Products", "Categories"],
  PAGES: [
    {
      label: "Brands",
      route: "/brands",
      name: "brands",
      active: true
    },
    {
      label: "Products",
      route: "/products",
      name: "products",
      active: true,
    },
    {
      label: "Categories",
      route: "/categories",
      name: "categories",
      active: false,
    },
    {
      label: "Leaderboards",
      route: "/leaderboards",
      name: "leaderboards",
      active: true,
    },
    {
      label: "Admin",
      route: "/admin",
      name: "admin",
      active: true
    }
  ],
};

export default constants;
