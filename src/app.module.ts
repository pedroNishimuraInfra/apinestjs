import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SamsungCareModule } from './samsungCare/samsung-care.module';
import { SamsungPoModule } from './samsungPo/samsung-po.module';
import { SamsungKnoxModule } from './samsungKnox/samsung-knox.module';
import { UserModule } from './user/user.module';
import { ScheduleModule } from '@nestjs/schedule/dist';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    SamsungCareModule, 
    SamsungPoModule,
    SamsungKnoxModule,
    UserModule,
    ScheduleModule.forRoot(),
    /*TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 5000,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      synchronize: true,
    })*/
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
