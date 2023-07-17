import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiUrl = 'http://localhost:8085/course';

 
  constructor(private http: HttpClient) { }
  getCourses(): Observable<Admin[]> {
    return this.http.get<Admin[]>(`${this.apiUrl}/getAllCourses`).pipe(
      map((response: Admin[]) => response.map(course => ({
        courseName: course.courseName,
        courseImageUrl: course.courseImageUrl
      })))
    );
  }
}
