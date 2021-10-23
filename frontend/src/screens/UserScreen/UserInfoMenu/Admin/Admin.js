import React from "react";
import UserInfo from "../../../../components/UserInfo/UserInfo";
import ProductsList from "../../../../components/Admin/ProductsList/ProductsList";
import UserList from "../../../../components/Admin/UserList/UserList";
import Supplier from "../../../../components/Admin/Supplier/Supplier";
const UserDialog = (props) => {
  return (
    <React.Fragment>
      {props.menuView === 1 ? (
        <UserInfo />
      ) : props.menuView === 2 ? (
        <UserList />
      ) : props.menuView === 3 ? (
        <ProductsList />
      ) : (
        < Supplier/>
      )}
    </React.Fragment>
  );
};

export default UserDialog;
