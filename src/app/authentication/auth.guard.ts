import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = new Router();
  const access_token = localStorage.getItem('app-authtoken');
  console.log(access_token);
  if (access_token) {
    return true;
  } else {
    router.navigate(['/sign-in']);
    return false;
  }
};
