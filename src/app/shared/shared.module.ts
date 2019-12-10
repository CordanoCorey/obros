import { NgModule, ModuleWithProviders } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatInputModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { FormsModule, AccordionModule, DialogModule, PipesModule, WallpaperModule } from '@caiu/library';

import { ContainerComponent } from './container/container.component';
import { environment } from '../../environments/environment';
import { EmailComponent } from './email/email.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [ContainerComponent, EmailComponent, SidenavComponent],
  imports: [
    CommonModule,
    AccordionModule,
    WallpaperModule,
    DialogModule,
    DragDropModule,
    RouterModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,
    PipesModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    AccordionModule,
    ContainerComponent,
    DialogModule,
    DragDropModule,
    RouterModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,
    PipesModule,
    RouterModule,
    WallpaperModule,
    ContainerComponent,
    EmailComponent
  ],
  entryComponents: [EmailComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [{ provide: 'Environment', useValue: environment }]
    };
  }
}
