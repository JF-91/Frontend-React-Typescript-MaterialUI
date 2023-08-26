import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

type CardProps = {
  image: string;
  name: string;
  status: string;
  species: string;
  id: string | number;
};

const CardComponent: React.FC<CardProps> = ({
  image,
  name,
  status,
  species,
  id,
}) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="194" image={image} alt={name} />

      <CardContent>
        <Typography sx={{ mb: 1.5 }} variant="h4">
          {name}
        </Typography>
        <Divider />
        <Typography sx={{ mt: 1.5 }}>Especies: {species}</Typography>
        <Typography sx={{ mt: 1.5 }}>Status: {status}</Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => navigate(`/character/${id}`)}
          fullWidth
          variant="contained"
          size="small"
        >
          Lear More
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
