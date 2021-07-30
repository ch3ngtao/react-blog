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
      <Layout className="main-contain">
        <Content>
          <Router>
            <Redirect from="/" to="/home" />
            <Route path="/home" component={Home}></Route>
          </Router>
        </Content>
        <Sider>Sider</Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
    </div>
  );
};

export default App;
