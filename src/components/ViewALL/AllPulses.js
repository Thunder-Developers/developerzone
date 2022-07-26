import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Img from "../../Assest/Pulses.jpg";
import Container from "@mui/material/Container";
import { Button, CardActionArea, CardActions } from "@mui/material";

const AllPulses = () => {
  return (
    <>
      <Container maxWidth={false}>
        <Typography mb='20px' variant="h2">Pulses</Typography>
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
                    Masoor Daal
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
                    Gahet Daal
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
                    Urad (Black daal)
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
                    Sp. Rajma Daal
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
                    Bhatt Daal
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
                    Rainsh Daal
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
                    Lobhiya Daal
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
                    Kala Chana Daal
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
                    Soyabean Daal
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
                    Pahadi Mixed Thin
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
                    Pahadi Mixed Thick
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

export default AllPulses
