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
import Card1 from '../img/card1.jpg'
import Card2 from '../img/card2.jpg'
import Card3 from '../img/card3.jpg'
// import FotoBanner from '../img/bannerfoto.jpg'
import AppBar from '@material-ui/core/AppBar';


const useStyles = makeStyles((theme) => ({

    // fotoBanner: {
    //     backgroundImage: `url(${FotoBanner})`,
    //     width: 'auto',
    //     height: '800px',
    // },

    appbarClass: {
        justifyContent: 'center',
        height: '50px',
        backgroundColor:'#F1F1F1',
        color: '#003499',
    },

    cardphoto: {
        maxWidth: 300,
        maxHeight: 500,
    },
    media: {
        height: 100,
    },

    gridPadding: {
        padding: '7% 3% 7% 3%',
    },

    containerA: {
        backgroundColor: '#F1F1F1',
        height: '400px',
    },
    containerB: {
        backgroundColor: 'white',
        height: '400px',
    },
    containerFooter: {
        backgroundColor: '#1D1D1D',
        height: '400px',
    },

}));

const Home = () => {

    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={0}>

                {/* tepi kiri */}
                {/* <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                </Grid> */}

                {/* konten */}
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <AppBar position="relative" className={classes.appbarClass}>
                        <center>
                            <Typography variant="h6" >
                                SiKebal
                                </Typography>
                        </center>
                    </AppBar>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.fotoBanner}>
                    <Grid container spacing={0} className={classes.gridPadding}>
                        <Grid item xs sm md lg xl>
                            <center>
                                <Card className={classes.cardphoto}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={Card1}
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
                                <Card className={classes.cardphoto}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={Card2}
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
                                <Card className={classes.cardphoto}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={Card3}
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

                <Grid itemxs={12} sm={12} md={12} lg={12} xl={12}>
                    <Grid container spacing={0} className={classes.containerA}>
                        <Grid ited xs sm md lg xl>

                        </Grid>
                        <Grid ited xs sm md lg xl>

                        </Grid>
                    </Grid>
                </Grid>

                <Grid itemxs={12} sm={12} md={12} lg={12} xl={12}>
                    <Grid container spacing={0} className={classes.containerB}>
                        <Grid ited xs sm md lg xl>

                        </Grid>
                        <Grid ited xs sm md lg xl>

                        </Grid>
                    </Grid>
                </Grid>

                <Grid itemxs={12} sm={12} md={12} lg={12} xl={12}>
                    <Grid container spacing={0} className={classes.containerA}>
                        <Grid ited xs sm md lg xl>

                        </Grid>
                        <Grid ited xs sm md lg xl>

                        </Grid>
                    </Grid>
                </Grid>

                <Grid itemxs={12} sm={12} md={12} lg={12} xl={12}>
                    <Grid container spacing={0} className={classes.containerFooter}>
                        <Grid ited xs sm md lg xl>

                        </Grid>
                        <Grid ited xs sm md lg xl>

                        </Grid>
                    </Grid>
                </Grid>

                {/* tepi kanan */}
                {/* <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                </Grid> */}



            </Grid>

        </div >
    )
}

export default Home