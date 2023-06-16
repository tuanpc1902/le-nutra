import { Fragment } from 'react';
import { HeaderOnlyProps } from '~/app/layout/header-only/header-only.props.ts';
import HeaderComponent from '~/app/layout/components/header/header-component.tsx';

const HeaderOnlyComponent = ({ children }: HeaderOnlyProps) => {
    return (
        <Fragment>
            <HeaderComponent />
            <div className={`container`}>
                <div className={`content`}>{children}</div>
            </div>
        </Fragment>
    );
};

export default HeaderOnlyComponent;
