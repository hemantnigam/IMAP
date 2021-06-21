import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import Dashboard from "./dashboard";
import Invoices from "./invoices";
import "./styles.scss";
import Analytics from "./analytics";
import { actions } from "../action";
import { useDispatch } from "react-redux";

function Pages() {
  const [sidebarMenuCollapsed, setsidebarMenuCollapsed] = useState(false);
  const { Content } = Layout;
  const dispatch = useDispatch();
  const toggleSidebar = () => {
    setsidebarMenuCollapsed((prev) => {
      dispatch(actions.setSideBarStatus(!prev));
      return !prev;
    });
  };
  return (
    <Router>
      <Layout>
        <Sidebar trigger={null} collapsible collapsed={sidebarMenuCollapsed} />
        <Layout className="site-layout">
          <Header
            onClick={toggleSidebar}
            sidebarMenuCollapsed={sidebarMenuCollapsed}
          />
          <Content className="site-layout-background">
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route path="/analytics">
                <Analytics />
              </Route>
              {/* <Route path="/analytics/pricing">
                <Pricing/>
              </Route> */}
              <Route path="/invoices">
                <Invoices />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default Pages;
