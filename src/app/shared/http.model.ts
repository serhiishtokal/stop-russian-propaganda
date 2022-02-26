export const RUSSIAN_PROPAGANDA_SITES = 
[
    "http://ria.ru",
    "https://www.vedomosti.ru/",
    "https://www.kp.ru/",
    "http://www.redstar.ru/",
    "https://mospravda.ru/",
    "https://www.ng.ru/editorial/2022-02-24/2_8379_editorial.html",
    "https://www.rbc.ru/rbcfreenews/6217f5129a794758a5daa60d",
    "https://www.trud.ru/",
    "https://aif.ru/",
    "https://lgz.ru/",
    "http://www.fsb.ru/",
    "https://lenta.ru/",
    "https://ria.ru/lenta/",
    "https://www.rbc.ru/",
    "http://kremlin.ru/",
    "http://en.kremlin.ru/",
    "https://smotrim.ru/",
    "https://tass.ru/",
    "https://tvzvezda.ru/",
    "https://rbc.ru/"
]

export class AttackInfo{
    siteUrl: string;
    numberOfPendingRequests: number =0;
    numberOfCompletedRequests: number =0;
    numberOfErrorResponses: number = 0;

  constructor(siteUrl: string){
      this.siteUrl = siteUrl;
  }

}

export function validURL(str: string) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}