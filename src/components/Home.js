import React from 'react';
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import GetPenduduk from './GetPenduduk';
import GetKasus from './GetKasus';
import GetSembuh from './GetSembuh';
import GetMeninggal from './GetMeninggal';
import Zona from './Zona';

import Card1 from '../img/card1.jpg'
import Card2 from '../img/card2.jpg'
import Card3 from '../img/card3.jpg'
import FotoBanner from '../img/banner2.jpeg'
import AppBar from '@material-ui/core/AppBar';

import CheckIcon from '@material-ui/icons/Check';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import ContentA from '../img/contenta.jpg'


const useStyles = makeStyles((theme) => ({

    gridCard: {
        backgroundImage: `url(${FotoBanner})`,
        backgroundSize: 'fit',
        width: 'auto',
        height: 'auto',
        // paddingBottom: '15%',
        // maxHeight:'auto',
    },

    appbarClass: {
        justifyContent: 'center',
        height: '50px',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: '2% 0% 2% 0%',
    },
    appbarTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '24px',
    },

    carddata: {
        marginBottom: '3%',
        marginLeft: '25%',
        marginRight: '25%',
        width: 'auto',
        height: 'auto',
        minWidth: 'auto',
        minHeight: 'auto',
        maxWidth: 'auto',
        maxHeight: 'auto',
    },

    cardphoto: {
        maxWidth: 'auto',
        maxHeight: 'auto',
        margin: '1% 5%',
    },

    media: {
        height: 100,
    },

    gridPadding: {
        padding: '4% 5% 4% 5%',
        justifyContent: 'center',
        justifyItems: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },

    gridContent: {
        padding: '7% 9% 7% 9%',
    },

    containerA: {
        backgroundColor: '#F1F1F1',
        width: 'auto',
        height: '500px',
        alignItems: 'center',
        alignContent: 'center',
    },

    containerB: {
        // backgroundColor: '#424A8B',
        backgroundColor: '#D5D5D5',
        width: 'auto',
        height: '500px',
        alignItems: 'center',
        alignContent: 'center',
    },

    containerC: {
        // backgroundColor: '#B9B9B9',
        backgroundColor: '#424A8B',
        height: '500px',
        alignItems: 'center',
        alignContent: 'center',
    },

    titleContent: {
        fontWeight: 'bold',
        fontSize: '32px',
        paddingBottom: '3%',
    },

    containerFooter: {
        backgroundColor: '#1D1D1D',
        height: '50px',
        alignItems: 'center',
    },

    alignCard: {
        alignItems: 'center',
    },

    sikebalTitle: {
        padding: '9% 4% 0% 4%',
        justifyContent: 'center',
        justifyItems: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },

    fontTitle: {
        fontSize: '28px',
        fontWeight: 'bold',
        paddingLeft: '5%',
        color: 'white',
    },

}));

const Home = () => {

    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={0}>
                {/* konten */}
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <AppBar position="fixed" className={classes.appbarClass}>
                        <center>
                            <Typography className={classes.appbarTitle}>
                                SiKebal
                                </Typography>
                        </center>
                    </AppBar>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.gridCard}>
                    <Grid container spacing={0} className={classes.sikebalTitle}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Typography className={classes.fontTitle}>
                                Sistem Informasi Kesehatan Bandar Lampung
                            </Typography>
                        </Grid>
                    </Grid>

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
                                                Kasus Positif
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
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <center>
                                <Card className={classes.carddata}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                <SentimentSatisfiedAltIcon style={{color: 'green'}}/>Sembuh
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                <GetSembuh />
                                            </Typography>
                                        </CardContent>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                <SentimentVeryDissatisfiedIcon style={{color: 'red'}}/> Meninggal
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                <GetMeninggal />
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </center>
                        </Grid>

                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.containerA, classes.gridContent}>
                            <Typography className={classes.titleContent}>
                                Sudah Tau COVID-19 Itu Apa?
                            </Typography>
                            <Typography>
                                COVID-19 adalah penyakit yang disebabkan oleh virus severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). COVID-19 dapat menyebabkan gangguan sistem pernapasan, mulai dari gejala yang ringan seperti flu, hingga infeksi paru-paru, seperti pneumonia.
                            </Typography>
                            {<br />}
                            <Typography>
                                Kasus pertama penyakit ini terjadi di kota Wuhan, Cina, pada akhir Desember 2019. Setelah itu, COVID-19 menular antarmanusia dengan sangat cepat dan menyebar ke puluhan negara, termasuk Indonesia, hanya dalam beberapa bulan.
                            </Typography>
                            {<br />}
                            <Typography>
                                Penyebarannya yang cepat membuat beberapa negara menerapkan kebijakan untuk memberlakukan lockdown untuk mencegah penyebaran virus Corona. Di Indonesia, pemerintah menerapkan kebijakan Pembatasan Sosial Berskala Besar (PSBB) untuk menekan penyebaran virus ini.
                            </Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Grid container spacing={0} className={classes.containerB}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.gridContent}>
                            <Typography className={classes.titleContent}>
                                Bagaimana Mencegahnya?
                            </Typography>
                            <Typography>
                                <CheckIcon />    Cuci tangan Anda secara rutin. Gunakan sabun dan air, atau cairan pembersih tangan berbahan alkohol.
                                {<br />}
                                <CheckIcon />    Selalu jaga jarak aman dengan orang yang batuk atau bersin.
                                {<br />}
                                <CheckIcon />    Kenakan masker jika pembatasan fisik tidak dimungkinkan.
                                {<br />}
                                <CheckIcon />    Jangan sentuh mata, hidung, atau mulut Anda.
                                {<br />}
                                <CheckIcon />    Saat batuk atau bersin, tutup mulut dan hidung Anda dengan lengan atau tisu.
                                {<br />}
                                <CheckIcon />    Jangan keluar rumah jika merasa tidak enak badan.
                                {<br />}
                                <CheckIcon />    Jika demam, batuk, atau kesulitan bernapas, segera cari bantuan medis.
                            </Typography>

                        </Grid>
                    </Grid>
                </Grid>

                <Grid itemxs={12} sm={12} md={12} lg={12} xl={12}>
                    <Grid container spacing={0} className={classes.containerC}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.gridContent}>
                            <Typography className={classes.titleContent} style={{ color: 'white' }}>
                                Menerapkan 3M Demi Keselamatan Bersama
                            </Typography>
                            <Typography style={{ color: 'white' }}>
                                <CheckIcon />   Memakai masker
                                {<br />}
                                <CheckIcon />   Mencuci tangan
                                {<br />}
                                <CheckIcon />   Menjaga jarak dan menghindari kerumunan
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Grid container spacing={0} className={classes.containerFooter}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <center>
                                <Typography style={{ color: 'white' }}>
                                    © 2020 - SiKebal
                            </Typography>
                            </center>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>

        </div >
    )
}

export default Home