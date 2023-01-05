import East from "@mui/icons-material/East";
import { Box, Chip, IconButton, Typography } from "@mui/material";
import TableRow from "components/TableRow";
import { H5 } from "components/Typography";
import { format } from "date-fns";
import Link from "next/link";
import { FC } from "react";
import { ordersType } from "redux/getordersSlice";

// =================================================
type OrderRowProps = {
  item: ordersType 

};
// =================================================

const OrderRow: FC<OrderRowProps> = ({ item }) => {
  const getColor = (status: String) => {
    switch (status) {
      case "Awaiting":
        return "secondary";

      case "Processed":
        return "secondary";

      case "Delivered":
        return "success";

      case "Cancelled":
        return "error";

      default:
        return "secondary";
    }
  };

  return (
    
    <Link href={`/orders/${item.id}`}>
      <a>
        <TableRow sx={{ my: "1rem", padding: "6px 18px" }}>
          <H5 m={0.75} textAlign="left">
            {item.id}
          </H5>
          <Box m={0.75}>
            <Chip
              size="small"
              label={item.order_items[0].active_status}
              sx={{
                p: "0.25rem 0.5rem",
                fontSize: 12,
                color: !!getColor(item.order_items[0].active_status)
                  ? `${getColor(item.order_items[0].active_status)}.900`
                  : "inherit",
                backgroundColor: !!getColor(item.order_items[0].active_status)
                  ? `${getColor(item.order_items[0].active_status)}.100`
                  : "none",
              }}
            />
          </Box>
          <Typography className="pre" m={0.75} textAlign="left">
            {/* {format(new Date(item.date_added), "MMM dd, yyyy")} */}
            {item.date_added}
          </Typography>

          <Typography m={0.75} textAlign="left">
            DT {item.total_payable}
          </Typography>

          <Typography
            color="grey.600"
            textAlign="center"
            sx={{
              flex: "0 0 0 !important",
              display: { xs: "none", md: "block" },
            }}
          >
            <IconButton>
              <East
                fontSize="small"
                color="inherit"
                sx={{
                  transform: ({ direction }) =>
                    `rotate(${direction === "rtl" ? "180deg" : "0deg"})`,
                }}
              />
            </IconButton>
          </Typography>
        </TableRow>
      </a>
    </Link>
  );
};

export default OrderRow;
