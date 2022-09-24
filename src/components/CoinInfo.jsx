import {
  createTheme,
  makeStyles,
  ThemeProvider,
  Typography,
} from "@material-ui/core";

import DOMPurify from "dompurify";
const CoinInfo = ({ coin }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  const useStyles = makeStyles((theme) => ({
    container: {
      width: "75%",

      marginTop: 25,
      padding: 40,
      [theme.breakpoints.down("md")]: {
        width: "100%",
        marginTop: 0,
        padding: 10,
        lineHeight: "2",
        paddingTop: 0,
      },
    },
  }));
  const classes = useStyles();
  console.log(coin);
  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.container}>
        <h2 style={{ marginBottom: "10px" }}>About:</h2>
        <Typography
          variant="subtitle1"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              coin.description ? coin.description.en : ""
            ),
          }}
        ></Typography>
      </div>
    </ThemeProvider>
  );
};

export default CoinInfo;
