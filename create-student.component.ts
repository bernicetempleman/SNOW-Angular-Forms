import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student: Student = new Student();
  submitted = false;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }

  // newStudent(): void {
  //   this.submitted = false;
  //   this.student = new Student();
  // }

  save() {
    this.studentService.createStudent(this.student)
      .subscribe(data => console.log(data), error => console.log(error));
    this.student = new Student();
   
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

 

}
