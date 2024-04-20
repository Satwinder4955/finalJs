import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  // Create a new student
  createStudent(studentData: any): Observable<any> {
    return this.http.post('https://httpbin.org/post', studentData);
  }

  // Read all students
  getAllStudents(): Observable<any> {
    return this.http.get('https://httpbin.org/get');
  }

  // Read a specific student by ID
  getStudentById(studentId: number): Observable<any> {
    return this.http.get(`https://httpbin.org/get?id=${studentId}`);
  }

  // Update a student
  updateStudent(studentId: number, updatedData: any): Observable<any> {
    return this.http.put(`https://httpbin.org/put?id=${studentId}`, updatedData);
  }

  // Delete a student by ID
  deleteStudent(studentId: number): Observable<any> {
    return this.http.delete(`https://httpbin.org/delete?id=${studentId}`);
  }
}
