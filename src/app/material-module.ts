import { NgModule } from '@angular/core';

import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule ({
  exports: [
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatListModule,
    MatButtonModule,
  ]
})
export class MaterialModule { }
