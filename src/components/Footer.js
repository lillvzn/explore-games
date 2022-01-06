import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import ga from "../utils/gaLink";

const Footer = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("mobileCard"));

  return (
    <footer style={{ textAlign: "center", padding: "32px 16px" }}>
      <Typography fontSize={mobile ? 14 : "1rem"}>
        Made with <FontAwesomeIcon icon={faHeart} /> by Punith
        <br />
        <br />
        <Link
          href="https://github.com/daemonslayer/explore-games"
          target="_blank"
          rel="noopener"
          underline="none"
          fontWeight={700}
          onMouseDown={() => ga("github")}
        >
          GitHub
        </Link>{" "}
        |{" "}
        <Link
          href="https://github.com/daemonslayer/explore-games/issues"
          target="_blank"
          rel="noopener"
          underline="none"
          fontWeight={700}
          onMouseDown={() => ga("github_issue")}
        >
          Report a bug
        </Link>{" "}
        |{" "}
        <Link
          href="https://twitter.com/DAEM0NSLAYER"
          target="_blank"
          rel="noopener"
          underline="none"
          fontWeight={700}
          onMouseDown={() => ga("twitter")}
        >
          Tweet Me
        </Link>
        <br />
        <br />
        Ratings data sourced from{" "}
        <Link
          href="https://opencritic.com/"
          target="_blank"
          rel="noopener"
          underline="none"
          fontWeight={700}
          onMouseDown={() => ga("opencritic_footer")}
        >
          OpenCritic
        </Link>
        .
        <br />
        Hours data sourced from{" "}
        <Link
          href="https://howlongtobeat.com/"
          target="_blank"
          rel="noopener"
          underline="none"
          fontWeight={700}
          onMouseDown={() => ga("howlongtobeat_footer")}
        >
          HowLongToBeat
        </Link>
        .
      </Typography>
    </footer>
  );
};

export default Footer;
