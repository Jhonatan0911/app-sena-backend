import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//Mongo
import { MongooseModule } from '@nestjs/mongoose';

//Controllers
import { UsersController } from './controllers/users.controller';

//Services
import { UsersService } from './services/users.service';

//Schema
import { UsersSchema } from './schemas/users.schema';
import { ClassSchema } from './schemas/class.schema';
import { ClassController } from './controllers/class.controller';
import { ClassService } from './services/class.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://sena:sena@cluster0.1beq8.mongodb.net/sena?retryWrites=true&w=majority'
    ),
    MongooseModule.forFeature([
      { 
        name: 'Users',
        schema: UsersSchema,
        collection: 'Users'
      },
      { 
        name: 'Class',
        schema: ClassSchema,
        collection: 'Class'
      },
    ]),
  ],
  controllers: [
    AppController,
    UsersController,
    ClassController,
    
  ],
  providers: [
    AppService,
    UsersService,
    ClassService
  ],
})
export class AppModule {}
