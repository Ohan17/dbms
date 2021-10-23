import React from "react";

import UserInfo from "../../../../components/UserInfo/UserInfo";
import AddressBook from "../../../../components/User/AddressBook/AddressBook";
import Order from "../../../../components/User/Order/Order";
const UserDialog = (props) => {
  return (
    <React.Fragment>
      {props.menuView === 1 ? (
        <UserInfo />
      ) : props.menuView === 2 ? (
        <Order />
      ) : (
        <AddressBook />
      )}
    </React.Fragment>
  );
};

export default UserDialog;
