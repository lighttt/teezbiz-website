export const NOT_FOUND_SCREEN = '/404';

// Protected Routes
export const HOME_SCREEN = '/';

export const mainRoutes = [HOME_SCREEN];

// Route Labels
export const routeLabels = {
    [HOME_SCREEN]: 'TeezBiz',
    [NOT_FOUND_SCREEN]: 'Page Not Found',
};

export type RouteLabelsType = keyof typeof routeLabels;
