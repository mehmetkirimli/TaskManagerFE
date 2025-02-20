import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token'); // LocalStorage'dan token al

  if (token) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`, // Token'ı Header'a ekle
      },
    });
    return next(cloned);
  }

  return next(req);
};
