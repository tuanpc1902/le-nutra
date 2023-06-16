import { HomeComponentProps } from '~/app/pages/home/home-component.props';
import { Fragment } from 'react';
import { withTranslation } from 'react-i18next';

const HomeComponent = (props: HomeComponentProps) => {
    return <Fragment>Home Page</Fragment>;
};

export default withTranslation()(HomeComponent);
