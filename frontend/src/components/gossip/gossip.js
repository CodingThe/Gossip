
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
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import { red, blue, purple } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

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

const FilterContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  borderRadius: '15px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  borderRadius: '15px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
  },
}));

const GradientBackground = styled(Box)({
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  minHeight: '100vh',
  padding: '20px',
});

export default function Gossip() {
  const [expanded, setExpanded] = React.useState(null);
  const [nameFilter, setNameFilter] = React.useState('');
  const [userFilter, setUserFilter] = React.useState('');
  const [sortOrder, setSortOrder] = React.useState('latest');

  const gossips = [
    {
      _id: "1",
      message: "Arre, did you hear? Sharma ji's son got a job in Google! This is such exciting news for the whole neighborhood. Everyone is so proud of his achievement.",
      user: { username: "Ramesh" },
      likes: ["u1", "u2", "u3", "u4", "u5"],
      createdAt: new Date('2024-01-15'),
      image: "https://picsum.photos/600/300?random=1",
      comments: [
        { user: { username: "Priya" }, text: "That's amazing! Hard work pays off!" },
        { user: { username: "Amit" }, text: "Congratulations to Sharma ji's family!" }
      ]
    },
    {
      _id: "2",
      message: "College canteen ka samosa ab ₹20 ka ho gaya 😭",
      user: { username: "Priya" },
      likes: ["u3", "u6", "u7"],
      createdAt: new Date('2024-01-14'),
      image: "https://picsum.photos/600/300?random=2",
      comments: [
        { user: { username: "Amit" }, text: "Kya yaar inflation har jagah" },
      ]
    },
    {
      _id: "3",
      message: "New coffee shop opened near the university. Their chai is amazing! ☕",
      user: { username: "Amit" },
      likes: ["u1", "u2", "u3", "u4", "u5", "u6", "u7", "u8"],
      createdAt: new Date('2024-01-13'),
      image: "https://picsum.photos/600/300?random=3",
      comments: []
    },
  ];

  const handleExpandClick = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const filteredAndSortedGossips = React.useMemo(() => {
    let filtered = gossips.filter(gossip => {
      const nameMatch = gossip.message.toLowerCase().includes(nameFilter.toLowerCase());
      const userMatch = gossip.user.username.toLowerCase().includes(userFilter.toLowerCase());
      return nameMatch && userMatch;
    });

    return filtered.sort((a, b) => {
      switch (sortOrder) {
        case 'popularity':
          return (b.likes?.length || 0) - (a.likes?.length || 0);
        case 'oldest':
          return new Date(a.createdAt) - new Date(b.createdAt);
        case 'latest':
        default:
          return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });
  }, [nameFilter, userFilter, sortOrder]);

  return (
    <GradientBackground>
      <Box sx={{ maxWidth: '900px', margin: 'auto' }}>
        {/* Filter Section */}
        <FilterContainer elevation={3}>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', textAlign: 'center' }}>
            🗣️ Gossip Hub
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Search Gossips"
                variant="filled"
                value={nameFilter}
                onChange={(e) => setNameFilter(e.target.value)}
                InputProps={{
                  startAdornment: <SearchIcon sx={{ mr: 1, color: 'white' }} />,
                }}
                sx={{
                  '& .MuiFilledInput-root': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    color: 'white',
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.15)' },
                  },
                  '& .MuiInputLabel-root': { color: 'white' },
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Search Users"
                variant="filled"
                value={userFilter}
                onChange={(e) => setUserFilter(e.target.value)}
                InputProps={{
                  startAdornment: <PersonIcon sx={{ mr: 1, color: 'white' }} />,
                }}
                sx={{
                  '& .MuiFilledInput-root': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    color: 'white',
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.15)' },
                  },
                  '& .MuiInputLabel-root': { color: 'white' },
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth variant="filled">
                <InputLabel sx={{ color: 'white' }}>Sort By</InputLabel>
                <Select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    color: 'white',
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.15)' },
                    '& .MuiSelect-icon': { color: 'white' },
                  }}
                  startAdornment={<TrendingUpIcon sx={{ mr: 1, color: 'white' }} />}
                >
                  <MenuItem value="latest">Latest First</MenuItem>
                  <MenuItem value="oldest">Oldest First</MenuItem>
                  <MenuItem value="popularity">Most Popular</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          
          {/* Active Filters Display */}
          <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {nameFilter && (
              <Chip
                label={`Content: ${nameFilter}`}
                onDelete={() => setNameFilter('')}
                sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }}
              />
            )}
            {userFilter && (
              <Chip
                label={`User: ${userFilter}`}
                onDelete={() => setUserFilter('')}
                sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }}
              />
            )}
          </Box>
        </FilterContainer>

        {/* Results Summary */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" color="textSecondary" textAlign="center">
            Showing {filteredAndSortedGossips.length} gossip(s)
          </Typography>
        </Box>

        {/* Gossips Grid */}
        <Box sx={{ display: 'grid', gap: 3 }}>
          {filteredAndSortedGossips.map((gossip) => (
            <StyledCard key={gossip._id}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500], width: 50, height: 50 }}>
                    {gossip.user?.username?.[0]?.toUpperCase() || "U"}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {gossip.user?.username || "Anonymous"}
                  </Typography>
                }
                subheader={
                  <Typography variant="body2" color="textSecondary">
                    {new Date(gossip.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </Typography>
                }
              />
              
              {gossip.image && (
                <CardMedia
                  component="img"
                  height="250"
                  image={gossip.image}
                  alt="Gossip media"
                  sx={{ borderRadius: '8px', margin: '0 16px' }}
                />
              )}
              
              <CardContent>
                <Typography variant="body1" color="text.primary" sx={{ lineHeight: 1.6 }}>
                  {gossip.message.length > 150 
                    ? `${gossip.message.substring(0, 150)}...` 
                    : gossip.message
                  }
                </Typography>
              </CardContent>
              
              <CardActions disableSpacing sx={{ px: 2 }}>
                <IconButton aria-label="like" sx={{ color: red[500] }}>
                  <FavoriteIcon />
                  <Typography variant="body2" sx={{ ml: 0.5, fontWeight: 'bold' }}>
                    {gossip.likes?.length || 0}
                  </Typography>
                </IconButton>
                
                <IconButton aria-label="share" sx={{ color: blue[500] }}>
                  <ShareIcon />
                </IconButton>
                
                <Box sx={{ flexGrow: 1 }} />
                
                <Chip 
                  label={`${gossip.comments?.length || 0} comments`}
                  size="small"
                  sx={{ mr: 1 }}
                />
                
                <ExpandMore
                  expand={expanded === gossip._id}
                  onClick={() => handleExpandClick(gossip._id)}
                  aria-expanded={expanded === gossip._id}
                  aria-label="show more"
                  sx={{ color: purple[500] }}
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              
              <Collapse in={expanded === gossip._id} timeout="auto" unmountOnExit>
                <CardContent sx={{ backgroundColor: '#f8f9fa' }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: purple[700] }}>
                    💬 Comments
                  </Typography>
                  {gossip.comments && gossip.comments.length > 0 ? (
                    gossip.comments.map((comment, index) => (
                      <Box 
                        key={index} 
                        sx={{ 
                          mb: 2, 
                          p: 2, 
                          backgroundColor: 'white', 
                          borderRadius: '10px',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                        }}
                      >
                        <Typography variant="body2" sx={{ fontWeight: 'bold', color: blue[700] }}>
                          {comment.user?.username || "User"}
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 0.5 }}>
                          {comment.text}
                        </Typography>
                      </Box>
                    ))
                  ) : (
                    <Typography variant="body2" color="textSecondary" textAlign="center" sx={{ py: 2 }}>
                      No comments yet. Be the first to comment! 🎯
                    </Typography>
                  )}
                </CardContent>
              </Collapse>
            </StyledCard>
          ))}
        </Box>

        {filteredAndSortedGossips.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="h6" color="textSecondary">
              No gossips found matching your filters 🔍
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
              Try adjusting your search criteria
            </Typography>
          </Box>
        )}
      </Box>
    </GradientBackground>
  );
}
