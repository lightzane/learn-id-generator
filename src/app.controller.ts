import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { v4 as uuidv4 } from 'uuid';
import { API_BODY, API_OPERATION, API_TAGS } from './shared/constants/constants';
import ObjectID from 'bson-objectid';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @ApiTags(API_TAGS.Generators)
  @ApiOperation(API_OPERATION.Uuid)
  @Get('uuid')
  getUuid(): string {
    return uuidv4();
  }

  @ApiTags(API_TAGS.Generators)
  @ApiOperation(API_OPERATION.ObjectId)
  @Get('objectid')
  getObjectId(): string {
    return ObjectID().toHexString();
  }

  @ApiTags(API_TAGS.Utilities)
  @ApiOperation(API_OPERATION.ObjectIdTimestamp)
  @ApiBody(API_BODY.ObjectIdTimestamp)
  @Post('objectid/timestamp')
  getObjectIdTimestamp(@Body('objectId') objectId: string): any {
    return ObjectID(objectId).getTimestamp();
  }
}
