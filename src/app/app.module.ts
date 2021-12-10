import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GitHomeComponent} from './git-home/git-home.component';
import {UserComponent} from './user/user.component';
import {RepositoriesComponent} from './repositories/repositories.component';
import {RepositoryComponent} from './repository/repository.component';
import {HttpClientModule} from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        AppComponent,
        GitHomeComponent,
        UserComponent,
        RepositoriesComponent,
        RepositoryComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        RouterModule,
        HttpClientModule,
        FontAwesomeModule

    ],
    providers: [HttpClientModule],
    bootstrap: [AppComponent]
})
export class AppModule {
}
