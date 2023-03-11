import { Detail, Home, NotFoundPage, Project, Timeline } from '_/components/pages';
import DefaultLayout from '_/layouts/DefaultLayout/DefaultLayout';

const routes = {
    home: '/',
    detail: '/detail',
    timeline: '/timeline',
    project: '/project',
    notfoundpage: '*',
};

const PublicRoutes = [
    { path: routes.home, comp: Home },
    { path: routes.detail, comp: Detail },
    { path: routes.notfoundpage, comp: NotFoundPage },
    { path: routes.timeline, comp: Timeline, layout: DefaultLayout },
    { path: routes.project, comp: Project, layout: DefaultLayout },
];

const PrivateRoutes = [];

export { PrivateRoutes, PublicRoutes, routes };
