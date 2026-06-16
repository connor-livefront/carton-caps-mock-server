import { IsEnum, IsString } from "class-validator";
import { Referral } from "../types/referral";
import { ReferralStatus } from "../types/referral-status";

export class ReferralDto {
  constructor(
    id: string,
    dispalyName: string,
    status: ReferralStatus,
    createdAt: string,
  ) {
    this.id = id
    this.displayName = dispalyName
    this.status = status
    this.createdAt = createdAt
  }

  @IsString()
  id: string

  @IsString()
  displayName: string

  @IsEnum(ReferralStatus)
  status: ReferralStatus

  @IsString()
  createdAt: string

  static fromEntity(referral: Referral): ReferralDto {
    return {
      id: referral.id,
      displayName: `${referral.refereeFirstName} ${referral.refereeLastName[0]}.`,
      status: referral.status,
      createdAt: referral.createdAt,
    }
  }
}
