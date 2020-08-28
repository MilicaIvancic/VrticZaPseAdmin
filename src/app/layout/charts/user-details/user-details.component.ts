import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../models/user-details';
import { ActivatedRoute } from '@angular/router';
import { AplicationUsersService } from '../services/aplication-users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  id: any;
  userDetails : UserDetails;

  constructor(
    private route: ActivatedRoute,
    private service: AplicationUsersService
  ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
  });

  this.getUser();
}

getUser() {
  this.userDetails = new UserDetails();
  this.service.getUser(this.id).subscribe(
    x => {
      this.userDetails = x;
      console.log(x);
    }
  );
}

}
