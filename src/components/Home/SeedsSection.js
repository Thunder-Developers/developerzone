import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Img from "../../Assest/Seeds.jpg";
import Container from "@mui/material/Container";
import { Button, CardActionArea, CardActions } from "@mui/material";
import {useNavigate } from "react-router-dom";

const AllSeeds = () => {

  const navigate = useNavigate()
  const handlroute = () => {
    navigate("/AllSeeds")
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
          <Typography variant="h4">Seeds</Typography>
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
                  Sesame Seeds (Til)
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
                  Jakhiya
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
                  Hemp Seeds
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
                 Methi Seeds
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
                  Coriender Seeds
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
                  Timoor Seeds
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
  )
}

export default AllSeeds
