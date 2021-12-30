import LocalMallIcon from '@mui/icons-material/LocalMall';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CategoryIcon from '@mui/icons-material/Category';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const constants = {
  MAX_QUANTITY_LIMIT: 5,
  ADMIN_TAB_CHOICES: ["Brands", "Products", "Categories"],
  NAV_LINKS: [
    {
      label: "Brands",
      route: "/brands",
      name: "brands",
      icon: <LocalOfferIcon />,
      active: true,
      adminOnly: false,
    },
    {
      label: "Products",
      route: "/products",
      name: "products",
      icon: <LocalMallIcon />,
      active: true,
      adminOnly: false,
    },
    {
      label: "Categories",
      route: "/categories",
      name: "categories",
      icon: <CategoryIcon />,
      active: false,
      adminOnly: false,
    },
    {
      label: "Leaderboards",
      route: "/leaderboards",
      name: "leaderboards",
      icon: <LeaderboardIcon />,
      active: true,
      adminOnly: false,
    },
    {
      label: "Admin",
      route: "/admin",
      name: "admin",
      icon: <AdminPanelSettingsIcon />,
      active: true,
      adminOnly: true,
    },
  ],
};

export default constants;
