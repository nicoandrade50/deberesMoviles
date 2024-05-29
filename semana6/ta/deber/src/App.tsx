import React from "react";
import { Refine } from "@refinedev/core";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { ThemedLayoutV2, ThemedSiderV2 } from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";
import routerBindings, { NavigateToResource } from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { App as AntdApp } from "antd";
import { Header } from "@refinedev/antd"; 
import { ColorModeContextProvider } from "./contexts/color-mode"; 
import { EmployeeList } from "./pages/employee/EmployeeList"; 
import { CustomerList } from "./pages/customer/CustomerList"; 

function App() {
  return (
    <BrowserRouter>
      <ColorModeContextProvider>
        <AntdApp>
          <Refine
            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
            routerProvider={routerBindings}
            resources={[
              {
                name: "employees",
                list: "/employees",
                meta: {
                  canDelete: true,
                },
              },
              {
                name: "customers",
                list: "/customers",
                meta: {
                  canDelete: true,
                },
              },
            ]}
            options={{
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
              useNewQueryKeys: true,
            }}
          >
            <Routes>
              <Route
                element={
                  <ThemedLayoutV2
                    Header={() => <Header />}
                    Sider={(props) => <ThemedSiderV2 {...props} />}
                  >
                    <Outlet />
                  </ThemedLayoutV2>
                }
              >
                <Route
                  index
                  element={<NavigateToResource resource="employees" />}
                />
                <Route path="/employees" element={<EmployeeList />} />
                <Route path="/customers" element={<CustomerList />} />
                <Route path="*" element={<div>404 Not Found</div>} />
              </Route>
            </Routes>
          </Refine>
        </AntdApp>
      </ColorModeContextProvider>
    </BrowserRouter>
  );
}

export default App;
