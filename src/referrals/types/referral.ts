import { ReferralStatus } from "./referral-status"

export interface Referral {
  id: number
  referrerId: number
  refereeFirstName: string
  refereeLastName: string
  status: ReferralStatus
  createdAt: string
}