import { finalize, tap } from 'rxjs';
import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor(private notificationSrv: NotificationService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const started = Date.now();
    let ok: string;

    // extend server response observable with logging
    return next.handle(req).pipe(
      tap({
        // Succeeds when there is a response; ignore other events
        next: (event) =>
          (ok = event instanceof HttpResponse ? 'succeeded' : ''),
        // Operation failed; error is an HttpErrorResponse
        error: (_error) => (ok = 'failed'),
      }),
      // Log when response observable either completes or errors
      finalize(() => {
        const elapsed = Date.now() - started;
        const msg = `${req.method} "${req.urlWithParams}"
             ${ok} in ${elapsed} ms.`;
        this.notificationSrv.createNotification('success', msg, '');
      })
    );
  }
}
