import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  constructor() {}

  @ViewChild('overviewImgDes', { static: true })
  overviewImgDes!: ElementRef;

  @ViewChild('overviewImgBenefit', { static: true })
  overviewImgBenefit!: ElementRef;

  objectSave: any = {
    ID: 0,
    Price: null,
    ProductName: '',
    Material: null,
    Description: '',
    Benefit: '',
    Title: '',
    IsAvailable: '',
    ProductImages: [],
  };

  ngOnInit(): void {}

  // Hiển thị file
  onFileBenefitSelected(e: any) {
    const _this = this;
    const files: File[] = e.target.files;
    console.log(e.target.files);
    let listFile: any = [];
    if (files) {
      _this.overviewImgBenefit.nativeElement.innerHTML = '';
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(files[i]);

        reader.onload = () => {
          _this.overviewImgBenefit.nativeElement.innerHTML +=
            _this.overviewImgBenefit.nativeElement.innerHTML +
            `<img src="${
              reader.result as string
            }" style="width: 260px;height: 180px;background: 4px;"/>`;
        };
      }
    }
  }

  // Hiển thị file
  onFileDesSelected(e: any) {
    const _this = this;
    const files: File[] = e.target.files;
    console.log(e.target.files);
    let listFile: any = [];
    if (files) {
      _this.overviewImgDes.nativeElement.innerHTML = '';
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(files[i]);

        reader.onload = () => {
          _this.overviewImgDes.nativeElement.innerHTML +=
            _this.overviewImgDes.nativeElement.innerHTML +
            `<img src="${
              reader.result as string
            }" style="width: 260px;height: 180px;background: 4px;"/>`;
        };
      }
    }
  }

  saveProduct() {
    console.log(this.objectSave);
  }
}
