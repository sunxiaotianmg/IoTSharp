import { NgModule, Type } from '@angular/core';
import { G2MiniAreaModule } from '@delon/chart/mini-area';
import { G2MiniBarModule } from '@delon/chart/mini-bar';
import { DelonFormModule } from '@delon/form';
import { SharedModule } from '@shared';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { FlowviewerComponent } from './flowviewer/flowviewer.component';
import { WidgetdeviceComponent } from './widgetdevice/widgetdevice.component';

import { WidgetsRoutingModule } from './widgets-routing.module';
import { WidgetsComponent } from './widgets/widgets.component';
import { G2BarModule } from '@delon/chart/bar';
import { G2GaugeModule } from '@delon/chart/gauge';
import { G2TimelineModule } from '@delon/chart/timeline';

const COMPONENTS: Type<void>[] = [WidgetsComponent, FlowviewerComponent,WidgetdeviceComponent];

@NgModule({
  imports: [SharedModule, WidgetsRoutingModule, NzCarouselModule, G2BarModule, G2GaugeModule, G2MiniBarModule, G2MiniAreaModule, DelonFormModule,G2TimelineModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class WidgetsModule {}
