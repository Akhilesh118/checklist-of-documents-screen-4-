import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
  }
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file: any; // Variable to store file
  work_proof:boolean=false;
  last6:boolean=false;
  form16:boolean=false;
  relieving_letter:boolean=false;
  offer_letter_current_organization:boolean=false;
  salary_proof:boolean=false;
  qualification:boolean=false;
  any_id:boolean=false;
  document_type: string="";

onselect(value:string){
  this.document_type=value;
}
  onWorkProof(){
    this.work_proof=!this.work_proof;
    console.log(this.work_proof);
  }
  onLast6(){
    this.last6=!this.last6;
  }
  onform16(){
    this.form16=!this.form16;
  }
  onRelievingLetter(){
    this.relieving_letter=!this.onRelievingLetter;
  }
  onOfferLetterCurrentOrganization(){
    this.offer_letter_current_organization=!this.offer_letter_current_organization;
  }
  onSalaryProof(){
    this.salary_proof=!this.salary_proof;
  }
  onQualification(){
    this.qualification=!this.qualification;
  }
  onAnyId(){
    this.any_id=!this.any_id;
  }
  onChange(event:any) {
    this.file = event.target.files[0];
}

// OnClick of button Upload
onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    this.fileUploadService.upload(this.file).subscribe(
        (event: any) => {
            if (typeof (event) === 'object') {

                // Short link via api response
                this.shortLink = event.link;

                this.loading = false; // Flag variable 
            }
        }
    );
}


}