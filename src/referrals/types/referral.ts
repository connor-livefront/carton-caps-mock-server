import { ReferralStatus } from "./referral-status"

export interface Referral {
  id: string
  referrerId: string
  refereeFirstName: string
  refereeLastName: string
  status: ReferralStatus
  createdAt: string
}