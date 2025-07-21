import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, CssBaseline, Box, Button, TextField, Select, MenuItem, Card, CardContent, CardActions, Grid, Chip, Container, Divider, ThemeProvider, createTheme, Avatar, Tooltip, Snackbar, Alert, useMediaQuery } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddBoxIcon from '@mui/icons-material/AddBox';
import TokenIcon from '@mui/icons-material/Token';
import HistoryIcon from '@mui/icons-material/History';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import InfoIcon from '@mui/icons-material/Info';
import { v4 as uuidv4 } from 'uuid';
import logo from './logo.svg';
import undrawAdventure from './undraw_adventure_re_ncqp.svg';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';

const drawerWidth = 220;

const pages = [
  { label: 'Home', icon: <DashboardIcon /> },
  { label: 'About', icon: <InfoIcon /> },
  { label: 'Dashboard', icon: <DashboardIcon /> },
  { label: 'Deposit Avocadoes', icon: <AddBoxIcon /> },
  { label: 'My Tokens', icon: <TokenIcon /> },
  { label: 'History', icon: <HistoryIcon /> },
  { label: 'Profile', icon: <MenuIcon /> },
];

const theme = createTheme({
  palette: {
    primary: { main: '#388e3c' },
    secondary: { main: '#8bc34a' },
    background: { default: '#f4f7f6' },
    info: { main: '#e0f2f1' },
  },
  typography: {
    fontFamily: 'Montserrat, Arial',
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 24px 0 rgba(56,142,60,0.08)',
        },
      },
    },
  },
});

