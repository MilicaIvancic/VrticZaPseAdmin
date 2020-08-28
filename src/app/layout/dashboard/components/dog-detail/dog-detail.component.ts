import { Component, OnInit } from '@angular/core';
import { DogDetails } from '../../models/dog-details';
import { ActivatedRoute } from '@angular/router';
import { DogService } from '../../service/dog.service';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.scss']
})
export class DogDetailComponent implements OnInit {

  id: any;
  dogDetails : DogDetails;

  constructor(
    private route: ActivatedRoute,
    private dogService: DogService
  ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
  });

  this.getDog();
}

  getDog() {
  this.dogDetails = new DogDetails();
  this.dogService.getDog(this.id).subscribe(
    x => {
      this.dogDetails = x;
      console.log(x);
    }
  );
}

}
