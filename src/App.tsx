import './App.scss';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import Home from './views/Home/home';
import HeaderCom from './components/header';
const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <div className="App">
      <Layout>
      <Header>
        <HeaderCom></HeaderCom>
      </Header>
      <Layout>
        <Sider className="left-slide">Sider</Sider>
        <Content>
          <Router>
            <Redirect from="/" to="/home" />
            <Route path="/home" component={Home}></Route>
          </Router>
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
    </div>
  );
};

export default App;
