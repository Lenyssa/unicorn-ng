import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, LOCALE_ID, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UnicornsListPageComponent} from './pages/unicorns-list/unicorns-list.page';
import {UnicornCardComponent} from './pages/unicorns-list/unicorn-card/unicorn-card.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ResumeComponent} from './pages/unicorns-list/resume/resume.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavComponent} from './shared/components/nav/nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatBadgeModule, MatCardModule, MatProgressSpinnerModule, MatSnackBarModule} from '@angular/material';
import {HeaderComponent} from './shared/components/header/header.component';
import {AdminComponent} from './pages/admin/admin.component';
import {LoadingHttpInterceptor} from './shared/http-interceptors/loading.http-interceptor';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
    declarations: [
        AppComponent,
        UnicornsListPageComponent,
        UnicornCardComponent,
        ResumeComponent,
        NavComponent,
        HeaderComponent,
        AdminComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatBadgeModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: LoadingHttpInterceptor, multi: true},
        // multi est obligatoire lorsqu'on peut avoir plusieurs intercepteur en meme temps
        {provide: LOCALE_ID, useValue: 'fr_FR'},
        // {provide: APP_INITIALIZER, /* ... */},
        {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500 }},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
