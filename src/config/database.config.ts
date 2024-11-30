// src/config/database.config.ts

import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'mysql', 
  host: process.env.DB_HOST, 
  port: parseInt(process.env.DB_PORT, 10), 
  username: process.env.DB_USERNAME, 
  password: process.env.DB_PASSWORD, 
  database: process.env.DB_NAME, 
  entities: [User],
  synchronize: false, 
  logging: true,
};
