import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material"
import { useTranslation } from "react-i18next";
import CardComponent from "../components/CardComponent";
import Tabscom from "../components/Tabs";

const HomePage = () => {
  const [t, i18n] = useTranslation("global");
  console.log(i18n);

  return (
    <>

      <div className="wreapper-hearder">
        <Stack sx={{ position: 'relative', zIndex: 1, paddingTop: "150px" }}>
          <Container fixed>

            <Typography sx={{ fontSize: { xs: "15px", sm: "18px", md: "20px" }, textAlign: { xs: 'center', sm: 'start' }, textTransform: 'uppercase', fontWeight: '500', paddingBottom: '15px' }}>
              {t('body.additiontitle')}
            </Typography>
            <Typography variant="h1" fontSize={{ xs: '20px', sm: "30px", md: "33px", lg: "73px" }} sx={{ maxWidth: "700px", textAlign: { xs: 'center', sm: 'start' }, fontWeight: 'bold', textTransform: 'uppercase', lineHeight: 1.2 }}>
              {t("body.title")}
            </Typography>
            <Stack direction={{ xs: 'column', sm: "row" }} sx={{ justifyContent: { xs: "center", sm: "start" } }}>
              <Button size="large" variant="contained" sx={{
                marginTop: { xs: "10px", sm: '15px', lg: '35px' }, marginRight: { sm: '20px' }, padding: { xs: "5px 10px", md: "10px 15px", lg: '15px 20px' }, background: '#31c48d', color: '#000', fontWeight: '600', "&:hover": {
                  background: "#31c48d"
                }
              }}>
                {t("body.btnend")}
              </Button>

              <Button size="large" variant="outlined" sx={{
                marginTop: { xs: "10px", sm: '15px', lg: '35px' }, padding: { xs: "5px 10px", md: "10px 15px", lg: '15px 20px' }, border: '2px solid #31c48d', color: '#000', fontWeight: '600', "&:hover": {
                  border: '2px solid #31c48d'
                }
              }}>
                {t("body.btnhome")}
              </Button>
            </Stack>
            {/* <Box> */}
            <Stack direction={'row'} sx={{ marginTop: { xs: "12px", sm: '25px' }, justifyContent: { xs: 'center', sm: 'start', md: 'start' } }}>
              <Box sx={{ padding: "9px 5px 5px 16px", background: "#e0e0e0", color: '#fff', borderRadius: '50%', cursor: 'pointer', marginRight: '10px' }}>

                <ArrowBackIos />
              </Box>
              <Box sx={{ padding: "9px 10px 5px 11px", background: "#e0e0e0", color: '#fff', borderRadius: '50%', cursor: 'pointer' }}>
                <ArrowForwardIos />
              </Box>

            </Stack>

            {/* </Box> */}
          </Container>
        </Stack>
      </div>
      <Stack sx={{ background: "#f4f4f4", padding: { xs: "50px 0", sm: "100px 0" } }}>
        <Container fixed>
          <Typography sx={{ fontSize: { xs: "15px", sm: "18px", md: "25px" }, textAlign: { xs: 'center', sm: 'start' }, textTransform: 'uppercase', fontWeight: '500', paddingBottom: '15px' }}>
            {t('body.firstsection')}
          </Typography>

          <Typography variant="h1" sx={{ fontSize: { xs: "15px", sm: "18px", md: "45px" }, textAlign: { xs: 'center', sm: 'start' }, textTransform: 'uppercase', fontWeight: 'bold', paddingBottom: '15px' }}>
            {t('body.firsttitle')}
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <CardComponent title={t("body.secondsec.title1")} image={"https://webline.uz/storage/media/icons/mobile_apps.svg"} number={"01"} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <CardComponent title={t("body.secondsec.title2")} image={"https://webline.uz/storage/media/icons/web_pages.svg"} number={"02"} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <CardComponent title={t("body.secondsec.title3")} image={"https://webline.uz/storage/media/icons/b3.svg"} number={"03"} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <CardComponent title={t("body.secondsec.title4")} image={"https://webline.uz/storage/media/icons/b4.svg"} number={"04"} />
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
              <CardComponent title={t("body.secondsec.title5")} image={"https://webline.uz/storage/media/icons/b6.svg"} number={"05"} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <CardComponent title={t("body.secondsec.title6")} image={"https://webline.uz/storage/media/icons/b7.svg"} number={"06"} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <CardComponent title={t("body.secondsec.title7")} image={"https://webline.uz/storage/media/icons/b9.svg"} number={"07"} />
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
              <CardComponent title={t("body.secondsec.title8")} image={"https://webline.uz/storage/media/icons/b8.svg"} number={"08"} />
            </Grid>
          </Grid>

        </Container>
      </Stack>
      <Stack sx={{ padding: '60px 0' }}>
        <Container fixed>
          <Typography sx={{ fontSize: { xs: "20px", sm: "25px", md: "35px" }, textAlign: 'center', fontWeight: 'bold' }}>
            {t("body.title3")}
          </Typography>
          <Tabscom/>


        </Container>
      </Stack>
    </>
  )
}

export default HomePage