import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';


export function ExperienceCard({image, company, title, location, dates, description, tags}){
    
    const theme = useTheme();
    return(
        <Card
            sx={{
                overflow: 'hidden',
                borderRadius: 3,
                border: '1px solid rgba(0, 0, 0, 0.08)',
                backgroundColor: '#fff',
            }}
        >
            <CardActionArea sx={{ display: 'block', alignItems: 'stretch' }}>
                <Box sx={{ position: 'relative' }}>
                    <CardMedia
                        component="img"
                        height="280"
                        image={image}
                        alt={title}
                        sx={{ display: 'block', objectFit: 'cover' }}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, #ffffff 18%, rgba(255, 255, 255, 0.78) 40%, rgba(255, 255, 255, 0) 78%)',
                        }}
                    />
                </Box>

                <Box sx={{ px: 2,}}>
                    <Typography gutterBottom variant="h5" component="div" sx={{ m: 0, fontWeight: 700 }}>
                        {title}
                    </Typography>
                </Box>

                <CardContent sx={{ background: '#fff', pt: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between'}}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', minWidth: 0 }}>
                            <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 600 }}>
                                {company}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', ml:1.5 }}>
                                {location}
                            </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: 'text.secondary', whiteSpace: 'nowrap', textAlign: 'right', flexShrink: 0 }}>
                            {dates}
                        </Typography>
                    </Box>

                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.7 }}>
                        {description}
                    </Typography>

                    <Grid container spacing={1}>
                        {tags?.map((tag) => (
                            <Grid item key={tag}>
                                <Box
                                    sx={{
                                        px: 1,
                                        py: 0.5,
                                        borderRadius: 999,
                                        backgroundColor: 'rgba(154, 210, 157, 0.14)',
                                        color: 'rgba(28, 36, 28, 0.93)',
                                        border: `2px solid ${theme.palette.primary.main}`,
                                        fontSize: '0.65rem',
                                        fontFamily:theme.typography.fontFamily,
                                        lineHeight: 1,
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    {tag}
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    )

}

export function ProjectCard({ image, title, description }) {
    return (
        <Card sx={{  }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={(image)}
                    alt={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export function StackCard({ icon, name }) {
    return (
        <Card sx={{ height:'80px',border:'1px solid #b7b7b7ff',display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CardActionArea sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    {icon}
                    <Typography variant="body2" sx={{ mt:1, color: 'text.secondary' }}>
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

