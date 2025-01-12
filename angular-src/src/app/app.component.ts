import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RouterLink, RouterOutlet } from '@angular/router';
import { app } from '@neutralinojs/lib';

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
    app.getConfig().then(r => {
      console.log('getConfig r', r);
    }).catch(e => {
      console.log('getConfig e', e);
    });
  }
}
