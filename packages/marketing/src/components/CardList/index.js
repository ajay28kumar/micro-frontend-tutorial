import React from "react";
// import { useProgressiveImg } from "./progressiveImage";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Blurhash } from "react-blurhash";



const useStyles = makeStyles((theme) => ({
  '@global': {
    a: {
      textDecoration: 'none',
    },
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default ({photoList}) => {
  const classes = useStyles();
  return (
    <Grid container spacing={4}>
      {photoList.map((photoData) => (
        <Grid item key={photoData.id} xs={12} sm={6} md={4}>
          <CardRender photoData={photoData}/>
        </Grid>
      ))}
    </Grid>
  )
}

export const CardRender = ({photoData}) => {
  const classes = useStyles();
  
  console.log("photoData :", photoData);

  const imageURI = photoData?.urls?.thumb;

  

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image= {imageURI}
        title={photoData?.alt_description || "empty title"}
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          Heading
        </Typography>
        <Typography>
         {photoData?.user?.bio}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
        <Button size="small" color="primary">
          Edit
        </Button>
      </CardActions>
    </Card>
  )
}