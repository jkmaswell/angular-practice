import {Component, OnInit} from '@angular/core';
import {Category} from '../../../core/model/category/category.model';
import {CategoryService} from '../../../core/service/category/category.service';
import {UserService} from '../../../core/service/user/user.service';
import {User} from '../../../core/model/user/user.model';
import {StateService} from '@uirouter/angular';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {

  currentUser: User;

  categories: Category[];

  constructor(private categoryService: CategoryService,
              private userService: UserService,
              private stateService: StateService) {
  }

  ngOnInit() {
    this.loadInitialData();
  }

  loadInitialData() {
    this.categoryService.getAllCategories()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
      });
    this.userService.getUser().subscribe(user => {
      this.currentUser = user;
    });
  }

  logout(): void {
    this.userService.logoutUser().subscribe(response => {
      alert(response);
      this.stateService.go('login');
    });
  }

}
