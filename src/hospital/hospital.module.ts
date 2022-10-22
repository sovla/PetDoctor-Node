import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { HospitalService as HospitalService } from './hospital.service';
import { HospitalController } from './hospital.controller';
import { User, UserSchema } from 'src/schemas/user.schema';
import { Hospital, HospitalSchema } from './schemas/hospital.schema';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Hospital.name, schema: HospitalSchema },
    ]),
  ],
  controllers: [HospitalController],
  providers: [HospitalService],
  exports: [HospitalService],
})
export class HospitalModule {}
