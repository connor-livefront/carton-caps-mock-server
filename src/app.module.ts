import { Module } from '@nestjs/common'
import { ReferralsModule } from './referrals/referrals.module';

@Module({
  imports: [ReferralsModule],
})
export class AppModule {}
