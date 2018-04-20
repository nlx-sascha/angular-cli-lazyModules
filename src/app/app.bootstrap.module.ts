import { ApplicationRef, Injector, NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
  ],
  providers: [
    {provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader}
  ],
})
export class AppBootstrapModule {
  constructor(private injector: Injector, private loader: NgModuleFactoryLoader) {
  }

  ngDoBootstrap(appRef: ApplicationRef) {
    this.loader.load('./app.module#AppModule').then(ngFactory => {

    });
  }
}
