import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer'
import App, { Search, Button, Table } from './App';

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<App />, div);
    ReactDom.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <App />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});

describe('Search', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<Search>Search</Search>, div);
    ReactDom.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Search>Search</Search>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<Button>Give Me More</Button>, div);
    ReactDom.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Button>Give Me More</Button>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Table', () => {

  const props = {
    list: [
      { title: '1', author: '1', num_comments: 1, points: 2, objectID: 'y' },
      { title: '2', author: '2', num_comments: 1, points: 2, objectID: 'z' }
    ],
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<Table { ...props } />, div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Table { ...props } />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
