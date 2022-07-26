import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Img from "../../Assest/Herb.jpg";
import Container from "@mui/material/Container";
import { Button, CardActionArea, CardActions } from "@mui/material";

const AllHerbs = () => {
  return (
    <>
      <Container maxWidth={false}>
        <Typography mb="20px" variant="h2">Herbs</Typography>
        <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
            <Card sx={{ maxWidth: 345 }} variant="outlined">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="230"
                  image={Img}
                  alt="oil-img"
                />
                <CardContent
                  sx={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    align="center"
                  >
                    Tulsi
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="subtitle2"
                    component="div"
                    align="center"
                  >
                    Reduces Hair Fall | Strengthens Hair | Softens Hair
                  </Typography>
                  <Typography variant="h6" color="#231955" align="center">
                    &#8377;999
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button
                  size="small"
                  color="primary"
                  variant="outlined"
                  sx={{ width: "100%" }}
                >
                  Add To Card
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
            <Card sx={{ maxWidth: 345 }} variant="outlined">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="230"
                  image={Img}
                  alt="oil-img"
                />
                <CardContent
                  sx={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    align="center"
                  >
                    Giloy
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="subtitle2"
                    component="div"
                    align="center"
                  >
                    Reduces Hair Fall | Strengthens Hair | Softens Hair
                  </Typography>
                  <Typography variant="h6" color="#231955" align="center">
                    &#8377;999
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button
                  size="small"
                  color="primary"
                  variant="outlined"
                  sx={{ width: "100%" }}
                >
                  Add To Card
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
            <Card sx={{ maxWidth: 345 }} variant="outlined">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="230"
                  image={Img}
                  alt="oil-img"
                />
                <CardContent
                  sx={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    align="center"
                  >
                    Kutki
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="subtitle2"
                    component="div"
                    align="center"
                  >
                    Reduces Hair Fall | Strengthens Hair | Softens Hair
                  </Typography>
                  <Typography variant="h6" color="#231955" align="center">
                    &#8377;999
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button
                  size="small"
                  color="primary"
                  variant="outlined"
                  sx={{ width: "100%" }}
                >
                  Add To Card
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
            <Card sx={{ maxWidth: 345 }} variant="outlined">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="230"
                  image={Img}
                  alt="oil-img"
                />
                <CardContent
                  sx={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    align="center"
                  >
                    Pahadi Gandrain (Smooth Angelica)
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="subtitle2"
                    component="div"
                    align="center"
                  >
                    Reduces Hair Fall | Strengthens Hair | Softens Hair
                  </Typography>
                  <Typography variant="h6" color="#231955" align="center">
                    &#8377;999
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button
                  size="small"
                  color="primary"
                  variant="outlined"
                  sx={{ width: "100%" }}
                >
                  Add To Card
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
            <Card sx={{ maxWidth: 345 }} variant="outlined">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="230"
                  image={Img}
                  alt="oil-img"
                />
                <CardContent
                  sx={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    align="center"
                  >
                    Baalchar (Nardus Root)
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="subtitle2"
                    component="div"
                    align="center"
                  >
                    Reduces Hair Fall | Strengthens Hair | Softens Hair
                  </Typography>
                  <Typography variant="h6" color="#231955" align="center">
                    &#8377;999
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button
                  size="small"
                  color="primary"
                  variant="outlined"
                  sx={{ width: "100%" }}
                >
                  Add To Card
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
            <Card sx={{ maxWidth: 345 }} variant="outlined">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="230"
                  image={Img}
                  alt="oil-img"
                />
                <CardContent
                  sx={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    align="center"
                  >
                    Flower Herbal Tea 
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="subtitle2"
                    component="div"
                    align="center"
                  >
                    Reduces Hair Fall | Strengthens Hair | Softens Hair
                  </Typography>
                  <Typography variant="h6" color="#231955" align="center">
                    &#8377;999
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button
                  size="small"
                  color="primary"
                  variant="outlined"
                  sx={{ width: "100%" }}
                >
                  Add To Card
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
            <Card sx={{ maxWidth: 345 }} variant="outlined">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="230"
                  image={Img}
                  alt="oil-img"
                />
                <CardContent
                  sx={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    align="center"
                  >
                    Herbal Tea
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="subtitle2"
                    component="div"
                    align="center"
                  >
                    Reduces Hair Fall | Strengthens Hair | Softens Hair
                  </Typography>
                  <Typography variant="h6" color="#231955" align="center">
                    &#8377;999
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button
                  size="small"
                  color="primary"
                  variant="outlined"
                  sx={{ width: "100%" }}
                >
                  Add To Card
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default AllHerbs
