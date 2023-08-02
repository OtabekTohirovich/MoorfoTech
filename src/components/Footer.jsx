import { Container, Grid, IconButton, Stack, Typography } from "@mui/material"
import logo from "../assets/logo-no-background.png"
import { useTranslation } from "react-i18next";
import { Facebook, Instagram, Telegram, LocationOn, Phone, Email, KeyboardArrowUp } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => {
    const [t, i18n] = useTranslation("global");

    return (
        <Stack sx={{ background: '#000', padding: '80px 0' }}>
            <Container fixed>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} lg={4}>
                        <img
                            style={{ height: '25px',  }}
                            src={logo}
                            alt="logo"
                        />
                        <Typography sx={{ color: '#828282', marginTop: '25px' }}>
                            {t("body.footerTitle")}
                        </Typography>
                        <Stack direction={'row'} gap={'15px'} sx={{ marginTop: '15px' }}>
                            <IconButton sx={{ background: '#1e1e1e', "&:hover": { background: '#1e1e1e' } }}>
                                <Instagram sx={{ color: "#31c48d" }} />
                            </IconButton>
                            <IconButton sx={{ background: '#1e1e1e', "&:hover": { background: '#1e1e1e' } }}>

                                <Facebook sx={{ color: "#31c48d" }} />
                            </IconButton>
                            <IconButton sx={{ background: '#1e1e1e', "&:hover": { background: '#1e1e1e' } }}>

                                <Telegram sx={{ color: "#31c48d" }} />
                            </IconButton>

                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={2}>
                        <Stack direction={'column'} gap={"12px"} sx={{ padding: '10px 0' }} alignItems={{xs: 'start', sm: 'end'}}>
                            <Link to={'/'} style={{ fontSize: "15px", fontWeight: "500", color: '#828282', textTransform: 'uppercase'  }}>
                                {t("body.navbar.home")}
                            </Link>
                            <Link to={'/services'} style={{ fontSize: "15px", fontWeight: "500", color: '#828282', textTransform: 'uppercase'  }}>
                                {t("body.navbar.services")}
                            </Link>
                            <Link to={'/company'} style={{ fontSize: "15px", fontWeight: "500", color: '#828282', textTransform: 'uppercase'   }}>
                                {t("body.navbar.company")}
                            </Link>
                            <Link to={'/partfolio'} style={{ fontSize: "15px", fontWeight: "500", color: '#828282', textTransform: 'uppercase' }}>
                                {t("body.navbar.partfolio")}
                            </Link>
                            <Link to={'/contacts'} style={{ fontSize: "15px", fontWeight: "500", color: '#828282', textTransform: 'uppercase' }}>
                                {t("body.navbar.contacts")}
                            </Link>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Stack direction={'row'} alignItems={"center"} sx={{ padding: '10px 0' }}>
                            <LocationOn sx={{ color: "#31c48d" }} />
                            <Typography sx={{ color: '#828282', marginTop: '5px', marginLeft: '10px' }}>TASHKENT, KUHINUR STREET, 1/1</Typography>
                        </Stack>
                        <Stack direction={'row'} alignItems={"center"} sx={{ padding: '10px 0' }}>
                            <Phone sx={{ color: "#31c48d" }} />
                            <Typography sx={{ color: '#828282', marginTop: '5px', marginLeft: '10px' }}>+998 91 591 16 04</Typography>
                        </Stack>
                        <Stack direction={'row'} alignItems={"center"} sx={{ padding: '10px 0' }}>
                            <Email sx={{ color: "#31c48d" }} />
                            <Typography sx={{ color: '#828282', marginTop: '5px', marginLeft: '10px' }}>tohirovo630@gmail.com</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={2}>
                        <Stack sx={{ padding: "10px 0" }} alignItems={'end'}>
                            <Typography sx={{ color: "#4f4f4f" }}>Privacy Policy</Typography>
                            <IconButton onClick={()=>{
                                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                            }} sx={{
                                marginTop: '10px', background: "#4f4f4f", width: "40px", "&:hover": {
                                    background: "#4f4f4f"
                                }
                            }}><KeyboardArrowUp />
                            </IconButton>
                            <Typography sx={{ color: "#4f4f4f", marginTop: "20px" }}>Copyright © 2010-2023 Webline/ All rights reserved.</Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Stack>
    )
}

export default Footer