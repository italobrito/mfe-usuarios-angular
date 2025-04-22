import { Injectable } from '@angular/core';

import { ApplicationType } from '@entities/application-type';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  private activeApplication: ApplicationType;

  constructor() {
    this.activeApplication = ApplicationType.insert;
  }

  setActiveApplication(applicationType: ApplicationType): void {
    this.activeApplication = applicationType;
  }

  getActiveApplication(): ApplicationType {
    return this.activeApplication;
  }
}
