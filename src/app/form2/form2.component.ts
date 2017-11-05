import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  form: FormGroup;
  data = {
    title:'yyyyyyyyy',
    subtitle:'xxxxxxxxx',
    people:[
      {name:'mary',tel:'0911111111',email:'aaa@gmail.com'},
      {name:'mark',tel:'0922222222',email:'bbb@gmail.com'},
      {name:'eason',tel:'0922222222',email:'bbb@gmail.com'},
      {name:'avon',tel:'0922222222',email:'bbb@gmail.com'}
    ]
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['hello', [Validators.required, Validators.minLength(2)]],
      subtitle: ["eason"],
      people: this.fb.array([
        this.fb.group({
          name: '',
          tel: '',
          email: ''
        }),
        this.fb.group({
          name: this.fb.control(''),
          tel: '',
          email: ''
        })
      ])
    });
    this.form.setControl('people',
    this.fb.array(this.data.people.map(p => this.fb.group(p))));
    this.form.setValue(this.data);
  }

  addPerson() {
    let people = this.form.get('people') as FormArray;
    people.push(
      this.fb.group({
        name: this.fb.control(''),
        tel: '',
        email: ''
      })
    );
  }

}
