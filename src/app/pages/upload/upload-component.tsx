import { Fragment } from 'react';
import { withTranslation } from 'react-i18next';
import { UploadComponentProps } from '~/app/pages/upload/upload-component.props';

const UploadComponent = (props: UploadComponentProps) => {
    return <Fragment>upload</Fragment>;
};

export default withTranslation()(UploadComponent);
