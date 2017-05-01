import React from 'react';
import './NotFoundPage.css';
import Layout from "../components/Layout";
import Page from "./Page";

import {BG_WHITE} from '../constants';

class NotFoundPage extends Page {
  render() {
    return <Layout
      particles={true}
      particlesProps={
        {
          color: '#000',
          colorLines: '#000',
          speedMove: 3,
          shape: 'polygon',
        }
      }
      bg={BG_WHITE}>
      {this.props.children}
    </Layout>
  }
}

export default NotFoundPage;