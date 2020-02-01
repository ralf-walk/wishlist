import {Injectable} from "@angular/core";

@Injectable()
export class ShareService {

  navigator: any = null;

  constructor() {
    this.navigator = window.navigator;
  }

  isShareEnabled() {
    return this.navigator && this.navigator.share;
  }

  share({title, text, url}: { title: string, text?: string, url?: string }): Promise<any> {
    return this.navigator.share({
      title: title,
      text: text,
      url: url,
    });
  }
}
