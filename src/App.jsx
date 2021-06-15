import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './containers/NavBar/NavBar';
import styles from './App.module.css';
import HomePage from './containers/pages/HomePage/HomePage';
import './global-styles.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className={styles.wrapper}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            {/* <Route path="/components" component={ComponentsPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/project" component={ProjectPage} />
          <Route path="/experience" component={ExperiencePage} />
          <Route path="" component={NotFoundPage} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
