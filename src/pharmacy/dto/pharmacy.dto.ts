import { ApiProperty } from '@nestjs/swagger';
import { Address } from 'src/schemas/hospital.schema';
import { PharmacyDocument } from 'src/schemas/pharmacy.schema';

export class CreatePharmacyDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  control_number: number;
  @ApiProperty()
  license_datetime: Date;
  @ApiProperty()
  update_datetime: Date;
  @ApiProperty()
  address: Address;
  @ApiProperty()
  business_status: string;
  @ApiProperty()
  phone: string;
}

export class DeletePharmacyDto {
  id: Pick<PharmacyDocument, '_id'>;
}
