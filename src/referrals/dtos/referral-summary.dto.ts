import { IsArray, IsString } from "class-validator"
import { Referral } from "../types/referral"

export class ReferralSummaryDto {
  constructor(
    referralCode: string,
    referrals: Referral[],
  ) {
    this.referralCode = referralCode
    this.referrals = referrals
  }

  @IsString()
  referralCode: string

  @IsArray()
  referrals: Referral[]
}