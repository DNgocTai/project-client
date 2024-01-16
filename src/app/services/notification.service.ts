import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private notification: NzNotificationService) {}

  createNotification(title: string, content: string, options: string = '') {
    return this.notification.create(title, content, options);
  }
}
