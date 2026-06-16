import { Controller, Get, Post, Param, NotFoundException } from '@nestjs/common'
import { ReferralsService } from './referrals.service'
import { users } from '@/store/mock-data'
import { 
  ApiBearerAuth,
  ApiOperation,
  ApiUnauthorizedResponse,
 } from '@nestjs/swagger'
import { Http401Error } from '@/errors/http-401-error'

@ApiBearerAuth()
@Controller('referrals')
export class ReferralsController {
  constructor(
    private readonly referralsService: ReferralsService
  ) {}

  @Get(':userId/me')
  @ApiUnauthorizedResponse({
    description: 'The request could not be authenticated.',
    type: Http401Error,
  })
  getReferralSummary(@Param('userId') userId: string) {
    const user = users.find(
      (user) => user.id === userId
    )
    if (!user) {
      throw new NotFoundException()
    }

    return this.referralsService.getReferralSummary(userId)
  }

  @Post(':userId/link')
  @ApiOperation({
    description: 'Creates a referral link for the user with the provided ID and provides share content copy',
    operationId: 'createReferralLink'
  })
  @ApiUnauthorizedResponse({
    description: 'The request could not be authenticated.',
    type: Http401Error,
  })
  createReferralLink(@Param('userId') userId: string) {
    const user = users.find(
      (user) => user.id === userId
    )
    if (!user) {
      throw new NotFoundException()
    }

    return this.referralsService.createReferralLink(userId)
  }
}
