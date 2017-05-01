import {Component} from 'react';
import './Page.css';

class Page extends Component {
  render() {
    return this.props.children;
  }
}

export default Page;