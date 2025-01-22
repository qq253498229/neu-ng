import { Component, isDevMode, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RouterLink, RouterOutlet } from '@angular/router';
import { app, events, os } from '@neutralinojs/lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SharedModule, NzMenuModule, RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isCollapsed = false;

  ngOnInit(): void {
    os.setTray({
      icon: isDevMode() ? '/angular-src/public/logo_tray.png' : '/angular-src/dist/myapp/browser/logo_tray.png',
      menuItems: [
        {id: 'exitApp', text: '关闭应用'},
      ],
    }).then();
    events.on('trayMenuItemClicked', ev => {
      if ('exitApp' === ev.detail.id) {
        app.exit().then();
      }
    }).then();
  }
}
