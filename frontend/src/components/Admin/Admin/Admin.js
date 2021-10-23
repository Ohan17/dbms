import React from "react";
import UserInfo from "../../";
import ProductsList from "../../../../components/ProductsList/ProductsList";
import UserList from "../UserList/UserList";
import Supplier from "../Supplier/Supplier";
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
