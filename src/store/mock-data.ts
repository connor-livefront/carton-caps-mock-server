import { User } from "@/referrals/types/user"
import { Referral } from "@/referrals/types/referral"
import { ReferralStatus } from "@/referrals/types/referral-status"

export const users: User[] = [
  {
    id: '1',
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'janedoe@nothingspecific.com',
    referralCode: 'XY7G4D',
  },
  {
    id: '2',
    firstName: 'Stephanie',
    lastName: 'Vidal',
    email: 'stephanie.vidal@email.com',
    referralCode: 'AB3KR9',
  },
]

export const referrals: Referral[] = [
  {
    id: '1',
    referrerId: '1',
    refereeFirstName: 'Jonny',
    refereeLastName: 'Smith',
    status: ReferralStatus.Complete,
    createdAt: '2024-08-10T14:22:00Z',
  },
  {
    id: '2',
    referrerId: '1',
    refereeFirstName: 'Archer',
    refereeLastName: 'Kim',
    status: ReferralStatus.Complete,
    createdAt: '2024-08-06T09:45:00Z',
  },
  {
    id: '3',
    referrerId: '1',
    refereeFirstName: 'Helen',
    refereeLastName: 'Yang',
    status: ReferralStatus.Complete,
    createdAt: '2024-07-28T11:30:00Z',
  },
  {
    id: '4',
    referrerId: '2',
    refereeFirstName: 'Chris',
    refereeLastName: 'Angelotti',
    status: ReferralStatus.Complete,
    createdAt: '2024-08-01T16:10:00Z',
  },
  {
    id: '5',
    referrerId: '2',
    refereeFirstName: 'Marcus',
    refereeLastName: 'Webb',
    status: ReferralStatus.Pending,
    createdAt: '2024-08-12T08:55:00Z',
  },
]
