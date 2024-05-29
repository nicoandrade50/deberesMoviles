import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Refine } from "@pankod/refine-core";
import { notificationProvider, Layout, ReadyPage, ErrorComponent } from "@pankod/refine-antd";
import { dataProvider } from "@pankod/refine-simple-rest";

import "antd/dist/antd.css";

import Employees from "./pages/employee/Employees";
import Customers from "./pages/customer/Customers";

ReactDOM.render(
    <BrowserRouter>
        <Refine
            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
            notificationProvider={notificationProvider}
            Layout={Layout}
            ReadyPage={ReadyPage}
            catchAll={<ErrorComponent />}
            resources={[
                {
                    name: "users",
                    list: Employees,
                },
                {
                    name: "customers",
                    list: Customers,
                },
            ]}
        >
            <Routes>
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />
            </Routes>
        </Refine>
    </BrowserRouter>,
    document.getElementById("root")
);
