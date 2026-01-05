import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export  function ProjectCard({ image, title, description }) {
    return (
        <Card sx={{  }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
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

