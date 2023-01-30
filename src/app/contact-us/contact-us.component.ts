import { AfterViewInit, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges, DoCheck {

  @Input() piValue: number;

  constructor(
    private cdr : ChangeDetectorRef,
    private cs: CommonService,
    private ls: LogService,
    private router : Router
  ) {

  }

  checkout() {
    this.cs.checkBalance();
    this.cs.log('checkout');
    this.ls.log('checkout');
  }

  addToCart() {
    this.cs.checkBalance();
  }

  
  goToCarousel() {
    this.router.navigate(['/carousel']);
  }


  ngOnInit(): void {

  }

  ngDoCheck(): void {
    debugger
  }


  btnClicked() {
    this.cdr.detectChanges();
  }


  ngAfterViewInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    debugger
  }

  ngOnDestroy() {
  }





}

// Component Lifecycle Hooks
// 1) ngOnInit
// 2) ngOnDestroy
// 3) ngAfterViewInit
// 4) ngOnChanges

// Change Detection

// Constructor Dependency Injection - (Providers, Services) - Today,
// Routing - Tomorrow

// ChangeDetectionRef


// DRY - Donot repeat yourself
