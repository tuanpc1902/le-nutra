import { Fragment } from 'react';
import { Route, Routes } from 'react-router';
import { DefaultLayoutComponent } from '~/app/layout';
import { RoutesConstant } from '~/app/constant/routes.constant.ts';

const Router = () => {
    const onSelectLayout = (route: { path: string; component: any; layout: any }): { Layout: any; Element: any } => {
        const Layout = route.layout ? route.layout : route.layout === null ? Fragment : DefaultLayoutComponent;
        const Element = route.component;
        return { Layout: Layout, Element: Element };
    };

    const renderRoute = () => {
        return (
            <Fragment>
                {RoutesConstant.publicRoutes.map((route: any, index) => {
                    const Layout = onSelectLayout(route);
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout.Layout>
                                    <Layout.Element />
                                </Layout.Layout>
                            }
                        />
                    );
                })}
            </Fragment>
        );
    };

    const renderLayout = () => {
        return <Routes>{renderRoute()}</Routes>;
    };

    return <Fragment>{renderLayout()}</Fragment>;
};

export default Router;
