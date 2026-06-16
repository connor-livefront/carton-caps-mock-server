import { type ShareContent } from "../types/share-content";
import { IsObject, IsString } from "class-validator";

export class ReferralLinkDto {
  constructor(
    url: string,
    shareContent: ShareContent
  ) {
    this.url = url
    this.shareContent = shareContent
  }

  @IsString()
  url: string

  @IsObject()
  shareContent: ShareContent
}