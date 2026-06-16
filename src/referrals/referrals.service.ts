import { Injectable, NotFoundException } from '@nestjs/common';
import { referrals, users } from '@/store/mock-data';
import { ReferralLinkDto } from './dtos/referral-link.dto';
import { ReferralSummaryDto } from './dtos/referral-summary.dto';
import { ReferralDto } from './dtos/referral.dto';

@Injectable()
export class ReferralsService {
  getReferralSummary(userId: string): ReferralSummaryDto {
    const user = users.find((user) => user.id === userId)
    if (!user) {
      throw new NotFoundException(`User ${userId} not found`)
    }
    const referralList = referrals
      .filter((referral) => referral.referrerId === user.id)
      .map((referral) => ReferralDto.fromEntity(referral))

    return {
      referralCode: user.referralCode,
      referrals: referralList,
    }
  }

  createReferralLink(userId: string): ReferralLinkDto {
    const user = users.find((user) => user.id === userId)
    const referralCode = user?.referralCode

    const url = `https://cartoncaps.link/abfilefa90p?referral_code=${referralCode}`

    return {
      url,
      shareContent: {
        text: {
          body: `Hi! Join me in earning money for our school by using the Carton Caps app. Download here: ${url}`,
        },
        email: {
          subject: "You're invited to try the Carton Caps app!",
          body: `Hey! Join me in earning cash for our school... Download here: ${url}`,
        },
        share: {
          body: `Join Carton Caps and help earn money for our school! ${url}`,
        },
      },
    }
  }
}
