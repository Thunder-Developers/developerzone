import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Img from "../Assest/oil-img.jpg";
import Container from "@mui/material/Container";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Avatar from '@mui/material/Avatar';

const OilSection = (props) => {
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
            <Typography variant="h4">{props.product } Range</Typography>
          </Grid>
          <Grid item>
            <Button variant="outlined">View All</Button>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth={false}>
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
                    Coco Oil
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
                    Coco Oil
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
                    Coco Oil
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
                    Coco Oil
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
                    Coco Oil
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
                    Coco Oil
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
  );
};

export default OilSection;
