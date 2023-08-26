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
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCardt } from "../../redux/slices/cartSlice";
import { useEffect, useState } from "react";
import { setItem } from "../../utils/localStorage";

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

  const [disabledBtn, setDisabledBtn] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const itemExist = useAppSelector((state)=>state.cartReducer)

  useEffect(()=>{
   setDisabledBtn(itemExist.some((item)=> item.id === id));
   setItem('cart', itemExist)
  },[itemExist, id])

  const handleAddToCart = ()=>{
    dispatch(addToCardt({
      id,
      name,
      image,
      info: status
    }))
  }
  
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
        <Button
          onClick={handleAddToCart}
          fullWidth
          variant="outlined"
          disabled={disabledBtn}

          size="small"
        >
          Add store
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
