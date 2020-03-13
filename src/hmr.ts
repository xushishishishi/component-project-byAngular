/*
 * @Author: Sharon
 * @Date: 2020-03-13 18:11:26
 * @LastEditors: Sharon
 * @LastEditTime: 2020-03-13 18:11:48
 * @Description: 热模块
 */

import { NgModuleRef, ApplicationRef } from '@angular/core';
import { createNewHosts } from '@angularclass/hmr';

export const hmrBootstrap = (module: any, bootstrap: () => Promise<NgModuleRef<any>>) => {
  let ngModule: NgModuleRef<any>;
  module.hot.accept();
  bootstrap().then(currentModule => ngModule = currentModule);
  module.hot.dispose(() => {
    const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef);
    const elements = appRef.components.map(c => c.location.nativeElement);
    const removeOldHosts = createNewHosts(elements);
    ngModule.destroy();
    removeOldHosts();
  });
};

