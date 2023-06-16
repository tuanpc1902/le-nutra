import { ProfileComponentProps } from '~/app/pages/profile/profile-component.props';
import { Fragment } from 'react';
import { withTranslation } from 'react-i18next';

const ProfileComponent = (props: ProfileComponentProps) => {
    return <Fragment>profile</Fragment>;
};

export default withTranslation()(ProfileComponent);
