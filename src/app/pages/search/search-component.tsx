import { Fragment } from 'react';
import { withTranslation } from 'react-i18next';
import { SearchComponentProps } from '~/app/pages/search/search-component.props';

const SearchComponent = (props: SearchComponentProps) => {
    return <Fragment>Search</Fragment>;
};

export default withTranslation()(SearchComponent);
