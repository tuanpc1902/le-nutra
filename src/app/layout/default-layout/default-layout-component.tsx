import styles from './dafault-layout.module.scss';
import UtilsCommon from '~/app/utils/utils-common';
import { DefaultLayoutProps } from '~/app/layout/default-layout/default-layout.props.ts';
import HeaderComponent from '~/app/layout/components/header/header-component.tsx';

const cx = UtilsCommon.cx(styles);
const DefaultLayoutComponent = ({ children }: DefaultLayoutProps) => {
    return (
        <>
            <HeaderComponent />
            <div className={cx('container')} style={{ margin: '0 auto' }}>
                {/*<SidebarComponent />*/}
                <div className={cx('content')} style={{ height: 1000, paddingTop: 60, margin: '0 auto' }}>
                    {children}
                </div>
            </div>
        </>
    );
};

export default DefaultLayoutComponent;
