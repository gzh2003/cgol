import { red } from "@mui/material/colors";
import { Typography, Avatar, Link } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Footer.css";

function Footer(props) {
  return (
    <footer>
      <div className="footer-flex-row footer-content">
        <Avatar
          className="footer-item"
          alt="gzh2003"
          src="https://github.com/gzh2003.png?size=460"
          sx={{ width: 25, height: 25 }}
        />
        <Typography className="footer-item">Made with </Typography>
        <FavoriteIcon
          className="footer-item"
          sx={{ color: red[500], width: 20, height: 20 }}
        />
        <Typography className="footer-item">
          by{" "}
          <Link
            href="https://github.com/gzh2003"
            target="_blank"
            rel="noopener noreferrer"
          >
            gzh2003
          </Link>
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
