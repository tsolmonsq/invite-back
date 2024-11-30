import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('App')  
@Controller('app')
export class AppController {
  
  @Get()
  @ApiOperation({ summary: 'Get a welcome message' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved the welcome message.' })  
  @ApiResponse({ status: 500, description: 'Internal server error.' })  
  getWelcome(): string {
    return 'Welcome to the NestJS Application!';
  }
}
