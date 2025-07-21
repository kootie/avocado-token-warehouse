import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, CssBaseline, Box, Button, TextField, Select, MenuItem, Card, CardContent, CardActions, Grid, Chip, Container, Divider, ThemeProvider, createTheme, Avatar, Tooltip, Snackbar, Alert, useMediaQuery, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddBoxIcon from '@mui/icons-material/AddBox';
import TokenIcon from '@mui/icons-material/Token';
import HistoryIcon from '@mui/icons-material/History';
import MenuIcon from '@mui/icons-material/Menu';
import { v4 as uuidv4 } from 'uuid';
import logo from './logo.svg';

const drawerWidth = 220;

const pages = [
  { label: 'Home', icon: <DashboardIcon /> },
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
    background: { default: '#f9fbe7' },
  },
  typography: {
    fontFamily: 'Roboto, Arial',
  },
});

function App() {
  const [selectedPage, setSelectedPage] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');
  const [demoPage, setDemoPage] = useState(0);
  const [demoAuthMode, setDemoAuthMode] = useState('login'); // 'login' or 'register'

  // Mock warehouses
  const warehouses = [
    { id: 'w1', name: 'Nairobi Central Warehouse' },
    { id: 'w2', name: 'Eldoret Avocado Hub' },
    { id: 'w3', name: 'Mombasa Storage Facility' },
  ];

  // State for deposits, tokens, and history
  const [deposits, setDeposits] = useState([]); // {id, quantity, warehouseId, date}
  const [tokens, setTokens] = useState([]); // {id, quantity, warehouseId, date, redeemed}
  const [history, setHistory] = useState([]); // {id, type, quantity, warehouseId, date, tokenId}

  // Deposit form state
  const [depositQty, setDepositQty] = useState('');
  const [depositWarehouse, setDepositWarehouse] = useState(warehouses[0].id);
  const [depositError, setDepositError] = useState('');

  // Auth state
  const [farmers, setFarmers] = useState([]); // {username, password, location, mobile, farm}
  const [currentFarmer, setCurrentFarmer] = useState(null); // {username, ...}
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'register'
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
  };
  const handleLogout = () => {
    setConfirmDialog({ open: true, action: 'logout' });
  };
  const confirmLogout = () => {
    setCurrentFarmer(null);
    setSelectedPage(0);
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

  const renderPage = () => {
    switch (selectedPage) {
      case 0:
        return (
          <Box>
            <Typography variant="h4" gutterBottom>Dashboard (Avocadoes)</Typography>
            <Typography variant="body1">Total Deposited: <b>{farmerDeposits.reduce((sum, d) => sum + d.quantity, 0)}</b> kg</Typography>
            <Typography variant="body1">Active Tokens: <b>{farmerTokens.filter(t => !t.redeemed).length}</b></Typography>
          </Box>
        );
      case 1:
        return (
          <Box maxWidth={400}>
            <Typography variant="h4" gutterBottom>Deposit Avocadoes</Typography>
            <form onSubmit={handleDeposit}>
              <TextField
                label="Quantity (kg)"
                type="number"
                value={depositQty}
                onChange={e => setDepositQty(e.target.value)}
                fullWidth
                margin="normal"
                required
              />
              <Select
                label="Warehouse"
                value={depositWarehouse}
                onChange={e => setDepositWarehouse(e.target.value)}
                fullWidth
                margin="normal"
              >
                {warehouses.map(w => (
                  <MenuItem key={w.id} value={w.id}>{w.name}</MenuItem>
                ))}
              </Select>
              {depositError && <Typography color="error">{depositError}</Typography>}
              <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Deposit</Button>
            </form>
          </Box>
        );
      case 2:
        return (
          <Box>
            <Typography variant="h4" gutterBottom>My Tokens</Typography>
            <Grid container spacing={2}>
              {farmerTokens.length === 0 && <Typography>No tokens yet. Deposit avocadoes to receive tokens.</Typography>}
              {farmerTokens.map(token => (
                <Grid item xs={12} sm={6} md={4} key={token.id}>
                  <Card sx={{ background: 'linear-gradient(135deg, #a8e063 0%, #56ab2f 100%)', color: '#fff', minHeight: 180 }}>
                    <CardContent>
                      <Typography variant="h6">Avocado Token</Typography>
                      <Typography variant="body2">Token ID: {token.id.slice(0, 8)}...</Typography>
                      <Typography variant="body1">Quantity: <b>{token.quantity} kg</b></Typography>
                      <Typography variant="body2">Warehouse: {warehouses.find(w => w.id === token.warehouseId)?.name}</Typography>
                      <Typography variant="body2">Date: {new Date(token.date).toLocaleString()}</Typography>
                      <Chip label={token.redeemed ? 'Redeemed' : 'Active'} color={token.redeemed ? 'default' : 'success'} sx={{ mt: 1 }} />
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        color="secondary"
                        disabled={token.redeemed}
                        onClick={() => handleRedeem(token.id)}
                      >
                        Redeem
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        );
      case 3:
        return (
          <Box>
            <Typography variant="h4" gutterBottom>Transaction History</Typography>
            {farmerHistory.length === 0 && <Typography>No transactions yet.</Typography>}
            <List>
              {farmerHistory.map(h => (
                <ListItem key={h.id}>
                  <ListItemIcon>{h.type === 'deposit' ? <AddBoxIcon color="success" /> : <TokenIcon color="secondary" />}</ListItemIcon>
                  <ListItemText
                    primary={h.type === 'deposit' ? `Deposited ${h.quantity} kg at ${warehouses.find(w => w.id === h.warehouseId)?.name}` : `Redeemed token (${h.tokenId.slice(0, 8)}...)`}
                    secondary={new Date(h.date).toLocaleString()}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        );
      case 4:
        return (
          <Box maxWidth={400}>
            <Typography variant="h4" gutterBottom>Profile</Typography>
            <Typography variant="body1"><b>Username:</b> {currentFarmer.username}</Typography>
            <Typography variant="body1"><b>Location:</b> {currentFarmer.location}</Typography>
            <Typography variant="body1"><b>Mobile:</b> {currentFarmer.mobile}</Typography>
            <Typography variant="body1"><b>Farm:</b> {currentFarmer.farm}</Typography>
          </Box>
        );
      default:
        return null;
    }
  };

  // Auth UI
  if (!currentFarmer) {
    // Landing page for demo
    const renderDemoPage = () => {
      switch (demoPage) {
        case 0:
          return (
            <Box textAlign="center" mt={4}>
              <img src={logo} alt="WRS Logo" style={{ width: 80, height: 80, marginBottom: 16 }} />
              <Typography variant="h4" color="primary" gutterBottom>Welcome to the Warehouse Receipt System (WRS) Demo</Typography>
              <Typography variant="body1" mb={2}>
                The Warehouse Receipt System (WRS) enables farmers, traders, and market players in Kenya to securely store their agricultural produce in certified warehouses and receive digital tokens (warehouse receipts) as proof of ownership. These tokens can be used as collateral for loans or traded as negotiable instruments, helping stabilize markets, improve post-harvest management, and enhance access to credit. Register or log in to experience how WRS empowers you to manage your avocado stocks and receipts easily.
              </Typography>
              <Grid container spacing={2} justifyContent="center" mb={2}>
                <Grid item><Button variant="contained" color="primary" onClick={() => { setDemoAuthMode('login'); setDemoPage(100); }}>Login</Button></Grid>
                <Grid item><Button variant="outlined" color="primary" onClick={() => { setDemoAuthMode('register'); setDemoPage(100); }}>Register</Button></Grid>
              </Grid>
              <Divider sx={{ my: 3 }} />
              <Typography variant="body2" color="textSecondary" mb={2}>Or preview all screens below:</Typography>
              <Grid container spacing={2} justifyContent="center">
                <Grid item><Button variant="contained" color="primary" onClick={() => setDemoPage(1)}>Dashboard</Button></Grid>
                <Grid item><Button variant="contained" color="primary" onClick={() => setDemoPage(2)}>Deposit Avocadoes</Button></Grid>
                <Grid item><Button variant="contained" color="primary" onClick={() => setDemoPage(3)}>My Tokens</Button></Grid>
                <Grid item><Button variant="contained" color="primary" onClick={() => setDemoPage(4)}>History</Button></Grid>
                <Grid item><Button variant="contained" color="primary" onClick={() => setDemoPage(5)}>Profile</Button></Grid>
              </Grid>
            </Box>
          );
        case 100: // Login/Register form
          return (
            <Box maxWidth={400} mx="auto">
              <Button onClick={() => setDemoPage(0)} sx={{ mb: 2 }}>Back to Home</Button>
              <Typography variant="h5" gutterBottom align="center" color="primary.main">{demoAuthMode === 'login' ? 'Farmer Login' : 'Register as Farmer'}</Typography>
              <form onSubmit={demoAuthMode === 'login' ? handleLogin : handleRegister}>
                <TextField label="Username" name="username" value={authFields.username} onChange={handleAuthChange} fullWidth margin="normal" required helperText="Choose a unique username" />
                <TextField label="Password" name="password" type="password" value={authFields.password} onChange={handleAuthChange} fullWidth margin="normal" required helperText="At least 6 characters" />
                {demoAuthMode === 'register' && (
                  <>
                    <TextField label="Location" name="location" value={authFields.location} onChange={handleAuthChange} fullWidth margin="normal" required helperText="e.g. Murang'a, Kiambu" />
                    <TextField label="Mobile Number" name="mobile" value={authFields.mobile} onChange={handleAuthChange} fullWidth margin="normal" required helperText="e.g. 0712xxxxxx" />
                    <TextField label="Farm Name" name="farm" value={authFields.farm} onChange={handleAuthChange} fullWidth margin="normal" required helperText="e.g. Green Valley Farm" />
                  </>
                )}
                {authError && <Typography color="error">{authError}</Typography>}
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>{demoAuthMode === 'login' ? 'Login' : 'Register'}</Button>
              </form>
              <Divider sx={{ my: 2 }} />
              <Button onClick={() => { setDemoAuthMode(demoAuthMode === 'login' ? 'register' : 'login'); setAuthError(''); }} fullWidth>
                {demoAuthMode === 'login' ? 'No account? Register' : 'Have an account? Login'}
              </Button>
            </Box>
          );
        case 1:
          return (
            <Box>
              <Button onClick={() => setDemoPage(0)} sx={{ mb: 2 }}>Back to Home</Button>
              <Typography variant="h4" gutterBottom>Dashboard (Demo)</Typography>
              <Typography variant="body1">Total Deposited: <b>0</b> kg</Typography>
              <Typography variant="body1">Active Tokens: <b>0</b></Typography>
            </Box>
          );
        case 2:
          return (
            <Box maxWidth={400}>
              <Button onClick={() => setDemoPage(0)} sx={{ mb: 2 }}>Back to Home</Button>
              <Typography variant="h4" gutterBottom>Deposit Avocadoes (Demo)</Typography>
              <TextField label="Quantity (kg)" type="number" fullWidth margin="normal" required disabled />
              <Select label="Warehouse" value={''} fullWidth margin="normal" disabled>
                <MenuItem value={''}>Select warehouse</MenuItem>
              </Select>
              <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} disabled>Deposit</Button>
            </Box>
          );
        case 3:
          return (
            <Box>
              <Button onClick={() => setDemoPage(0)} sx={{ mb: 2 }}>Back to Home</Button>
              <Typography variant="h4" gutterBottom>My Tokens (Demo)</Typography>
              <Typography>No tokens yet. Deposit avocadoes to receive tokens.</Typography>
            </Box>
          );
        case 4:
          return (
            <Box>
              <Button onClick={() => setDemoPage(0)} sx={{ mb: 2 }}>Back to Home</Button>
              <Typography variant="h4" gutterBottom>Transaction History (Demo)</Typography>
              <Typography>No transactions yet.</Typography>
            </Box>
          );
        case 5:
          return (
            <Box maxWidth={400}>
              <Button onClick={() => setDemoPage(0)} sx={{ mb: 2 }}>Back to Home</Button>
              <Typography variant="h4" gutterBottom>Profile (Demo)</Typography>
              <Typography variant="body1"><b>Username:</b> demo</Typography>
              <Typography variant="body1"><b>Location:</b> --</Typography>
              <Typography variant="body1"><b>Mobile:</b> --</Typography>
              <Typography variant="body1"><b>Farm:</b> --</Typography>
            </Box>
          );
        default:
          return null;
      }
    };
    return (
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm" sx={{ mt: 8 }}>
          <Card>
            <CardContent>
              {renderDemoPage()}
            </CardContent>
          </Card>
          <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={() => setSnackbar({ ...snackbar, open: false })}>
            <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity} sx={{ width: '100%' }}>
              {snackbar.message}
            </Alert>
          </Snackbar>
        </Container>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', minHeight: '100vh', background: theme.palette.background.default }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background: 'linear-gradient(90deg, #388e3c 60%, #8bc34a 100%)' }}>
          <Toolbar>
            <Box display="flex" alignItems="center" sx={{ mr: 2 }}>
              <img src={logo} alt="WRS Logo" style={{ width: 40, height: 40, marginRight: 8 }} />
              <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, fontWeight: 700, letterSpacing: 1 }}>
                WRS - Avocadoes
              </Typography>
            </Box>
            <Box flexGrow={1} />
            <Tooltip title={currentFarmer.farm + ' (' + currentFarmer.location + ')'}>
              <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>{currentFarmer.username[0]?.toUpperCase()}</Avatar>
            </Tooltip>
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          </Toolbar>
        </AppBar>
        <Drawer
          variant={isMobile ? 'temporary' : 'permanent'}
          open={!isMobile || mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', background: '#e8f5e9' },
            display: { xs: isMobile ? 'block' : 'none', sm: 'block' },
          }}
        >
          <Toolbar />
          <List>
            {pages.map((page, index) => (
              <Tooltip key={page.label} title={page.label} placement="right">
                <ListItem button selected={selectedPage === index} onClick={() => { setSelectedPage(index); setMobileOpen(false); }}>
                  <ListItemIcon>{page.icon}</ListItemIcon>
                  <ListItemText primary={page.label} />
                </ListItem>
              </Tooltip>
            ))}
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: isMobile ? 1 : 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, mt: 8 }}>
          <Toolbar />
          {renderPage()}
        </Box>
        {/* Confirm Dialog */}
        <Dialog open={confirmDialog.open} onClose={() => setConfirmDialog({ open: false, action: null, tokenId: null })}>
          <DialogTitle>{confirmDialog.action === 'logout' ? 'Confirm Logout' : 'Confirm Redeem'}</DialogTitle>
          <DialogContent>
            <Typography>
              {confirmDialog.action === 'logout' ? 'Are you sure you want to logout?' : 'Are you sure you want to redeem this token?'}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setConfirmDialog({ open: false, action: null, tokenId: null })}>Cancel</Button>
            <Button onClick={confirmDialog.action === 'logout' ? confirmLogout : confirmRedeem} color="primary" variant="contained">Confirm</Button>
          </DialogActions>
        </Dialog>
        {/* Snackbar */}
        <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={() => setSnackbar({ ...snackbar, open: false })}>
          <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity} sx={{ width: '100%' }}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
}

export default App;
