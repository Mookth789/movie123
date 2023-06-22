import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";

const main = [
  {
    display: "หน้าหลัก",
    path: "/",
    icon: <HomeOutlinedIcon />,
    state: "home"
  },
  {
    display: "หนังใหม่",
    path: "/movie",
    icon: <SlideshowOutlinedIcon />,
    state: "movie"
  },
  {
    display: "รายการทีวี",
    path: "/tv",
    icon: <LiveTvOutlinedIcon />,
    state: "tv"
  },
  {
    display: "ค้นหา",
    path: "/search",
    icon: <SearchOutlinedIcon />,
    state: "search"
  }
];

const user = [
  {
    display: "รายการโปรด",
    path: "/favorites",
    icon: <FavoriteBorderOutlinedIcon />,
    state: "favorite"
  },
  {
    display: "รีวิวหนัง",
    path: "/reviews",
    icon: <RateReviewOutlinedIcon />,
    state: "reviews"
  },
  {
    display: "password update",
    path: "/password-update",
    icon: <LockResetOutlinedIcon />,
    state: "password.update"
  }
];

const menuConfigs = { main, user };

export default menuConfigs;