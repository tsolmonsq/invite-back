import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { databaseConfig } from './database/database.config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    UserModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),  // Path to your 'public' folder
    }),
  ],
})
export class AppModule {}
