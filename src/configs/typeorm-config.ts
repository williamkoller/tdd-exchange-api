import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Currencies } from 'src/currencies/models/currencies.entities';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'mongodb',
  url: process.env.MONGO_DB,
  synchronize: true,
  entities: [Currencies],
  useUnifiedTopology: true,
};
