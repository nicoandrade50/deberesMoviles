import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Refine, notificationProvider, Layout, ErrorComponent } from "@refinedev/antd";
import { dataProvider } from "@refinedev/simple-rest";
import { EmployeeList, EmployeeCreate, EmployeeEdit, EmployeeShow } from "./components/employee";
import { CustomerList, CustomerCreate, CustomerEdit, CustomerShow } from "./components/customer";
import "antd/dist/antd.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Refine
        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
        notificationProvider={notificationProvider}
        Layout={Layout}
        catchAll={<ErrorComponent />}
        resources={[
          {
            name: "employees",
            list: EmployeeList,
            create: EmployeeCreate,
            edit: EmployeeEdit,
            show: EmployeeShow,
          },
          {
            name: "customers",
            list: CustomerList,
            create: CustomerCreate,
            edit: CustomerEdit,
            show: CustomerShow,
          },
        ]}
        Title={() => <div>My App</div>}
      >
        <Routes>
          <Route path="/employees">
            <Route index element={<EmployeeList />} />
            <Route path="create" element={<EmployeeCreate />} />
            <Route path="edit/:id" element={<EmployeeEdit />} />
            <Route path="show/:id" element={<EmployeeShow />} />
          </Route>
          <Route path="/customers">
            <Route index element={<CustomerList />} />
            <Route path="create" element={<CustomerCreate />} />
            <Route path="edit/:id" element={<CustomerEdit />} />
            <Route path="show/:id" element={<CustomerShow />} />
          </Route>
        </Routes>
      </Refine>
    </BrowserRouter>
  );
};

export default App;
