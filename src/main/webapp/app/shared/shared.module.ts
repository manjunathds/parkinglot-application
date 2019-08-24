import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ParkingLotSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ParkingLotSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ParkingLotSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ParkingLotSharedModule {
  static forRoot() {
    return {
      ngModule: ParkingLotSharedModule
    };
  }
}
