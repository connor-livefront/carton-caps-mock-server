import { IsArray, IsString } from "class-validator"
import { ReferralDto } from "./referral.dto"

export class ReferralSummaryDto {
  constructor(
    referralCode: string,
    referrals: ReferralDto[],
  ) {
    this.referralCode = referralCode
    this.referrals = referrals
  }

  @IsString()
  referralCode: string

  @IsArray()
  referrals: ReferralDto[]
}
