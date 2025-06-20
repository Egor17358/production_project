import { ComponentRender } from '@/shared/lib/tests/componentRender/componentRender';
import AppRouter from './AppRouter';
import { getRouteAbout } from '@/shared/const/router';

describe('/app/router/AppRouter', function () {
  test('Страница должна отрендериться', () => {
    ComponentRender(<AppRouter />, {
      route: getRouteAbout(),
    });
  });
});
