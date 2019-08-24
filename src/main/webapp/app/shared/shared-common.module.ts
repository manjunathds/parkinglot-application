import { NgModule } from '@angular/core';

import { ParkingLotSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [ParkingLotSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [ParkingLotSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ParkingLotSharedCommonModule {}
