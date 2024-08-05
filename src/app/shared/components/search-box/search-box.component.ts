import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  @Input()
  placeholder:string = '';

  @Input()
  initialValue:string = '';


  @Output()
  onValue: EventEmitter<string> = new EventEmitter();

  private debouncer: Subject<string> = new Subject<string>;
  private debouncerSubscription?:Subscription;

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
    .pipe(
      debounceTime( 350 )
    )
    .subscribe( value => {
      this.onValue.emit(value);
    })
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  onKeyPressed(input: string) {
    this.debouncer.next( input );
  }

  emitValue(query: string) {
    this.onValue.emit(query);
  }
}
