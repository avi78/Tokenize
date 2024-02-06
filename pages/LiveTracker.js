import React, { useEffect, useState } from "react";
import { Footer, Header } from "../components/index";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  makeStyles,
} from "@material-ui/core";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    background: theme.palette.background.paper,
    borderRadius: 15,
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  },
  tableHeadCell: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontWeight: "bold",
  },
  tableBodyCell: {
    color: theme.palette.text.primary,
  },
  loadingCell: {
    textAlign: "center",
  },
}));

const LiveTracker = () => {
  const classes = useStyles();
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLiveCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
        );

        setCoins(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching live cryptocurrency data:", error);
      }
    };

    fetchLiveCoins();
  }, []);

  return (
    <div className="bg-[#1A1A1A]">
      <Header />
      <div className="p-4 text-white bg-gray-900">
        <h1><strong>Live Cryptocurrency Tracker</strong></h1>
      </div>

      {/* Main Content */}
      <Container>
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table aria-label="simple table" size="small">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableHeadCell}>Coin</TableCell>
                <TableCell className={classes.tableHeadCell}>Price</TableCell>
                <TableCell className={classes.tableHeadCell}>24h Change</TableCell>
                <TableCell className={classes.tableHeadCell}>Market Cap</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={4} className={classes.loadingCell}>
                    <CircularProgress />
                  </TableCell>
                </TableRow>
              ) : (
                coins.map((coin) => (
                  <TableRow key={coin.id}>
                    <TableCell className={classes.tableBodyCell}>{coin.name}</TableCell>
                    <TableCell className={classes.tableBodyCell}>
                      <AttachMoneyIcon fontSize="large" /> {coin.current_price}
                    </TableCell>
                    <TableCell className={classes.tableBodyCell}>
                      {coin.price_change_percentage_24h > 0 ? (
                        <TrendingUpIcon style={{ color: "green" }} fontSize="large" />
                      ) : (
                        <TrendingDownIcon style={{ color: "red" }} fontSize="large" />
                      )}
                      {coin.price_change_percentage_24h}%
                    </TableCell>
                    <TableCell className={classes.tableBodyCell}>
                      <AttachMoneyIcon fontSize="large" /> {coin.market_cap}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <Footer />
    </div>
  );
};

export default LiveTracker;
