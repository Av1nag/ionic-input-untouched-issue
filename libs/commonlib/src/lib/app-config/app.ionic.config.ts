// src/app/app.ionic.config.ts
import { importProvidersFrom } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { provideZoneChangeDetection } from '@angular/core';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { addIcons } from 'ionicons';
import {
  alertCircleOutline,
  arrowBackCircle,
  arrowForwardOutline,
  homeOutline,
  logInOutline,
  personOutline,
  closeOutline,
  addOutline,
  ellipsisVertical,
  arrowBackOutline,
  mailOutline,
  callOutline,
  arrowForwardCircleSharp,
  ellipsisHorizontal,
} from 'ionicons/icons';

export const IONIC_PROVIDERS = [
  importProvidersFrom(IonicModule.forRoot()),
  provideIonicAngular({
    mode: 'md',
    animated: true,
  }),
  provideZoneChangeDetection({ eventCoalescing: true }),
  provideTranslateService({
    loader: provideTranslateHttpLoader({ prefix: './i18n/', suffix: '.json' }),
    fallbackLang: 'en',
    lang: 'en',
  }),
];
// Register only the icons you use
addIcons({
  //ionic iocns
  'arrow-back-circle': arrowBackCircle,
  'alert-circle-outline': alertCircleOutline,
  'arrow-forward-outline': arrowForwardOutline,
  'arrow-forward-circle-sharp': arrowForwardCircleSharp,
  'log-in-outline': logInOutline,
  'person-outline': personOutline,
  'home-outline': homeOutline,
  'close-outline': closeOutline,
  'add-outline': addOutline,
  'ellipsis-vertical': ellipsisVertical,
  'arrow-back-outline': arrowBackOutline,
  'mail-outline': mailOutline,
  'call-outline': callOutline,
  'ellipsis-horizontal': ellipsisHorizontal,

  // images
  'bgr-mobile': '/images/mobile.svg',
  'bgr-users': '/images/users.svg',
  'bgr-secure-storage': '/images/secure_storage.svg',
  'bgr-graph': '/images/graph.svg',
  'bgr-password-reset-locked': '/images/password_reset_locked.svg',
  'bgr-logout': '/images/logout.svg',
  'bgr-sidetab-collapse': '/images/side_tab_collapse.svg',
  'bgr-sidetab-expand': '/images/side_tab_expand.svg',
  'bgr-analytics': '/images/analytics.svg',
  'bgr-dataops': '/images/data_ops.svg',
  'bgr-mineops': '/images/mine_ops.svg',
  'bgr-truck': '/images/truck.svg',
  'bgr-driver': '/images/driver.svg',
  'bgr-excavator': '/images/excavator.svg',
  'bgr-location': '/images/location.svg',
  'bgr-supervisor': '/images/supervisor.svg',
  'bgr-add-circle': '/images/add-circle.svg',
  'bgr-edit': '/images/edit.svg',
  'bgr-copy': '/images/copy_icon.svg',
  'bgr-generate': '/images/generate_icon.svg',
  'bgr-back': '/images/arrow_back.svg',
  'bgr-resetpassword': '/images/resetpassword_icon.svg',
  'bgr-upload': '/images/upload.svg',
  'bgr-refresh': '/images/refresh.svg',
  'bgr-error': '/images/error.svg',
  'bgr-cancel': '/images/cancel.svg',
  'bgr-history': '/images/history.svg',
});
