import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../../components/counter/Counter'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import App from '../../app'

describe('Testing Counter', () => {
  it('is alive at application start', function() {
    let app = shallow(<Counter />);
    expect(app.find('h4').exists()).toBeTruthy();
  });
});
// it('should change state on click', () => {
//   let app = mount(<Counter />);
//   let button = app.find('button');
//   button.simulate('click');
//   expect(app.state('counter')).toBe(0);
//   expect(app.find('section').text()).toContain('')
//
//
// });

it('should render correctly', () => {
  const tree = renderer.create(<Counter />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should increment the count', () => {
  let app = shallow(<Counter />);
  let incrementButton = app.find('.incrementButton');
  incrementButton.simulate('click');
  let text = app.find("h4").text();
  expect(text).toEqual('1');
});
it('should decrement the count', () => {
  let app = shallow(<Counter />);
  let decrementButton = app.find('.decrementButton');
  decrementButton.simulate('click')
  let text = app.find('h4').text();
  expect(text).toEqual('0');
});

describe('Testing Footer ', () => {
  it('should should render correctly', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});


describe('Testing Header ', () => {
  it('should should render correctly', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();

  });

});
describe('Testing App ', () => {
  it('should should render correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();

  });

});

