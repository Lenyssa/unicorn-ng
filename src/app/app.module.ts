import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UnicornsListPageComponent} from './pages/unicorns-list/unicorns-list.page';
import {UnicornCardComponent} from './pages/unicorns-list/unicorn-card/unicorn-card.component';
import {HttpClientModule} from '@angular/common/http';
import { ResumeComponent } from './pages/unicorns-list/resume/resume.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './shared/components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material';
import { HeaderComponent } from './shared/components/header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        UnicornsListPageComponent,
        UnicornCardComponent,
        ResumeComponent,
        NavComponent,
        HeaderComponent,
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
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