// Add About page rendering
function renderAboutPage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" color="primary" fontWeight={700} gutterBottom>About WRS Kenya</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3, mb: 2 }}>
            <Typography variant="h5" fontWeight={600} gutterBottom>Business Description</Typography>
            <Typography variant="body1" color="text.secondary" mb={2}>
              <b>WRS Kenya</b> is a digital-native platform designed to revolutionize agricultural post-harvest management in Kenya. We enable farmers, traders, and market players to securely store their produce (starting with avocadoes) in certified warehouses and receive digital tokens (warehouse receipts) as proof of ownership. These tokens can be used as collateral for loans, traded as negotiable instruments, or redeemed for cash/produce, unlocking access to credit and stable markets.
            </Typography>
            <Typography variant="subtitle1" fontWeight={600}>Problems We Solve:</Typography>
            <ul style={{ marginTop: 0 }}>
              <li>Post-harvest losses due to poor storage</li>
              <li>Limited access to credit for smallholder farmers</li>
              <li>Lack of transparency and trust in produce storage and trading</li>
              <li>Market volatility and price instability</li>
            </ul>
            <Typography variant="subtitle1" fontWeight={600} mt={2}>Target Audience:</Typography>
            <ul style={{ marginTop: 0 }}>
              <li>Smallholder and commercial farmers</li>
              <li>Agricultural cooperatives</li>
              <li>Produce traders and aggregators</li>
              <li>Financial institutions and agri-lenders</li>
              <li>Warehouse operators</li>
            </ul>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3, mb: 2 }}>
            <Typography variant="h5" fontWeight={600} gutterBottom>Team</Typography>
            <ul style={{ marginTop: 0 }}>
              <li><b>Fabian Owuor</b> – Collaboration and Research</li>
              <li><b>Joyce Kyalo</b> – Lead Developer</li>
              <li><b>James Kodhek</b> – Frontend</li>
              <li><b>Alvin Mwangi</b> – Content and Social Media</li>
            </ul>
          </Card>
          <Card sx={{ p: 3 }}>
            <Typography variant="h5" fontWeight={600} gutterBottom>Products</Typography>
            <Typography variant="body1" color="text.secondary" mb={2}>
              <b>WRS Platform (Web App):</b> MVP live (Avocadoes pilot)
            </Typography>
            <ul style={{ marginTop: 0 }}>
              <li>Farmer registration/login and profile management</li>
              <li>Produce deposit and warehouse selection</li>
              <li>Digital token (NFT-style) issuance and management</li>
              <li>Token redemption and transaction history</li>
              <li>Dashboard and analytics</li>
              <li>Demo mode for public preview</li>
            </ul>
            <Typography variant="body2" color="text.secondary" mt={2}>
              <b>Partnership Launch:</b> The partnership will start with avocadoes, targeting the onboarding and management of <b>one million avocadoes</b> in the first phase.
            </Typography>
          </Card>
        </Grid>
      </Grid>
      <Card sx={{ p: 3, mt: 4, bgcolor: '#e3f2fd' }}>
        <Typography variant="h6" fontWeight={600} gutterBottom>Further Notes & Eligibility</Typography>
        <Typography variant="body2" color="text.secondary">
          For Google for Startups Cloud Program eligibility, your public website must clearly display:
          <ul style={{ marginTop: 0 }}>
            <li>Business description, problems solved, and target audience</li>
            <li>Team information and relevant experience</li>
            <li>Product details and current development stage</li>
          </ul>
          See the <a href="https://cloud.google.com/startup/faq" target="_blank" rel="noopener noreferrer">Google for Startups Cloud Program FAQ</a> for full requirements and application process.
        </Typography>
      </Card>
    </Container>
  );
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');
  const [demoPage, setDemoPage] = useState(0);
  const [demoAuthMode, setDemoAuthMode] = useState('login');
  const navigate = useNavigate();

  // Mock warehouses
  const warehouses = [
    { id: 'w1', name: 'Nairobi Central Warehouse' },
    { id: 'w2', name: 'Eldoret Avocado Hub' },
    { id: 'w3', name: 'Mombasa Storage Facility' },
  ];

  // State for deposits, tokens, and history
  const [deposits, setDeposits] = useState([]);
  const [tokens, setTokens] = useState([]);
  const [history, setHistory] = useState([]);

  // Deposit form state
  const [depositQty, setDepositQty] = useState('');
  const [depositWarehouse, setDepositWarehouse] = useState(warehouses[0].id);
  const [depositError, setDepositError] = useState('');

  // Auth state
  const [farmers, setFarmers] = useState([]);
  const [currentFarmer, setCurrentFarmer] = useState(null);
  const [authFields, setAuthFields] = useState({ username: '', password: '', location: '', mobile: '', farm: '' });
  const [authError, setAuthError] = useState('');

  // Snackbar state
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  // Dialog state
  const [confirmDialog, setConfirmDialog] = useState({ open: false, action: null, tokenId: null });

  // Auth handlers
  const handleAuthChange = (e) => {
    setAuthFields({ ...authFields, [e.target.name]: e.target.value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const farmer = farmers.find(f => f.username === authFields.username && f.password === authFields.password);
    if (farmer) {
      setCurrentFarmer(farmer);
      setAuthError('');
      setAuthFields({ username: '', password: '', location: '', mobile: '', farm: '' });
      navigate('/dashboard');
    } else {
      setAuthError('Invalid username or password');
    }
  };
  const handleRegister = (e) => {
    e.preventDefault();
    if (!authFields.username || !authFields.password || !authFields.location || !authFields.mobile || !authFields.farm) {
      setAuthError('All fields are required');
      return;
    }
    if (farmers.some(f => f.username === authFields.username)) {
      setAuthError('Username already exists');
      return;
    }
    const newFarmer = { ...authFields };
    setFarmers(prev => [...prev, newFarmer]);
    setCurrentFarmer(newFarmer);
    setAuthError('');
    setAuthFields({ username: '', password: '', location: '', mobile: '', farm: '' });
    navigate('/dashboard');
  };
  const handleLogout = () => {
    setConfirmDialog({ open: true, action: 'logout' });
  };
  const confirmLogout = () => {
    setCurrentFarmer(null);
    setSnackbar({ open: true, message: 'Logged out.', severity: 'info' });
    setConfirmDialog({ open: false, action: null, tokenId: null });
  };

  // Handle deposit form submit
  const handleDeposit = (e) => {
    e.preventDefault();
    const qty = parseInt(depositQty, 10);
    if (!qty || qty <= 0) {
      setDepositError('Enter a valid quantity');
      return;
    }
    setDepositError('');
    const date = new Date().toISOString();
    const depositId = uuidv4();
    const tokenId = uuidv4();
    setDeposits(prev => [...prev, { id: depositId, quantity: qty, warehouseId: depositWarehouse, date, username: currentFarmer.username }]);
    setTokens(prev => [...prev, { id: tokenId, quantity: qty, warehouseId: depositWarehouse, date, redeemed: false, username: currentFarmer.username }]);
    setHistory(prev => [
      { id: uuidv4(), type: 'deposit', quantity: qty, warehouseId: depositWarehouse, date, tokenId, username: currentFarmer.username },
      ...prev
    ]);
    setDepositQty('');
    setDepositWarehouse(warehouses[0].id);
    setSnackbar({ open: true, message: 'Deposit successful! Token issued.', severity: 'success' });
  };

  // Handle redeem token
  const handleRedeem = (tokenId) => {
    setConfirmDialog({ open: true, action: 'redeem', tokenId });
  };
  const confirmRedeem = () => {
    setTokens(prev => prev.map(t => t.id === confirmDialog.tokenId ? { ...t, redeemed: true } : t));
    const token = tokens.find(t => t.id === confirmDialog.tokenId);
    if (token) {
      setHistory(prev => [
        { id: uuidv4(), type: 'redeem', quantity: token.quantity, warehouseId: token.warehouseId, date: new Date().toISOString(), tokenId: confirmDialog.tokenId, username: currentFarmer.username },
        ...prev
      ]);
    }
    setSnackbar({ open: true, message: 'Token redeemed!', severity: 'info' });
    setConfirmDialog({ open: false, action: null, tokenId: null });
  };

  // Filtered data for current farmer
  const farmerDeposits = deposits.filter(d => d.username === currentFarmer?.username);
  const farmerTokens = tokens.filter(t => t.username === currentFarmer?.username);
  const farmerHistory = history.filter(h => h.username === currentFarmer?.username);

  // Navigation bar component
  function NavBar({ loggedIn }) {
    return (
      <AppBar position="static" elevation={0} sx={{ bgcolor: 'white', color: 'primary.main', boxShadow: 1 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box display="flex" alignItems="center">
            <img src={logo} alt="WRS Logo" style={{ width: 40, height: 40, marginRight: 12 }} />
            <Typography variant="h6" fontWeight={700} sx={{ fontFamily: 'Montserrat' }}>WRS Kenya</Typography>
          </Box>
          <Box display={{ xs: 'none', md: 'flex' }} gap={3} alignItems="center">
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
            <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
            <Button color="inherit" component={Link} to="/deposit">Deposit</Button>
            <Button color="inherit" component={Link} to="/tokens">Tokens</Button>
            <Button color="inherit" component={Link} to="/history">History</Button>
            <Button color="inherit" component={Link} to="/profile">Profile</Button>
            {!loggedIn && <Button variant="contained" color="primary" sx={{ ml: 2 }} component={Link} to="/login">Login / Register</Button>}
            {loggedIn && <Button variant="contained" color="primary" sx={{ ml: 2 }} onClick={handleLogout}>Logout</Button>}
          </Box>
        </Toolbar>
      </AppBar>
    );
  }

  // Home page render function
  function HomePage() {
    return (
      <Box sx={{
        width: '100%',
        minHeight: { xs: 360, md: 420 },
        background: 'linear-gradient(120deg, #a8e063 0%, #56ab2f 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: { xs: 'column', md: 'row' },
        px: { xs: 2, md: 8 },
        py: { xs: 6, md: 8 },
        color: 'white',
        position: 'relative',
      }}>
        <Box sx={{ flex: 1, zIndex: 2, textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h2" fontWeight={700} sx={{ fontFamily: 'Montserrat', mb: 2, fontSize: { xs: 32, md: 48 } }}>
            Empowering Kenyan Farmers
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, fontWeight: 400 }}>
            Secure storage. Digital receipts. Access to credit and markets.
          </Typography>
          <Button variant="contained" color="secondary" size="large" sx={{ borderRadius: 3, fontWeight: 700, fontSize: 18 }} onClick={() => { setDemoAuthMode('login'); setDemoPage(100); }}>
            Get Started
          </Button>
        </Box>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', mt: { xs: 4, md: 0 } }}>
          <img src={undrawAdventure} alt="Hero Illustration" style={{ maxWidth: 340, width: '100%', borderRadius: 24, boxShadow: '0 8px 32px 0 rgba(56,142,60,0.10)' }} />
        </Box>
      </Box>
    );
  }

  // Features Section
  function FeaturesSection() {
    return (
      <Container maxWidth="lg" sx={{ mt: { xs: 4, md: 8 }, mb: 6 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, textAlign: 'center', bgcolor: '#e8f5e9', boxShadow: 2 }}>
              <WarehouseIcon sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />
              <Typography variant="h6" fontWeight={700} gutterBottom>Certified Warehouses</Typography>
              <Typography variant="body1" color="text.secondary">Store your produce in secure, government-certified warehouses across Kenya.</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, textAlign: 'center', bgcolor: '#f1f8e9', boxShadow: 2 }}>
              <LocalOfferIcon sx={{ fontSize: 48, color: 'secondary.main', mb: 1 }} />
              <Typography variant="h6" fontWeight={700} gutterBottom>Digital Tokens</Typography>
              <Typography variant="body1" color="text.secondary">Receive digital receipts (tokens) for your deposits, tradable and usable as collateral.</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, textAlign: 'center', bgcolor: '#e3f2fd', boxShadow: 2 }}>
              <MonetizationOnIcon sx={{ fontSize: 48, color: '#388e3c', mb: 1 }} />
              <Typography variant="h6" fontWeight={700} gutterBottom>Easy Redemption</Typography>
              <Typography variant="body1" color="text.secondary">Redeem your tokens for cash or produce at your convenience, with full transparency.</Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    );
  }

  // Dashboard page render function
  function DashboardPage() {
    return (
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>Welcome, {currentFarmer?.username}!</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, textAlign: 'center', bgcolor: '#e3f2fd', boxShadow: 2 }}>
              <Typography variant="h6" fontWeight={700} gutterBottom>Total Deposits</Typography>
              <Typography variant="h3" fontWeight={700} color="primary">{farmerDeposits.reduce((sum, d) => sum + d.quantity, 0)}</Typography>
              <Typography variant="body2" color="text.secondary">Avocadoes</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, textAlign: 'center', bgcolor: '#e3f2fd', boxShadow: 2 }}>
              <Typography variant="h6" fontWeight={700} gutterBottom>Total Tokens</Typography>
              <Typography variant="h3" fontWeight={700} color="primary">{farmerTokens.length}</Typography>
              <Typography variant="body2" color="text.secondary">Active Tokens</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, textAlign: 'center', bgcolor: '#e3f2fd', boxShadow: 2 }}>
              <Typography variant="h6" fontWeight={700} gutterBottom>Total Value</Typography>
              <Typography variant="h3" fontWeight={700} color="primary">Kes 0</Typography>
              <Typography variant="body2" color="text.secondary">Estimated Value</Typography>
            </Card>
          </Grid>
        </Grid>
        <Typography variant="h5" fontWeight={600} mt={4} gutterBottom>Recent Activity</Typography>
        <List>
          {farmerHistory.map(h => (
            <ListItem key={h.id} sx={{ bgcolor: '#f4f7f6', borderRadius: 1, mb: 1 }}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                {h.type === 'deposit' ? <AddBoxIcon /> : <ShoppingCartIcon />}
              </ListItemIcon>
              <ListItemText
                primary={`${h.type === 'deposit' ? 'Deposited' : 'Redeemed'} ${h.quantity} Avocadoes`}
                secondary={`Warehouse: ${warehouses.find(w => w.id === h.warehouseId)?.name}, Date: ${new Date(h.date).toLocaleDateString()}`}
              />
            </ListItem>
          ))}
        </List>
      </Container>
    );
  }

  // Deposit page render function
  function DepositPage() {
    return (
      <Container maxWidth="sm" sx={{ py: 6 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>Deposit Avocadoes</Typography>
        <Card sx={{ p: 3 }}>
          <Typography variant="body1" color="text.secondary" mb={2}>
            Select a warehouse to deposit your avocadoes. You will receive a digital token (NFT) as proof of ownership.
          </Typography>
          <form onSubmit={handleDeposit}>
            <TextField
              label="Quantity (Avocadoes)"
              type="number"
              fullWidth
              margin="normal"
              value={depositQty}
              onChange={(e) => setDepositQty(e.target.value)}
              error={!!depositError}
              helperText={depositError}
            />
            <Select
              label="Warehouse"
              fullWidth
              margin="normal"
              value={depositWarehouse}
              onChange={(e) => setDepositWarehouse(e.target.value)}
            >
              {warehouses.map(warehouse => (
                <MenuItem key={warehouse.id} value={warehouse.id}>{warehouse.name}</MenuItem>
              ))}
            </Select>
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Deposit Avocadoes
            </Button>
          </form>
        </Card>
      </Container>
    );
  }

  // Tokens page render function
  function TokensPage() {
    return (
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>My Tokens</Typography>
        <Grid container spacing={2}>
          {farmerTokens.map(token => (
            <Grid item xs={12} key={token.id}>
              <Card sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  <Typography variant="subtitle1" fontWeight={600}>Token ID: {token.id}</Typography>
                  <Typography variant="body2" color="text.secondary">Quantity: {token.quantity}</Typography>
                  <Typography variant="body2" color="text.secondary">Warehouse: {warehouses.find(w => w.id === token.warehouseId)?.name}</Typography>
                  <Typography variant="body2" color="text.secondary">Date: {new Date(token.date).toLocaleDateString()}</Typography>
                  {!token.redeemed && (
                    <Button variant="outlined" color="primary" size="small" onClick={() => handleRedeem(token.id)} sx={{ mt: 1 }}>
                      Redeem Token
                    </Button>
                  )}
                  {token.redeemed && (
                    <Chip label="Redeemed" color="success" size="small" sx={{ mt: 1 }} />
                  )}
                </Box>
                <Avatar sx={{ bgcolor: token.redeemed ? 'success.main' : 'primary.main', width: 40, height: 40 }}>
                  <TokenIcon />
                </Avatar>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }

  // History page render function
  function HistoryPage() {
    return (
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>Transaction History</Typography>
        <List>
          {farmerHistory.map(h => (
            <ListItem key={h.id} sx={{ bgcolor: '#f4f7f6', borderRadius: 1, mb: 1 }}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                {h.type === 'deposit' ? <AddBoxIcon /> : <ShoppingCartIcon />}
              </ListItemIcon>
              <ListItemText
                primary={`${h.type === 'deposit' ? 'Deposited' : 'Redeemed'} ${h.quantity} Avocadoes`}
                secondary={`Warehouse: ${warehouses.find(w => w.id === h.warehouseId)?.name}, Date: ${new Date(h.date).toLocaleDateString()}`}
              />
            </ListItem>
          ))}
        </List>
      </Container>
    );
  }

  // Profile page render function
  function ProfilePage() {
    return (
      <Container maxWidth="sm" sx={{ py: 6 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>My Profile</Typography>
        <Card sx={{ p: 3 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>Username: {currentFarmer?.username}</Typography>
          <Typography variant="body1" color="text.secondary">Location: {currentFarmer?.location}</Typography>
          <Typography variant="body1" color="text.secondary">Mobile: {currentFarmer?.mobile}</Typography>
          <Typography variant="body1" color="text.secondary">Farm: {currentFarmer?.farm}</Typography>
          <Button variant="outlined" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleLogout}>
            Logout
          </Button>
        </Card>
      </Container>
    );
  }

  // Login page render function
  function LoginPage() {
    return (
      <Container maxWidth="sm" sx={{ py: 6 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>Login</Typography>
        <Card sx={{ p: 3 }}>
          <form onSubmit={handleLogin}>
            <TextField
              label="Username"
              fullWidth
              margin="normal"
              name="username"
              value={authFields.username}
              onChange={handleAuthChange}
              error={!!authError}
              helperText={authError}
            />
            <TextField
              label="Password"
              fullWidth
              margin="normal"
              type="password"
              name="password"
              value={authFields.password}
              onChange={handleAuthChange}
              error={!!authError}
              helperText={authError}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Login
            </Button>
            <Button variant="outlined" color="primary" fullWidth sx={{ mt: 2 }} onClick={() => { setDemoPage(100); }}>
              Register
            </Button>
          </form>
        </Card>
      </Container>
    );
  }

  // Register page render function
  function RegisterPage() {
    return (
      <Container maxWidth="sm" sx={{ py: 6 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>Register</Typography>
        <Card sx={{ p: 3 }}>
          <form onSubmit={handleRegister}>
            <TextField
              label="Username"
              fullWidth
              margin="normal"
              name="username"
              value={authFields.username}
              onChange={handleAuthChange}
              error={!!authError}
              helperText={authError}
            />
            <TextField
              label="Password"
              fullWidth
              margin="normal"
              type="password"
              name="password"
              value={authFields.password}
              onChange={handleAuthChange}
              error={!!authError}
              helperText={authError}
            />
            <TextField
              label="Location"
              fullWidth
              margin="normal"
              name="location"
              value={authFields.location}
              onChange={handleAuthChange}
              error={!!authError}
              helperText={authError}
            />
            <TextField
              label="Mobile"
              fullWidth
              margin="normal"
              name="mobile"
              value={authFields.mobile}
              onChange={handleAuthChange}
              error={!!authError}
              helperText={authError}
            />
            <TextField
              label="Farm"
              fullWidth
              margin="normal"
              name="farm"
              value={authFields.farm}
              onChange={handleAuthChange}
              error={!!authError}
              helperText={authError}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Register
            </Button>
            <Button variant="outlined" color="primary" fullWidth sx={{ mt: 2 }} onClick={() => { setDemoPage(100); }}>
              Login
            </Button>
          </form>
        </Card>
      </Container>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar loggedIn={!!currentFarmer} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={renderAboutPage()} />
          <Route path="/dashboard" element={currentFarmer ? <DashboardPage /> : <Navigate to="/login" />} />
          <Route path="/deposit" element={currentFarmer ? <DepositPage /> : <Navigate to="/login" />} />
          <Route path="/tokens" element={currentFarmer ? <TokensPage /> : <Navigate to="/login" />} />
          <Route path="/history" element={currentFarmer ? <HistoryPage /> : <Navigate to="/login" />} />
          <Route path="/profile" element={currentFarmer ? <ProfilePage /> : <Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        {/* Footer */}
        <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 3, textAlign: 'center', mt: 'auto' }}>
          <Typography variant="body2">&copy; {new Date().getFullYear()} Warehouse Receipt System (WRS) Kenya. All rights reserved.</Typography>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App; 