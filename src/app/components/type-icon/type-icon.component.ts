import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  standalone: true,
  selector: 'app-type-icon',
  templateUrl: './type-icon.component.html',
  styleUrls: ['./type-icon.component.scss'],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class TypeIconComponent implements OnInit {

  @Input() name: string = '';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
  }

  ngOnInit(): void {
    if (this.name) {
      console.log(this.name);
      this.matIconRegistry.addSvgIcon(
        this.name,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`./assets/images/icons/icon-${this.name}.svg`)
      );
    }
  }
}
