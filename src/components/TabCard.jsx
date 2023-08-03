import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"

const CardTab = ({ number, title, image }) => {
    return (
        <Card sx={{
            height: {xs: "280px", sm: "260px"}, padding: '10px', boxShadow: 'none', borderRadius: '15px', cursor: 'pointer', 
        }} >
            <CardContent>
                    <Box>
                        <CardMedia component="img"
                            sx={{ height: {xs: '200px', sm: '150px', md: '180px'}, objectFit: 'cover' }}
                            image={image}
                            alt="green iguana" />
                        <Typography sx={{ marginTop: '10px', fontWeight: 'bold', textAlign: 'center' }}>
                            {title}
                        </Typography>
                    </Box>

            </CardContent>
        </Card>
    )
}

export default CardTab