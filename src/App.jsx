import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './containers/NavBar/NavBar';
import styles from './App.module.css';
import HomePage from './containers/pages/HomePage/HomePage';
import AboutPage from './containers/pages/AboutPage/AboutPage';
import ComponentPage from './containers/pages/ComponentPage/ComponentPage';
import ProjectPage from './containers/pages/ProjectPage/ProjectPage';
import './assets/styles/colors.css';
import './global-styles.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className={styles.wrapper}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/component" component={ComponentPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/project" component={ProjectPage} />
          {/* <Route path="" component={NotFoundPage} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
