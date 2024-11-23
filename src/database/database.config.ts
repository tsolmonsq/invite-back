import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,    // Set to false in production
  logging: true,        // Enable for debugging
  entities: [__dirname + '/**/*.entity{.ts,.js}'], // Path to entities
  ssl: false,           // SSL not required for InfinityFree
};
