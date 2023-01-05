import ShoppingBag from "@mui/icons-material/ShoppingBag";
import UserDashboardHeader from "components/header/UserDashboardHeader";
import CustomerDashboardLayout from "components/layouts/customer-dashboard";
import CustomerDashboardNavigation from "components/layouts/customer-dashboard/Navigations";
import OrderList from "pages-sections/orders/OrderList";

const Orders = () => {
  return (
    <CustomerDashboardLayout>
      <UserDashboardHeader
        title="Mes Commandes"
        icon={ShoppingBag}
        navigation={<CustomerDashboardNavigation />}
      />

      <OrderList />
    </CustomerDashboardLayout>
  );
};

export default Orders;
