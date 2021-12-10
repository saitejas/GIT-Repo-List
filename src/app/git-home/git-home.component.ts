import {Component, OnInit} from '@angular/core';
import {ServiceService} from "../service.service";

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

    constructor(private service: ServiceService) {
    }

    ngOnInit() {
        this.getUser(this.userName);
    }

    getUser(userName) {
        this.service.getGitHubUser(userName).subscribe(response => {
            if (response) {
                this.userData = response;
                if (this.userData && this.userData.hasOwnProperty('repos_url')) {
                    this.reposURL = this.userData['repos_url'];
                    this.totalCollectionSize = this.userData['public_repos'];
                    this.totalPages = Math.ceil(this.totalCollectionSize / this.itemsPerPage);
                    this.getRepositories(this.page, this.itemsPerPage);
                }
            }
        })
    }

    getRepositories(page, itemsPerPage) {
        const params = 'page=' + page + '&per_page=' + itemsPerPage;
        this.service.getGitHubRepo(this.reposURL, params).subscribe(response => {
            if (response) {
                this.repositories = response;
            }
        });
    }

    getNewRepositoryData(event) {
        this.repositories = null;
        this.getRepositories(event, this.itemsPerPage);
    }

}
