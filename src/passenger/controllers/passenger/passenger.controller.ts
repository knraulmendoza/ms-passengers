import { Controller, UseFilters } from '@nestjs/common';
import { PassengerDto } from 'src/passenger/dto/passenger.dto';
import { PassengerService } from 'src/passenger/services/passenger/passenger.service';
import { IPassenger } from 'src/common/interfaces/passenger.interface';
import { PassengerMsg } from 'src/common/constants';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AllExepctionFilter } from 'src/common/filters/http-execption.filter';
@Controller()
export class PassengerController {
  constructor(private readonly passengerService: PassengerService) {}

  @MessagePattern(PassengerMsg.CREATE)
  create(@Payload() entity: PassengerDto): Promise<IPassenger> {
    return this.passengerService.create(entity);
  }
  @MessagePattern(PassengerMsg.FIND_ALL)
  findAll(): Promise<IPassenger[]> {
    return this.passengerService.getAll();
  }
  @MessagePattern(PassengerMsg.FIND_ONE)
  findOne(@Payload() id: string): Promise<IPassenger> {
    return this.passengerService.getById(id);
  }
  @MessagePattern(PassengerMsg.UPDATE)
  update(@Payload() payload: any): Promise<IPassenger> {
    return this.passengerService.update(payload.id, payload.passengerDto);
  }
  @MessagePattern(PassengerMsg.DELETE)
  delete(@Payload() id: string): Promise<IPassenger> {
    return this.passengerService.delete(id);
  }
}
