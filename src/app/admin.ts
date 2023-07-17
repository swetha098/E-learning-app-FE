export class Admin {
    courseName: string='';
    courseImageUrl: string; // Add the imageUrl property

    constructor(
        courseName: string,
        courseImageUrl: string
        
      ) {
    this.courseName = courseName;
    this.courseImageUrl = ''; // Initialize the imageUrl property
      }
}
