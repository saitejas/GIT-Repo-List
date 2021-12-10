import {Component, OnInit} from '@angular/core';
import {ServiceService} from "../service.service";
import {LoaderComponent} from "../loader/loader.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
    selector: 'app-git-home',
    templateUrl: './git-home.component.html',
    styleUrls: ['./git-home.component.scss']
})
export class GitHomeComponent implements OnInit {

    userName = 'johnpapa';
    userData: any;
    repositories: any;
    totalCollectionSize: number;
    totalPages: number;
    page = 1;
    itemsPerPage = 10;
    reposURL = '';

    repoError = '';
    userLoading = false;
    userError = '';

    constructor(private service: ServiceService, private dialog: MatDialog) {
    }

    ngOnInit() {
        this.getUser(this.userName);
    }

    getUser(userName) {
        this.userLoading = true;
        const loaderDialog = this.dialog.open(LoaderComponent, {
            width: 'auto',
            height: 'auto',
        });
        this.service.getGitHubUser(userName).subscribe(response => {
            loaderDialog.close();
            if (response) {
                this.userData = response;
                if (this.userData && this.userData.hasOwnProperty('repos_url')) {
                    this.reposURL = this.userData['repos_url'];
                    this.totalCollectionSize = this.userData['public_repos'];
                    this.totalPages = Math.ceil(this.totalCollectionSize / this.itemsPerPage);
                    this.getRepositories(this.page, this.itemsPerPage);
                }
                this.userError = '';
            } else {
                this.userError = 'Oops!!! Error while retrieving user info... Sorry for inconvenience'
            }
            this.userLoading = false;
        }, error => {
            this.userLoading = false;
            if (error.status === 404) {
                this.userError = '404 !!! User Not Found'
            }
            loaderDialog.close();
        })
    }

    getRepositories(page, itemsPerPage) {
        const loaderDialog = this.dialog.open(LoaderComponent, {
            width: 'auto',
            height: 'auto',
        });
        const params = 'page=' + page + '&per_page=' + itemsPerPage;
        this.service.getGitHubRepo(this.reposURL, params).subscribe(response => {
            if (response) {
                this.repositories = response;
                if (this.repositories.length === 0) {
                    this.repoError = 'No repositories found!';
                } else {
                    this.repoError = '';
                }
            } else {
                this.repoError = 'Oops!!! Error while retrieving the repositories. Sorry for the inconvenience';
            }
            loaderDialog.close();
        }, error => {
            this.repositories = [];
            this.repoError = 'Oops!!! Error while retrieving the repositories. Sorry for the inconvenience';
            loaderDialog.close();
        });
    }

    getNewRepositoryData(event) {
        this.getRepositories(event, this.itemsPerPage);
    }

}
