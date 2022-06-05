import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPassenger } from 'src/common/interfaces/passenger.interface';
import { PASSENGER } from 'src/common/models/models';
import { BaseRepository } from 'src/core/base-repository';
import { PassengerDto } from 'src/passenger/dto/passenger.dto';

@Injectable()
export class PassengerService extends BaseRepository<PassengerDto, IPassenger> {
  constructor(@InjectModel(PASSENGER.name) model: Model<IPassenger>) {
    super(model);
  }
}
