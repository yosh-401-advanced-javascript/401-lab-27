import React from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Counter from './components/counter/Counter'

import './app.scss';


class App extends React.Component {
  render() {
    return (
        <React.Fragment>
          <Header />
          <Counter />
          <Footer />
        </React.Fragment>
    );
  }
}

export default App;
