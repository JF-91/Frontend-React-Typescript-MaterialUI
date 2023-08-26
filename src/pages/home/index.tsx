import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Pagination,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import HeaderComponent from "../../components/header";
import { characters } from "../../api/characters";
import CardComponent from "../../components/card";
import { Result } from "../../utils/rickAndMortyTypes";

export const HomePage = () => {
  const [allcharacters, setAllCharacters] = useState<Result[] | null>(null); //get api
  const [loading, setLoading] = useState<boolean>(true); //loading
  const [page, setPage] = useState(1); //pagination
  const [count, setCount] = useState(0);

  useEffect(() => {
    setLoading(true);
    characters
      .getAll({ page })
      .then((r) => {
        console.log(r.data.results);
        setAllCharacters(r.data.results);
        setCount(r.data.info.pages);
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [page]);

  const handlechange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div>
      <Container sx={{ mt: 9 }}>
        <HeaderComponent
          title="Hola Mundo"
          description="hola mundo, bienvenido!!"
          element={
            <Button fullWidth variant="contained">
              Element
            </Button>
          }
        />
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            <Box>
              {allcharacters?.length !== 0 ? (
                <Grid container spacing={2} direction="row" sx={{ my: 2 }}>
                  {allcharacters?.map((characters) => (
                    <Grid item xs={3} key={characters.id}>
                      <CardComponent
                        id={characters.id}
                        image={characters.image}
                        name={characters.name}
                        species={characters.species}
                        status={characters.status}
                      />
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <>No Hay characters</>
              )}
            </Box>
            <Box
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <Pagination
                sx={{ mb: 3 }}
                size="large"
                variant="outlined"
                color="primary"
                count={count}
                page={page}
                onChange={handlechange}
              />
            </Box>
          </>
        )}
      </Container>
    </div>
  );
};


