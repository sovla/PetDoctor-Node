import { ApiProperty } from '@nestjs/swagger';
import { Address, HospitalDocument } from 'src/schemas/hospital.schema';

export class CreateHospitalDto {
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

export class DeleteHospitalDto {
  id: Pick<HospitalDocument, '_id'>;
}
