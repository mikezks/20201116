import { ChangeDetectorRef, ComponentFactoryResolver, Directive, Input, OnDestroy, ViewContainerRef } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'dyn-router-outlet'
})
export class DynRouterOuletDirective implements OnDestroy {
  public outlets: { [name: string]: RouterOutlet } = {};
  public outletNames: string[] = [];

  @Input() public set name(n: string[] | string) {
    this.destroyAllOutlets();
    this.createOutlets(
      n instanceof Array ? n : [n]
    );
  }

  constructor(
      private parentContexts: ChildrenOutletContexts,
      private location: ViewContainerRef,
      private resolver: ComponentFactoryResolver,
      private changeDetector: ChangeDetectorRef,
  ) {}

  createOutlets(outletNames: string[]): void {
    this.outletNames = outletNames.map(name => {
      this.outlets[name] = new RouterOutlet(
        this.parentContexts, this.location, this.resolver, name, this.changeDetector
      );
      this.outlets[name].ngOnInit();
      return name;
    });
  }

  destroyAllOutlets(): void {
    this.outletNames.forEach(name => {
      this.outlets[name].deactivate();
      this.outlets[name].ngOnDestroy();
      delete this.outlets[name];
    });
    delete this.outletNames;
  }

  ngOnDestroy(): void {
    this.destroyAllOutlets();
  }
}
