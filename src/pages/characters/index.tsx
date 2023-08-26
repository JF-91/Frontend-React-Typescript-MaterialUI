import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { characters } from "../../api/characters";
import { Result } from "../../utils/rickAndMortyTypes";
import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

const CharacterPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [character, setCharacter] = useState<Result | null>(null);
  const [isAlive, setIsAlive] = useState(false);

  useEffect(() => {
    characters
      .getById({ id })
      .then((r) => {
        setCharacter(r.data);
        setLoading(false);

        if (character?.status === "Alive") {
          setIsAlive(true);
        }
        if (character?.status === "Dead") {
          setIsAlive(false);
        }

      })
      .catch((err) => console.log(err));
  }, []);


  const characteralive = ()=>{
    if (character?.status === "Alive") {
        return  <Chip
        color="info"
        variant="filled"
        label={character?.status}
      />
      }
      if (character?.status === "Dead") {
        return  <Chip
        color="error"
        variant="filled"
        label={character?.status}
      />
      }

  }

  return (
    <Box sx={{ width: "100%" }}>
      <Container maxWidth="xl">
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={6}>
              <Typography variant="h1">{character?.name}</Typography>
              <Divider />
              <Typography variant="h6">{character?.origin.name}</Typography>
              <Box sx={{ mt: 2 }}>
                { 
                    characteralive()
                }
              </Box>
              <Box sx={{ my: 20 }}>
                <Button
                  onClick={() => navigate(`/`)}
                  fullWidth
                  variant="contained"
                  size="small"
                >
                  Home
                </Button>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <img
                src={character?.image}
                style={{ width: "100%", borderRadius: "0.5em" }}
              />
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default CharacterPage;
