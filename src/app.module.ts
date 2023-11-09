import { Module } from '@nestjs/common';
import { AnunciosModule } from './anuncios/anuncios.module';
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'root',
      database: 'back',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    AnunciosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
