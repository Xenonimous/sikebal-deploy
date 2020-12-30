import React from 'react';
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import GetPenduduk from './GetPenduduk';
import GetKasus from './GetKasus'
import Zona from './Zona'

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        maxHeight: 200,
    },
    media: {
        height: 100,
    },
});

const Home = () => {

    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={0}>

                {/* tepi kiri */}
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                </Grid>

                {/* konten */}
                <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
                    <Grid container spacing={0}>
                        <Grid item xs sm md lg xl>
                            <center>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Jumlah Penduduk
                                 </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            <GetPenduduk />
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            </center>
                        </Grid>
                        <Grid item xs sm md lg xl>
                            <center>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Kasus Terkonfirmasi
                                 </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            <GetKasus />
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            </center>
                        </Grid>
                        <Grid item xs sm md lg xl>
                            <center>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Zona Saat Ini
                                 </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            <Zona />
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            </center>
                        </Grid>
                    </Grid>
                </Grid>

                {/* tepi kanan */}
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                </Grid>



            </Grid>

        </div >
    )
}

export default Home