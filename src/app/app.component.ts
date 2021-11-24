import { Component, OnInit } from '@angular/core';
//import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'angular-second-tutorial';
	tab = 1;
	dataForm: FormGroup;
	submitted = false;
	check = false;

	constructor(private formBuilder: FormBuilder) { }

	ngOnInit(): void {
		this.dataForm = this.formBuilder.group({
			fname: ['', Validators.required],
			lname: ['', Validators.required],
			nim: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.minLength(8)]],
			cpassword: ['', [Validators.required]],
		}, { validator: this.checkPasswords });
	}

	checkPasswords(fg: FormGroup){
		const pass = fg.controls.password.value;
		const cpass = fg.controls.cpassword.value;

		const control = fg.controls.password;
		const matchcontrol = fg.controls.cpassword;
		if(pass === cpass){
			matchcontrol.setErrors(null);
			return true;
		}  else{
			matchcontrol.setErrors({ mustMatch: true });
			return false;
		}
	}

	get f(){
		return this.dataForm.controls;
	}

	onSubmit(){
		this.submitted = true;
		if(this.dataForm.invalid){
			alert('input data error');
			return;
		} else {
			alert('Data has been set');
			localStorage.setItem('fname', this.f.fname.value);
			localStorage.setItem('lname', this.f.lname.value);
			localStorage.setItem('nim', this.f.nim.value);
			localStorage.setItem('email', this.f.fname.value);
		}
	}
}

// fname = new FormControl('');
// email = new FormControl('');
// lname = new FormControl('');
// nim = new FormControl('');
// setData(){
// 	alert('Data has been set!');
// 	localStorage.setItem('fname', this.fname.value);
// 	localStorage.setItem('lname', this.lname.value);
// 	localStorage.setItem('email', this.email.value);
// 	localStorage.setItem('nim', this.nim.value);
// }