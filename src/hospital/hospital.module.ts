import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { HospitalService as HospitalService } from './hospital.service';
import { HospitalController } from './hospital.controller';
import { User, UserSchema } from 'src/schemas/user.schema';
import { UserModule } from 'src/user/user.module';
import { Hospital, HospitalSchema } from 'src/schemas/hospital.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Hospital.name, schema: HospitalSchema },
    ]),
  ],
  controllers: [HospitalController],
  providers: [HospitalService],
})
export class HospitalModule {}
