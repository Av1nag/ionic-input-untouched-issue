import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { IonicRouteStrategy } from '@ionic/angular/standalone';
import { TranslateService } from '@ngx-translate/core';
import { IonicModule, Platform } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
})
export class AppComponent {
  loading = false;

  @ViewChild('loadingCanvas', { static: false })
  loadingCanvas!: ElementRef<HTMLCanvasElement>;
  private translate = inject(TranslateService);
  private platform = inject(Platform);

  constructor() {
    this.translate.setFallbackLang('en');
    this.translate.use('en');
    this.platform.ready().then(() => {
      const isDesktop = this.platform.is('desktop');
      document.body.classList.add(isDesktop ? 'is-desktop' : 'is-mobile');
    });
  }
}
