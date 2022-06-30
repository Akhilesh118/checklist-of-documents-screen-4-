import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
import { DatePipe } from '@angular/common';

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
  emp_id:any=0;
  pipe = new DatePipe('en-US');
  updatedDate= this.pipe.transform(Date.now(), 'dd/MM/yyyy');
  a:any;

  docList=[
    {"name":"fake","type":"fake","size":0,"updatedDate":this.updatedDate,"docType":this.document_type}
  ];
  
  addDocument(a:any){
      this.docList.push(a);
      console.log(this.docList);
  }
  onSelect(value:string){
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

getFileDetails (event:any) {
  for (var i = 0; i < event.target.files.length; i++) { 
    var name = event.target.files[i].name;
    var type = event.target.files[i].type;
    var size = event.target.files[i].size;
    var modifiedDate = event.target.files[i].lastModifiedDate;
    
    console.log ('Name: ' + name + "\n" + 
      'Type: ' + type + "\n" +
      'Last-Modified-Date: ' + modifiedDate + "\n" +
      'Size: ' + Math.round(size / 1024) + " KB");
  }
  var a={"name":name,"type":type,"size":size,"updatedDate":this.updatedDate,"docType":this.document_type};
  this.a=a;
}
onUpload() {
  /*this.loading = !this.loading;
  console.log(this.file);
  this.fileUploadService.upload(this.file).subscribe(
      (event: any) => {
          if (typeof (event) === 'object') {

              // Short link via api response
              this.shortLink = event.link;

              this.loading = false; // Flag variable 
          }
      }
  );*/
if (this.a!=null && this.document_type!=""){
 this.addDocument(this.a);
}
else{
  alert("please select a document and document type")
}
  
}

}
