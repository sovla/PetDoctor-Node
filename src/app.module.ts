import { HospitalModule } from './hospital/hospital.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { ReviewModule } from './review/review.module';
import { ReplyModule } from './reply/reply.module';
import { PharmacyModule } from './pharmacy/pharmacy.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    UserModule,
    HospitalModule,
    PharmacyModule,
    ReplyModule,
    ReviewModule,
    CategoryModule,
  ],
})
export class AppModule {}
