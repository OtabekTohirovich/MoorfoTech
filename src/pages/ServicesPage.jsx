import { Container, Stack, Typography } from "@mui/material"
import { useTranslation } from "react-i18next";

const ServicesPage = () => {
    const [t, i18n] = useTranslation("global");
    return (
        <Stack className="wreapperhero-hearder" sx={{ padding: {xs: '190px 0',md: '250px 0'  }}}>
            <Container fixed>
                <Typography sx={{color: '#31c48d', fontSize: { xs: "25px", sm: "24px", md: "45px" }, textAlign: { xs: 'center' }, textTransform: 'uppercase', fontWeight: 'bold', paddingBottom: '15px' }}>
                    {t('body.navbar.services')}
                </Typography>
                <Typography sx={{fontSize: { xs: "15px", sm: "18px", md: "22px" }, textAlign: { xs: 'center' },}}>No Content added yet</Typography>
            </Container>
        </Stack>
    )
}

export default ServicesPage