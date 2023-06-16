import { SettingsComponentProps } from '~/app/pages/settings/settings-component.props';
import { withTranslation } from 'react-i18next';
import { TRANSLATION_NAMESPACES } from '~/app/constant/common.constant';
import styles from './settings-component.module.scss';
import UtilsCommon from '~/app/utils/utils-common';

const cx = UtilsCommon.cx(styles);

const SettingsComponent = (props: SettingsComponentProps) => {
    return (
        <div id={cx('main-content-setting')}>
            <div className={cx('container')}>
                <div className={cx('left-content')}>a</div>
                <div className={cx('right-content')}>a</div>
            </div>
        </div>
    );
};

export default withTranslation(TRANSLATION_NAMESPACES.SETTINGS_PAGE)(SettingsComponent);
