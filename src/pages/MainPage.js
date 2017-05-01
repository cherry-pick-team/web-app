import React from 'react';
import './MainPage.css';
import Layout from "../components/Layout";
import Page from "./Page";

import {BG_GRADIENT} from '../constants';
import Logo from "../components/Logo";
import LogoParagraph from "../components/LogoParagraph";
import SearchForm from "../components/SearchForm";
import PopularSearchBlock from "../components/PopularSearchBlock";

class MainPage extends Page {
  render() {
    return <Layout
      particles={true}
      bg={BG_GRADIENT}>
      <div className="main-page__logo">
        <Logo/>
        <LogoParagraph/>
        <SearchForm />
        <PopularSearchBlock queries={['what is love', 'бэйби донт хёрт ми', 'hurts', 'me']}/>
      </div>
    </Layout>
  }
}

export default MainPage;