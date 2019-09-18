import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../../components/counter/counter';
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'

describe('Testing Counter', () => {
  it('is alive at application start', function() {
    let app = shallow(<Counter />);
    expect(app.find('span').exists()).toBeTruthy();
  });
});
it('should change state on click', () => {
  let app = mount(<Counter />);
  let button = app.find('span');
  button.simulate('click');
  expect(app.state('count')).toBe(0);
  expect(app.find('section').text()).toContain('-0+')


});

it('should render correctly', () => {
  const tree = renderer.create(<Counter />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should increment the count', () => {
  let app = shallow(<Counter />);
  let incrementButton = app.find('.up');
  incrementButton.simulate('click');
  let text = app.find("span").text();
  expect(text).toEqual('1');
});
it('should decrement the count', () => {
  let app = shallow(<Counter />);
  let incrementButton = app.find('.down');
  incrementButton.simulate('click');
  let text = app.find("span").text();
  expect(text).toEqual('-1');
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
