import React from 'react';
import { Link } from 'react-router';
import FullPageLayout from '../../components/FullPageLayout/FullPageLayout';
import HeadMenu from '../../components/HeadMenu/HeadMenu';
import SearchForm from '../../components/SearchForm/SearchForm';
import SearchTrendsShort from '../../components/SearchTrendsShort/SearchTrendsShort';

const Index = (props) => (
    <FullPageLayout>
        <HeadMenu/>
        <SearchForm/>
        <SearchTrendsShort/>
    </FullPageLayout>
);

export default Index;