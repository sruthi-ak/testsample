import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../../auth/auth.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

   public blogForm: FormGroup;
  constructor(private  authService:  AuthService, public fb: FormBuilder) { }

  ngOnInit(): void {
  		this.getBlogs();
      this.blogsForm();
  }

  bloglist;
    //display blogs
    getBlogs =() =>
      this.authService.showBlogs()
      .subscribe(res =>(this.bloglist = res));


  blogsForm() {
    this.blogForm = this.fb.group({
      title: ['', [Validators.required]],
      content: ['',[Validators.required]],
      footer: ['', [Validators.required]]
    })  
  }
  get title() {
    return this.blogForm.get('title');
  }

  get content() {
    return this.blogForm.get('content');
  }  

  get footer() {
    return this.blogForm.get('footer');
  }
   ResetForm() {
    this.blogForm.reset();
  }  
 
  submitBlogData() {
    this.authService.createBlogs(this.blogForm.value).then(res => {
            console.log("blogs added")
         });
    this.ResetForm();
   };


}
