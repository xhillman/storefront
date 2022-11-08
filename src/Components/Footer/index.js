import { Typography } from "@mui/material";

function Footer() {
  return (
    <footer className="footer">
      <Typography variant="p" align="center" component="div">
        <p>123 Main St.</p>
        <p>New York, New York</p>
        <p>413-867-5309</p>
      </Typography>
      <Typography variant="p" align="center" component='p'>

      &copy; Xavier Hillman 2022
      </Typography>
    </footer>
  )
}

export default Footer;