import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const App = () => {
  return (
    <div>
      <Typography variant="h1" color="initial">
        Hellow E-commerce admin
      </Typography>
      <Box component={'img'} src="/assets/icons/addToCart.svg" />
    </div>
  );
};

export default App;
