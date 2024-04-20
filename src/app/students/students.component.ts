import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: any[] = [];
  student: any = {};
  isCreating: boolean = false;
  isUpdating: boolean = false;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents(): void {
    this.studentService.getAllStudents().subscribe(
      (response: any) => {
        this.students = response.students; // Adjust the property name according to your API response
      },
      (error) => {
        console.log(error);
      }
    );
  }

  createNewStudent(): void {
    this.isCreating = true;
    this.student = {}; // Reset form data
  }

  updateStudent(studentId: number): void {
    this.isUpdating = true;
    this.studentService.getStudentById(studentId).subscribe(
      (response: any) => {
        this.student = response.student; // Adjust the property name according to your API response
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteStudent(studentId: number): void {
    this.studentService.deleteStudent(studentId).subscribe(
      (response: any) => {
        console.log('Student deleted successfully.');
        this.getAllStudents(); // Refresh the list of students after deletion
      },
      (error) => {
        console.log(error);
      }
    );
  }

  submitForm(): void {
    if (this.isCreating) {
      this.studentService.createStudent(this.student).subscribe(
        (response: any) => {
          console.log('Student created successfully.');
          this.getAllStudents(); // Refresh the list of students after creation
        },
        (error) => {
          console.log(error);
        }
      );
    } else if (this.isUpdating) {
      this.studentService.updateStudent(this.student.id, this.student).subscribe(
        (response: any) => {
          console.log('Student updated successfully.');
          this.getAllStudents(); // Refresh the list of students after update
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
