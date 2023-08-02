import { Box, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material"

const CardTab = ({ number, title, image }) => {
    return (
        <Card sx={{
            height: "180px", padding: '10px', boxShadow: 'none', borderRadius: '15px', cursor: 'pointer', transition: 'all 0.3s ease-in-out', '&:hover': {
                transform: "scale(1.1)"
            }
        }} >
            <CardContent>
                <Stack direction={'row'} sx={{ position: "relative" }}>
                    <Box sx={{ width: "50%" }}>
                        <CardMedia component="img"
                            sx={{ height: '65px', objectFit: 'fill', marginLeft: "-35px" }}
                            image={image}
                            alt="green iguana" />
                        <Typography width={"120px"} sx={{ marginTop: '10px' }}>
                            {title}
                        </Typography>
                    </Box>
                    <Box >
                        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#f2f2f2', position: 'absolute', bottom: '0', right: '0' }}>
                            {number}
                        </Typography>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default CardTab