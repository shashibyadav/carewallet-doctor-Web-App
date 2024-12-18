import pages from '../config/pages.json';

export const requiresAuth = (currentRoute) => {
  const page = Object.values(pages).find((page) => page.path === currentRoute);
  return page?.requiresAuth || false;
};
