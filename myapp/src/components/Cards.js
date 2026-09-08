import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
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
                                        fontSize: '0.77rem',
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

export function ProjectCard({ image, title, description, link, github}) {
    return (
        <Card sx={{  }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="220"
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
                {link && <Button fullWidth href={`${link}`} target="_blank">Visit Site</Button>}
                {github && <Button fullWidth href={`${github}`} target="_blank">Github Repo</Button>}
                
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

export function VisitorCard({ name, message, doodle }){
    return (
        <Card sx={{ width: '100%', aspectRatio: '1 / 1', position: 'relative', overflow: 'hidden', border: '1px solid #CFC0D4', boxShadow: '0 0 4px rgba(0, 0, 0, 0.25)' }}>
            {doodle && <CardMedia component="img" image={doodle} alt="Visitor doodle" sx={{ width: '100%', height: '100%', objectFit: 'contain', backgroundColor: '#fff' }} />}
            <CardContent sx={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', background: 'linear-gradient(transparent, rgba(255, 255, 255, 0.96))', opacity: { xs: 1, md: 0 }, transition: 'opacity 180ms ease', '&:hover': { opacity: 1 } }}>
                <Typography variant="subtitle2">{name || 'anonymous'}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ overflowWrap: 'anywhere' }}>{message}</Typography>
            </CardContent>
        </Card>
    );
}

