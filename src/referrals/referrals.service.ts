import { Injectable } from '@nestjs/common';
import { users } from '@/store/mock-data';
import { ReferralLinkDto } from './dtos/referral-link.dto';

@Injectable()
export class ReferralsService {
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
