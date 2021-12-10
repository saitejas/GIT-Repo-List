import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import {GitHomeComponent} from './git-home/git-home.component';
import {UserComponent} from './user/user.component';
import {RepositoriesComponent} from './repositories/repositories.component';
import {RepositoryComponent} from './repository/repository.component';
import {HttpClientModule} from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { LoaderComponent } from './loader/loader.component';
import { FormsModule } from '@angular/forms';
import { SearchBoxComponent } from './search-box/search-box.component';

@NgModule({
    declarations: [
        AppComponent,
        GitHomeComponent,
        UserComponent,
        RepositoriesComponent,
        RepositoryComponent,
        LoaderComponent,
        SearchBoxComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        RouterModule,
        HttpClientModule,
        FontAwesomeModule,
        NgbModule,
        NgbPaginationModule,
        MaterialModule,
        FormsModule

    ],
    providers: [HttpClientModule],
    bootstrap: [AppComponent],
    entryComponents: [LoaderComponent]
})
export class AppModule {
}
