import { PharmacySchema } from './../schemas/pharmacy.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { PharmacyService } from './pharmacy.service';
import { PharmacyController } from './pharmacy.controller';
import { Pharmacy } from 'src/schemas/pharmacy.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Pharmacy.name,
        schema: PharmacySchema,
      },
    ]),
  ],
  controllers: [PharmacyController],
  providers: [PharmacyService],
})
export class PharmacyModule {}
