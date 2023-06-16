import HomeComponent from '~/app/pages/home/home-component';
import ProfileComponent from '~/app/pages/profile/profile-component';
import UploadComponent from '~/app/pages/upload/upload-component';
import SearchComponent from '~/app/pages/search/search-component';
import SettingsComponent from '~/app/pages/settings/settings-component';
import { HeaderOnlyComponent } from '~/app/layout';

export const RoutesConstant = Object.freeze({
    // public routes
    publicRoutes: [
        { path: '/', component: HomeComponent },
        { path: '/profile', component: ProfileComponent },
        { path: '/upload', component: UploadComponent, layout: HeaderOnlyComponent },
        { path: '/search', component: SearchComponent, layout: null },
        { path: '/settings', component: SettingsComponent, layout: HeaderOnlyComponent },
    ],
    // private routes
    privateRoutes: [],
});
