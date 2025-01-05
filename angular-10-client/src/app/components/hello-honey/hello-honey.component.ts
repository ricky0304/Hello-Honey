import { Component, OnInit } from '@angular/core';
//import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-hello-honey',
  templateUrl: './hello-honey.component.html',
  styleUrls: ['./hello-honey.component.css']
})
export class HelloHoney implements OnInit {
  tutorial = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(/*private tutorialService: TutorialService*/) { }

  ngOnInit(): void {
  }
/*
  saveTutorial(): void {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description
    };

    this.tutorialService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
*/
  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      published: false
    };
  }

}
