import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Img from "../../Assest/Grains-img.jpeg";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import "./comp.css"
import { Button, CardActionArea, CardActions } from "@mui/material";


const GrainsSection = (props) => {
  const navigate = useNavigate()
  const handlroute = () => {
    navigate("/viewAll")
  }
  return (
    <>
      <Container maxWidth={false} sx={{ marginBottom: "20px" }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4">{props.product} Range</Typography>
          </Grid>
          <Grid item className="buttontransition">
            <Button variant="outlined" onClick={handlroute}>View All</Button>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth={false}>
        <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={2} className="changetransition">
            <Card sx={{ maxWidth: 345 }} variant="outlined">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="230"
                  image={Img}
                  alt="Grain-img"
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
                    Red Rice
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="subtitle2"
                    component="div"
                    align="center"
                  >
                    Boost Immunity | Helps Digestion | Remove Toxins
                  </Typography>
                  <Typography variant="h6" color="#231955" align="center">
                    &#8377;299/Kg
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ justifyContent: "center" }} className="buttontransition">
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
          <Grid item xs={6} sm={4} md={3} lg={2} xl={2} className="changetransition">
            <Card sx={{ maxWidth: 345 }} variant="outlined">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="230"
                  image={Img}
                  alt="Grain-img"
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
                    Sharbati Rice
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="subtitle2"
                    component="div"
                    align="center"
                  >
                    Boost Immunity | Helps Digestion | Remove Toxins
                  </Typography>
                  <Typography variant="h6" color="#231955" align="center">
                    &#8377;299/Kg
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ justifyContent: "center" }} className="buttontransition">
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
          <Grid item xs={6} sm={4} md={3} lg={2} xl={2} className="changetransition">
            <Card sx={{ maxWidth: 345 }} variant="outlined">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="230"
                  image={Img}
                  alt="Grain-img"
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
                    Pahadi Thick Rice
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="subtitle2"
                    component="div"
                    align="center"
                  >
                    Boost Immunity | Helps Digestion | Remove Toxins
                  </Typography>
                  <Typography variant="h6" color="#231955" align="center">
                    &#8377;299/Kg
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ justifyContent: "center" }} className="buttontransition">
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
          <Grid item xs={6} sm={4} md={3} lg={2} xl={2} className="changetransition">
            <Card sx={{ maxWidth: 345 }} variant="outlined">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="230"
                  image={Img}
                  alt="Grain-img"
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
                    Sp. Basmati Rice
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="subtitle2"
                    component="div"
                    align="center"
                  >
                    Boost Immunity | Helps Digestion | Remove Toxins
                  </Typography>
                  <Typography variant="h6" color="#231955" align="center">
                    &#8377;299/Kg
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ justifyContent: "center" }} className="buttontransition">
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
          <Grid item xs={6} sm={4} md={3} lg={2} xl={2} className="changetransition">
            <Card sx={{ maxWidth: 345 }} variant="outlined">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="230"
                  image={Img}
                  alt="Grain-img"
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
                    Jhangora Rice
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="subtitle2"
                    component="div"
                    align="center"
                  >
                    Boost Immunity | Helps Digestion | Remove Toxins
                  </Typography>
                  <Typography variant="h6" color="#231955" align="center">
                    &#8377;299/Kg
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ justifyContent: "center" }} className="buttontransition">
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
          <Grid item xs={6} sm={4} md={3} lg={2} xl={2} className="changetransition">
            <Card sx={{ maxWidth: 345 }} variant="outlined">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="230"
                  image={Img}
                  alt="Grain-img"
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
                    Madwa
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="subtitle2"
                    component="div"
                    align="center"
                  >
                    Boost Immunity | Helps Digestion | Remove Toxins
                  </Typography>
                  <Typography variant="h6" color="#231955" align="center">
                    &#8377;299/Kg
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ justifyContent: "center" }} className="buttontransition">
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
  );
};

export default GrainsSection;
