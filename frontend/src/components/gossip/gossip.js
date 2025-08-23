import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Navbar from '../navbar/navabar';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
}));

export default function Gossip() {
  const [expanded, setExpanded] = React.useState(null);

  const gossips = [
    {
      _id: "1",
      message: "Arre, did you hear? Sharma ji’s son got a job in Google! rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!rre, did you hear? Sharma ji’s son got a job in Google!",
      user: { username: "Ramesh" },
      likes: ["u1", "u2"],
      createdAt: new Date(),
      image: "https://picsum.photos/600/300?random=1",
      comments: [
      ]
    },
    {
      _id: "2",
      message: "College canteen ka samosa ab ₹20 ka ho gaya 😭",
      user: { username: "Priya" },
      likes: ["u3"],
      createdAt: new Date(),
      image: "https://picsum.photos/600/300?random=2",
      comments: [
        { user: { username: "Amit" }, text: "Kya yaar inflation har jagah" },
      ]
    },
  ];

  const handleExpandClick = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <>
    <div style={{ display: 'grid', gap: '20px' }}>
      {gossips.map((gossip) => (
        <Card key={gossip._id} sx={{ width: "90%", margin: "auto", overflow: "hidden" }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }}>
                {gossip.user?.username?.[0]?.toUpperCase() || "U"}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={gossip.user?.username || "Anonymous"}
            subheader={new Date(gossip.createdAt).toLocaleDateString()}
          />
          {gossip.image && (
            <CardMedia
              component="img"
              height="200"
              image={gossip.image}
              alt="Gossip media"
            />
          )}
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {gossip.message}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="like">
              <FavoriteIcon />
              <span style={{ marginLeft: 4 }}>{gossip.likes?.length || 0}</span>
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded === gossip._id}
              onClick={() => handleExpandClick(gossip._id)}
              aria-expanded={expanded === gossip._id}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded === gossip._id} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography variant="subtitle2" sx={{ marginBottom: 1 }}>
                Comments:
              </Typography>
              {gossip.comments && gossip.comments.length > 0 ? (
                gossip.comments.map((c, i) => (
                  <Typography key={i} sx={{ fontSize: 14, mb: 1 }}>
                    <strong>{c.user?.username || "User"}:</strong> {c.text}
                  </Typography>
                ))
              ) : (
                <Typography sx={{ fontSize: 14, color: "gray" }}>
                  No comments yet.
                </Typography>
              )}
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </div>
    </>
  );
}
